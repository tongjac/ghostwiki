const { response } = require("express");

//waiting for DOM content to be loaded before running JS
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");

    const cmtsContainer = document.getElementById("");
    const cmtsForm = document.getElementById("cmtForm");

    //init comment array
    let comments = [];
    
    //This function resets comments with the comments 
    //that have been stored in the database
    const initCmts = () => {
        cmtsContainer.innerHTML = '';
        const cmtsToAdd = [];

        for (let i = 0; i < comments.length; i++) {
            //***********Add create new row later */
            cmtsToAdd.push((comments[i]));
            
        }

        //*******bring this back once we have the html section updated */
        // cmtsToAdd.forEach((row) => cmtsContainer.append(row))

    }

    //helper function to get comments
    const getCmts = () => {
        fetch("api/comments", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            comments = data;
            initCmts()
        })
    }

    getCmts();

    // Helper function to delete a comment
    // const deleteCmts = (e) => {
    //     e.stopPropagation();
    //     const { id } = e.target.dataset;

    //     fetch(`/api/comments/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     }).then(getCmts);
    // };

      // Update a todo (PUT)
    // const updateCmts = (comments) => {
    //     console.log('attempting to update with', comments);
    //     fetch('/api/comments', {
    //         method: 'PUT',
    //         headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(comments),
    //     }).then((response) => console.log(response));
    // };


    //*******Make a createNewRow Function */

      // Function to actually put the todo on the page
    const insertCmts = (e) => {
        e.preventDefault();
        const comments = {
        text: document.getElementById("newCmt").value.trim(),
        };
        if (comments.text) {
            fetch('/api/comments', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(comments),
            })
            .then((response) => response.json())
            .then(() => getCmts());
            }   
  };
  cmtsForm.addEventListener('submit', insertCmts);

