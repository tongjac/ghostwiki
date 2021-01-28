var articleID = 1;

// Waiting for DOM content to be loaded before running JS.
document.addEventListener("DOMContentLoaded", (e) => {

  const articleTitleList = document.getElementById("articleTitleList");
  const htmlTitle = document.getElementById("htmlTitle");
  const articleContent = document.getElementById("articleContent");

  // articles array is getting data from the getArticles() function.
  let articles = [];

  // Helper function to actually get articles from database.
  // The data is then added to the articles array.
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
        searchCol();
        renderArticle(0);
      });
  };

  // Populates titles of all articles in the database to the left column of the lage.
  const searchCol = () => {
    for (let i = 0; i < articles.length; i++) {
      let listItem = document.createElement("li");
      let ArticleTitle = articles[i].title;
      listItem.classList.add("articleTitle");
      listItem.setAttribute("data-id", `${articles[i].id}`)
      listItem.innerHTML = ArticleTitle;
      articleTitleList.appendChild(listItem);
    }
  };

  // Ensures that the title the user clicked is getting loaded to the page.
  let dataIDFunc = (e) => {
    if(e.target.matches(".articleTitle")){
      let id = parseInt(e.target.getAttribute("data-id")) - 1;
      renderArticle(id)
    }
  };
  
  // Renders articles to page.
  const renderArticle = (id) => {
    articleID = parseInt(id);
    let title = articles[id].title
    let content = articles[id].content
    htmlTitle.innerHTML = title;
    articleContent.innerHTML = content;
  };

  // Upon DOM completing its load, running this function allows the use of the data from the database right away in other functions.
  getArticles();

  // "On Click" listener function for users to start reading articles.
  articleTitleList.addEventListener("click", dataIDFunc);
});
