document.addEventListener("DOMContentLoaded", init);

function init(){
    addSw();
    console.log("Page Loaded");
    fetchData();
}

let fetchData = () => {
    fetch(`${window.location.href}api/articles`)
    .then(res => res.json())
    .then(res => {
        cacheArticles(res);

        res.forEach(element => {
            qs(".newsArticles").innerHTML += `<p>${element.title}</p>`;
        });
    })
    .catch(err => console.error(err));
}

let cacheArticles = (articles) => localforage.setItem("articles", json.stringify(articles)).then( () => log(res))

let addSw = () => {
    console.log("adding serviceworkes");
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/sw.js").then(function(res) {
            console.log("Successfully registered ServiceWorker with scope: " + res.scope);
        }).catch(function(err){
            console.log("Error Registering service worker: " + err);
        })
    } else {
        console.log("Something's wrong")
    }   
}