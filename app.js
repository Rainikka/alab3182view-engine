/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.2 **********/
/******************************/

/******************************/
/***** BUILDING AN EXPRESS ****/
/******* APPLICATION *********/
/******* 18-APR-2025 *********/

/******** Knowledge Inspiration 1 ********
 * 
 * Media Outlet :: YouTube 
 * Title :: Node.js & Express 
 * Creator/Autor :: Traversy Media
 * 
 ******** Knowledge Inspiration 2 ********
 * 
 * Media Outlet:: Geeks4Geeks
 * Title :: Pug View Engne Installation
 * Creator / Autor :: Geeks4Geeks
 * 
 * ******** Knowledge Inspiration 3 ********
 * 
 * Media Outlet :: Medium.com
 * Title :: Hosting a JSON API on GitHub Pages
 * Creator / Autor :: Vistor Scholz
 * 
 * *****************************************


/*********** INSTRUCTIONS **************
 * This lab is intended to give you time
 * to practice what you learned, while
 * also researching and implementing new
 * concepts.
 * 
 * Objectives
 * 
 * Create an Express application
 * Implement an Express template engine
 * Implement routes with route parameters
 * Render template views.
 * Implement Express middleware.
 * erve static files.
 * end files for download.
 * 
 *****************************************


/******** Set-Up: Express Server ********/
/*** Set-Up: Express Server Module ***/
const express = require("express");
const app = express();
const PORT = 3000;

/*** Set-Up Views: Template Engine ***/
app.set('view engine', 'pug')
app.set('views', 'views')

/*** Set-Up: Middleware ***/
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());

/*** Set-Up: Array of Article ***/
let articles = [
  {
    id: 1,
    title: 'Article One',
    author: 'Rain Corp',
    body: 'This is article one'
  },
  {
    id: 2,
    title: 'Article Two',
    author: 'Rain Corp',
    body: 'This is article two'
  },
  {
    id: 3,
    title: 'Article Three',
    author: 'Rain Corp',
    body: 'This is article three'
  }
];

/** Set-Up View: Render Home Page ***/
app.get('/', (req, res) => {
  res.render('index', {
    title: "Articles",
    articles: articles
  });
});

/** Set-Up View: About Page ***/
app.get('/about', (req, res) => {
  res.render('about', { title: "About" });
});

/** Set-Up View: Form to Add Articles ***/
app.get('/add', (req, res) => {
  res.render('add', { title: "Add Article" });
});

app.post('/add', (req, res) => {
  const { title, author, body } = req.body;
  const newArticle = {
    id: articles.length + 1,
    title,
    author: " "
  };
  articles.push(newArticle);
  res.redirect('/');
});

/** Set-Up:  Port to Run the Server ***/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
