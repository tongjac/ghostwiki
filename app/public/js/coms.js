// Waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
console.log("DOM Loaded");

  const commentContainer = document.getElementById("commentContainer");
  const cmtsForm = document.getElementById("cmtsForm");

   //init comment array
  let commentsArray = [];

    // Populates comments to the page when called
    const postComment = () => {
      console.log(articleID + " Hello from Coms.js");
      const userIcon = "http://placekitten.com/50/50";
      const userName = "lil_wolfmask";
      const comment = "Text content text content text content"
      for (let i = 0; i < 4; i++) {
        // Inserts the literal card HTML with escapes for unique user data
        commentContainer.insertAdjacentHTML(
          'beforeend',
          `<div class="card p-3 border-blue mt-3">
          <span class="dots"></span>
          <div class="d-flex justify-content-between mt-2">
            <div class="d-flex flex-row">
            
              <div class="container">
                <div class="row">
                  <div class="col-md-2">
                    <img src="${userIcon}" style="margin-top:10px; width="55"; height="55"" class="rounded-circle">
                  </div>

                  <div class="col-md-10">
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

            </div>
          </div>
        </div>`
      );
    }
  };

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
            console.log("After witchcraft: ", commentsArray)
          })
    };

    getCmts();
    cmtsForm.addEventListener("submit", postNewCmt);
    document.getElementById("articleTitleList")
    .addEventListener("click", () => {
      postComment(),
      countCmts()
    });

});
