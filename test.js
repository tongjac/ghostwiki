// old code
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