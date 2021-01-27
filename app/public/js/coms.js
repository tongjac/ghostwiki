//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
    // console.log("DOM Loaded");

    const commentContainer = document.getElementById("commentContainer");
    const cmtsForm = document.getElementById("cmtsForm");

    //init comment array
    let commentsArray = [];
    

    // Populates comments to the page
    const postComment = () => {
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
            <img src="${userIcon}">
              <div class="d-flex flex-column">
                <h6 class="mb-0">${userName}</h6>
                <hr>
              </div>
            </div>
          </div>
          
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <p class="content">
                  ${comment}
                </p>
              </div>
            </div>

          </div>
        </div>`
          );
      };
    }


    //helper function to get comments
    const getCmts = () => {
        fetch("/api/comments", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data from getCmts function", data);
            commentsArray = data;
        })
    }

 
    postComment();


    // new code
    const postNewCmt = (e) => {
      e.preventDefault();
      const comments = {
      comment: document.getElementById("newCmt").value.trim(),
      user_name: document.getElementById("userName").value
      };
      
      console.log(comments.comment)
      console.log(comments.user_name)
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

    cmtsForm.addEventListener("submit", postNewCmt)

    getCmts();

});

