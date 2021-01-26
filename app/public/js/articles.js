//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");

    const articleContainer = document.getElementById("articleContainer");
    const articleForm = document.getElementById("articleForm");

    //articles array is getting data from the getArticles function
    //this allows the data to be used in other functions
    //ex. articles[1], articles[2]
    let articles = [];

    //helper function to get articles
    //the data is then added to the articles array
    //using some sort of witchcraft
    const getArticles = () => {
        fetch("/api/articles", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data from getArticles function", data);
            articles = data;
        })
    }
    //running this function allows the use of the data
    //from the table right away in other functions
    getArticles();

    //soooo articles array now has data to use below
    //you can call on specific articles if needed

    //Im going to try to call specific articles here
    const chooseArticle

});
