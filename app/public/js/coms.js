// Waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {

  const commentContainer = document.getElementById("commentContainer");
  const cmtsForm = document.getElementById("cmtsForm");

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
        commentsArray = data;
        postComment();
      });
  };

  // Populates comments to the page when called
  const postComment = () => {
    let comCard = "";
    commentContainer.innerHTML = "";
    for (let i = 0; i < commentsArray.length; i++) {
      if (commentsArray[i].article_id === articleID + 1) {
        let userIcon = "http://placekitten.com/50/50";
        let userName = commentsArray[i].user_name;
        let comment = commentsArray[i].comment;
        let comID = commentsArray[i].id;
        comCard = `<div class="card p-3 border-blue mt-3">
        <span class="dots"></span>
        <div class="d-flex justify-content-between mt-2">
          
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
                  <div class="col-md-2" style="float:right">
                    <button type="button" class="btn btn-danger btn-sm ms-1" comment-id="${comID}">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>`
          commentContainer.insertAdjacentHTML('afterbegin', comCard);
        };
      };
    };
  
  // Posting a New Comment 
  const postNewCmt = (e) => {
    e.preventDefault();
    const comments = {
    comment: document.getElementById("newCmt").value.trim(),
    user_name: document.getElementById("userName").value,
    article_id: articleID + 1
    };
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
          getCmts();
          postComment();
        })
    };

    // Deleting a comment
  const deleteCmts = (e) => {
    fetch("/api/comments/:id", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
        .then((data) => {
        commentsArray = data;
        postComment();
      });
  };

  getCmts();

  cmtsForm.addEventListener("submit", (e) => {
    e.preventDefault(), 
    postNewCmt(e), 
    getCmts(e);
  });

  document.getElementById("articleTitleList").addEventListener("click", () => {
    postComment();
  });
  
});
