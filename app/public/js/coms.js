//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");

    const commentContainer = document.getElementById("commentContainer");
    const cmtsForm = document.getElementById("cmtsForm");

    //init comment array
    let comments = [];
    
    //This function resets comments with the comments 
    //that have been stored in the database
    // const initCmts = () => {
    //     // cmtsContainer.innerHTML = '';
    //     const cmtsToAdd = [];

    //     for (let i = 0; i < comments.length; i++) {
    //         //***********Add create new row later */
    //         cmtsToAdd.push((comments[i]));
            
    //     }
    // }
    // const renderCom = () => {
       //the cards will go inside of commentContainer 
       //card with the class stuff
       //then make the d-flex flex-row section
       //within that the user-image
       //make an img section

       //then a d-flex flex-column
       //h6 class 
       //span class

       //comment text

    //    let cardContainer = document.createElement("div");
    //    cardContainer.classList.add("card p-3 border-blue mt-3");
    //    let cardDetailsContainer = document.createElement("div");
    //    cardDetailsContainer.classList.add("d-flex justify-content-between mt-2")
    //    let cardDetailsSubContainer =  document.createElement("div")
    //    cardDetailsSubContainer.classList.add("d-flex flex-row")
    //    let userImgDiv = 
    // }

    // Populates comments to the page
    const postComment = () => {
      const userIcon = "http://placekitten.com/50/50";
      const userName = "3rd_Eye_LLama";
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
            comments = data;
            // initCmts()
        })
    }

    // getCmts();
    postComment();
});

