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

    getCmts();



});

