//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM Loaded");

  const articleContainer = document.getElementById("articleContainer");
  const articleForm = document.getElementById("articleForm");
  const articleTitles = document.getElementById("articleTitles")

  //articles array is getting data from the getArticles function
  let articles = [];

  //helper function to get articles
  //the data is then added to the articles array
  //using some sort of witchcraft
  const getArticles = () => {
    fetch("/api/articles", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        articles = data;
        console.log(articles, "this is new articles data");

        //adding titles to search col
        const searchCol = () => {
          for (let i = 0; i < articles.length; i++) {
            console.log(articles[i].title);
            let titles = articles[i].title;
            let listItem = document.createElement("li");
            listItem.classList.add("text-white");
            listItem.innerHTML = titles;
            articleTitles.appendChild(listItem)
            
          }
        };
        searchCol();




      });
  };
  //running this function allows the use of the data
  //from the table right away in other functions
  getArticles();

});
