//Dependencies
const db = require("../models");


// THIS NEEDS A WAY TO ADD USERNAME ETC************




//routes
module.exports = (app) => {

  app.get("/api/comments", (req, res) => {
 
    console.log("getting comments")
    db.comments.findAll({}).then((dbComs) => res.json(dbComs));
  });

  app.post("/api/comments", (req, res) => {
    console.log(req.body)
    db.comments.create({
      comment: req.body.comment

    }).then((dbComs) => res.json(dbComs))
  })

  app.delete("/api/comments/:id", (req, res) => {
    db.comments.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbComs) => res.json(dbComs));
  });

  //We might, probably will,  need to mdify this later
  app.put('/api/comments', (req, res) => {
    db.comments.update(req.body, {
      where: {
        comment: req.body.comment
      },
    }).then((dbComs) => res.json(dbComs));
  });

};
