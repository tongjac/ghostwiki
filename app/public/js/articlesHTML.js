//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM Loaded");

  const articleContainer = document.getElementById("articleContainer");
  const articleForm = document.getElementById("articleForm");
  const articleTitleList = document.getElementById("articleTitleList");
  const htmlTitle = document.getElementById("htmlTitle");
  const articleContent = document.getElementById("articleContent");
  const searchOnClick = document.getElementById("searchOnClick")
  //this id was set on line 31
  const itemTitle = document.getElementById("itemTitle")

  

  //articles array is getting data from the getArticles function
  let articles = [];

  // let loadNewArticle = () => {
  //   //we can get article data
  //   let title = itemTitle.value;
  //   console.log(title)

  // TRYING DOING TIS.TEXTCONTENT OR LOOK INTO THE DATA ATTRIBUTES
  // }

  //adding titles to search col
  const searchCol = () => {
    for (let i = 0; i < articles.length; i++) {
      console.log(articles[i].title);
      let titles = articles[i].title;
      let listItem = document.createElement("li");
      listItem.classList.add("text-white");
      listItem.setAttribute("id", "itemTitle")
      listItem.innerHTML = titles;
      articleTitleList.appendChild(listItem);
    }
  };
  
  const renderArticle = () => {
    let title = articles[1].title
    let content = articles[1].content
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
        console.log(articles, "this is new articles data");
        searchCol();
        renderArticle();
        // loadNewArticle();
      });
  };
  //running this function allows the use of the data
  //from the table right away in other functions
  getArticles();

  // itemTitle.addEventListener("click", loadNewArticle)
  
});
