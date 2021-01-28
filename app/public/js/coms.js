<<<<<<< HEAD
const articles = require("../../models/articles");

//waiting for DOM content to be loaded before running JS
=======
// Waiting for DOM content to be loaded before running JS
>>>>>>> 89de1d765b4b566b859b2fbafa550f6e11d92124
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM Loaded");

  const commentContainer = document.getElementById("commentContainer");
  const cmtsForm = document.getElementById("cmtsForm");

<<<<<<< HEAD
  //init comment array
  let commentsArray = [];

  // Populates comments to the page
  const postComment = () => {
    const userIcon = "http://placekitten.com/50/50";
    const userName = "lil_wolfmask";
    const comment = "Text content text content text content";
    for (let i = 0; i < commentsArray.length; i++) {
      if (commentsArray.article_id === articles.id) {
        // Inserts the literal card HTML with escapes for unique user data
        commentContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="card p-3 border-blue mt-3">
          <span class="dots"></span>
          <div class="d-flex justify-content-between mt-2">
            <div class="d-flex flex-row">
            
              <div class="container">
=======
   //init comment array
  let commentsArray = [];

  // Helper function to get comments
  const getCmts = () => {
    fetch("/api/comments", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data from getCmts function", data);
        commentsArray = data;
        // initCmts()
      });
  };

  // Populates comments to the page when called
  const postComment = () => {
    console.log(articleID + " Hello from Coms.js");
    console.log("Line 30 coms.js" + commentsArray.length);
    let kitties = "";
    let userIcon = "http://placekitten.com/50/50";
    let userName = commentsArray[0].user_name;
    let comment = commentsArray[0].comment;
    kitties.innerHTML = `<div class="card p-3 border-blue mt-3">
      <span class="dots"></span>
      <div class="d-flex justify-content-between mt-2">
        <div class="d-flex flex-row">
          <div class="container">
            <div class="row">
              <div class="col-md-2">
                <img src="${userIcon}" style="margin-top:10px; width="55"; height="55"" class="rounded-circle">
              </div>

              <div class="col-md-10">
>>>>>>> 89de1d765b4b566b859b2fbafa550f6e11d92124
                <div class="row">
                  <div class="col-md-12">
                    <h6 class="mb-0" style="font-weight: bold; font-size: 15; margin-left:20px">${userName}</h6>
                  </div>
                </div>
                <div class="row">
                <div class="col-md-12">
                  <p class="content" style="margin-left:20px">
                    ${comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>`
        );
      }
    }
=======
        </div>
      </div>
    </div>`
  ;
    // SELECT user_icon FROM comments WHERE = ? 
    // [article_id = req.body.countThis]
    // for (let i = 0; i < 3, i++;) {

      // Inserts the literal card HTML with escapes for unique user data
      // .insertAdjacentHTML (        'beforeend',)
      commentContainer.prepend(kitties);

  // }
>>>>>>> 89de1d765b4b566b859b2fbafa550f6e11d92124
  };

  const countCmts = () => {
    let countThis = articleID + 1;
    fetch(`/api/comments/count=${countThis}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("The number of comments for article " + articleID + " is ", data);
      });
  };
<<<<<<< HEAD

  postComment();

  // new code
  const postNewCmt = (e) => {
    e.preventDefault();
    const comments = {
      comment: document.getElementById("newCmt").value.trim(),
      user_name: document.getElementById("userName").value,
      article_id: articleID + 1,
    };
    console.log(
      `Article ID: ${articleID}, User: ${comments.user_name}, Comment: "${comments.comment}`
    );
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comments),
    })
      .then((response) => response.json())
      .then(() => {
        commentsArray.push(comments);
        console.log("After witchcraft: ", commentsArray);
      });
  };

  cmtsForm.addEventListener("submit", postNewCmt);

  getCmts();
=======
 
    // Posting a New Comment 
    const postNewCmt = (e) => {
      e.preventDefault();
      const comments = {
      comment: document.getElementById("newCmt").value.trim(),
      user_name: document.getElementById("userName").value,
      article_id: articleID + 1
      };
      console.log(`Article ID: ${articleID}, User: ${comments.user_name}, Comment: "${comments.comment}`);
      fetch('/api/comments', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(comments),
          })
          .then((response) => response.json())
          .then(() => {
            commentsArray.push(comments)
            postComment();
            console.log("After witchcraft: ", commentsArray)
          })

    };

    getCmts();

    cmtsForm.addEventListener("submit", postNewCmt);

    document.getElementById("articleTitleList")
    .addEventListener("click", () => {
      postComment()
    });

>>>>>>> 89de1d765b4b566b859b2fbafa550f6e11d92124
});
