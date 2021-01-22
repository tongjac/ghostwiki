//Dependencies

const articles = require("../models/articles")

//routes
module.exports = (app) => {
    app.get("/api/articles", (req, res) => {
        articles.findAll({}).then((dbArticles) => res.send(dbArticles))
    })
}


