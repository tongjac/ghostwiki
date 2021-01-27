//Dependencies
const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/comments", (req, res) => {
    db.comments.findAll({}).then((dbComs) => res.json(dbComs));
  });

  // I want to count how many comments are in an article.
  app.get("/api/comments/count", (req, res) => {
    let articleID = req.query.count;
    console.log(articleID);
    db.comments
    .count({
      where: {
        article_id: articleID,
      }
    }).then((dbComs) => res.json(dbComs));
  });

  app.post("/api/comments", (req, res) => {
    console.log(req.body);
    db.comments
      .create({
        comment: req.body.comment,
        user_name: req.body.user_name,
        article_id: req.body.article_id
      })
      .then((dbComs) => res.json(dbComs));
  });

  app.delete("/api/comments/:id", (req, res) => {
    db.comments
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbComs) => res.json(dbComs));
  });

  //We might, probably will,  need to mdify this later
  app.put("/api/comments", (req, res) => {
    db.comments
      .update(req.body, {
        where: {
          comment: req.body.comment,
        },
      })
      .then((dbComs) => res.json(dbComs));
  });

  app.get("/api/articles", (req, res) => {
    console.log("getting articles");
    db.articles.findAll({}).then((dbArticles) => res.json(dbArticles));
  });

  // PROBLEM WITH date_revised NOT HAVING DEFAULT VALUE
  app.post("/api/articles", (req, res) => {
    console.log(req.body);
    db.articles
      .create({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
      })
      .then((dbArticles) => res.json(dbArticles));
  });

  app.delete("/api/articles/:id", (req, res) => {
    db.articles
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbArticles) => res.json(dbArticles));
  });

  //THIS NEEDS TO BE FIXED
  app.put("/api/articles", (req, res) => {
    db.articles
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then((dbArticles) => res.json(dbArticles));
  });

  app.get("/api/user", (req, res) => {
    console.log("getting user");
    db.user.findAll({}).then((dbUser) => res.json(dbUser));
  });

  // Commented out for now
  app.post("/api/user", (req, res) => {
    console.log(req.body);
    db.user
      .create({
        user_name: req.body.user_name,
        user_icon: req.body.user_icon,
        email: req.body.email,
        password: req.body.password,
        contribution: req.body.contribution,
      })
      .then((dbUser) => res.json(dbUser));
  });

  app.delete("/api/user/:id", (req, res) => {
    db.user
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbUser) => res.json(dbUser));
  });

  app.put("/api/user", (req, res) => {
    db.user
      .update(req.body, {
        where: {
          id: req.body.id
        },
      })
      .then((dbUser) => res.json(dbUser));
  });
};
