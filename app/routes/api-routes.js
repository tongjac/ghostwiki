//Dependencies
const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/comments", (req, res) => {
    db.comments.findAll({}).then((dbComs) => res.json(dbComs))
    .catch((err) => res.json(err));
  });

  // Posts user comment to database
  app.post("/api/comments", (req, res) => {
    console.log(req.body);
    db.comments
      .create({
        comment: req.body.comment,
        user_name: req.body.user_name,
        article_id: req.body.article_id
      })
      .then((dbComs) => res.json(dbComs))
      .catch((err) => res.json(err));
  });

  // Deletes Comments with the passed id
  app.delete("/api/comments/:id", (req, res) => {
    db.comments
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbComs) => res.json(dbComs))
      .catch((err) => res.json(err));;
  });

  // Update function for existing comments (unused)
  app.put("/api/comments", (req, res) => {
    db.comments
      .update(req.body, {
        where: {
          comment: req.body.comment,
        },
      })
      .then((dbComs) => res.json(dbComs))
      .catch((err) => res.json(err));
  });

  // Populates an array with all article data
  app.get("/api/articles", (req, res) => {
    console.log("getting articles");
    db.articles.findAll({}).then((dbArticles) => res.json(dbArticles))
    .catch((err) => res.json(err));
  });

  // Posts articles
  app.post("/api/articles", (req, res) => {
    db.articles
      .create({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
      })
      .then((dbArticles) => res.json(dbArticles))
      .catch((err) => res.json(err));
  });

  // Deletes articles with the passed id
  app.delete("/api/articles/:id", (req, res) => {
    db.articles
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbArticles) => res.json(dbArticles))
      .catch((err) => res.json(err));
  });

  // Unused update method for updating existing articles
  app.put("/api/articles", (req, res) => {
    db.articles
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then((dbArticles) => res.json(dbArticles))
      .catch((err) => res.json(err));
  });

  // Obtains user data on get
  app.get("/api/user", (req, res) => {
    console.log("getting user");
    db.user.findAll({}).then((dbUser) => res.json(dbUser))
    .catch((err) => res.json(err));
  });

  // Creation of a new User
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
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.json(err));
  });

  // Deletion of existing user
  app.delete("/api/user/:id", (req, res) => {
    db.user
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.json(err));
  });

  // Update user info for example, changing email, display name, password, etc.
  app.put("/api/user", (req, res) => {
    db.user
      .update(req.body, {
        where: {
          id: req.body.id
        },
      })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.json(err));
  });
};
