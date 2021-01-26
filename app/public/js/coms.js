//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");

    const cmtsContainer = document.getElementById("cmtsContainer");
    const cmtsForm = document.getElementById("cmtsForm");

    //init comment array
    let comments = [];
    
    //This function resets comments with the comments 
    //that have been stored in the database
    const initCmts = () => {
        // cmtsContainer.innerHTML = '';
        const cmtsToAdd = [];

        for (let i = 0; i < comments.length; i++) {
            //***********Add create new row later */
            cmtsToAdd.push((comments[i]));
            
        }
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
            initCmts()
        })
    }

    getCmts();



});

