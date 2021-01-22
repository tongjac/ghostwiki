//Dependencies
const express = require('express');
const expHB = require('express-handlebars');
const mysql = require('mysql')
const articles = require("./app/models/articles")

// setting up port
const PORT = process.env.PORT || 8080;

const app = express();

//sets up express app for data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//sets up handlebars
app.engine('express-handlebars', expHB({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

//static directory to be served
app.use(express.static("app/public"))

//Routes
// require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);



//******SETTING UP mysql FOR TESTING STUFF WILL DELETE LAYTORRRR */
// const connection = mysql.createConnection({
//     host: 'localhost',
//     PORT: 3306,
//     user: 'root',
//     password: 'abc123',
//     database: 'wiki'
    
// })

// connection.connect((err) => {
//     if(err) {
//         console.log(`error connecting: ${err.stack}`);
//         return;
//     }

//     console.log(`Connected at http://localhost:${connection.threadId}`)
// })

// add routes later

// app.listen(PORT, () => console.log(`Listening at port http://localhost:${PORT} `))

articles.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening at port http://localhost:${PORT} `))
});