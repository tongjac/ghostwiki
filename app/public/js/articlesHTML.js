var articleID;
//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
  // console.log("DOM Loaded");

  const articleContainer = document.getElementById("articleContainer");
  const articleTitleList = document.getElementById("articleTitleList");
  const htmlTitle = document.getElementById("htmlTitle");
  const articleContent = document.getElementById("articleContent");
  const searchOnClick = document.getElementById("searchOnClick")
  const itemTitle = document.getElementById("itemTitle")

  

  //articles array is getting data from the getArticles function
  let articles = [];

  let testFunc = (e) => {
    if(e.target.matches(".articleTitle")){
      let id = parseInt(e.target.getAttribute("data-id")) - 1;
      renderArticle(id)
    }
   
  }

  //adding titles to search col
  const searchCol = () => {
   
    for (let i = 0; i < articles.length; i++) {
      // console.log(articles[i].title);
      let listItem = document.createElement("li");
      let ArticleTitle = articles[i].title;
      listItem.classList.add("articleTitle");
      listItem.setAttribute("data-id", `${articles[i].id}`)
      listItem.innerHTML = ArticleTitle;
      articleTitleList.appendChild(listItem);


    }
    // console.log(listItem)
  };
  
  const renderArticle = (id) => {
    articleID = parseInt(id);
    let title = articles[id].title
    let content = articles[id].content
    htmlTitle.innerHTML = title;
    articleContent.innerHTML = content;
  }
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
        // console.log(articles, "this is new articles data");
        searchCol();
        renderArticle(0);
        // loadNewArticle();
        
      });
  };
  //running this function allows the use of the data
  //from the table right away in other functions
  getArticles();

articleTitleList.addEventListener("click", testFunc)
  
});
