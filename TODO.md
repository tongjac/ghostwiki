# Wiki Project

## Jacky Tong, Edgar Pena, Soumya Singh, Kieran B

This project is to display a functional application that will demonstrate CRUD functionality in an environment featuring informative and factual articles stored in a remote database.

## Technologies used:

- Javascript
- Bootstrap
- Handlebars (? for management of neavigation and format?)
- MySQL
- Express
- Sequelize
- Node.js
- Heroku

# TO-DO (Updated Jan 19)

## Topics:

- Ghosts & Supernatural

## Front-end Rendering, HTML Skeleton, (Handlebars)

- Soumya
- Kieran

## Javascript

- Soumya (passive)
- Edgar
- Jacky (passive)

## Backend Structure/Organization, Design

- Jacky

## Database connection/Structure Schema

- Jacky

## Heroku Deployment, Demo

- Soumya, Jacky

## Secondary technologies:

Incorporate later, APIs?

## Notes and Brainstorming

- Secondary Technology to add
- API Keys

### Endpoints:

- / (for the main splash and banner)
- /wiki/:article_title (For actual articles, req.params.:article_title)
- /wiki/:category (Tag cloud for articles, ex. a good one titled "Samosa" is tagged Burmese, Spicy, Gluten-Free, Savory)

### Wiki Functionality:

- Tiers of user, trusted moderators, stuff like that
- AUto-scrolling on footnotes (Click on the superscript to go to the reference section)
- Delete revisions (May not have database space for this?)
- COmment section under article itself, linked to users, can be editted by only the author.
- can delete their own comments
- can limit the delete function to certain criteria ()?
- Search can lookup by article title, or category tag cloud
- Left sidebar:
  Recently viewed, faovrited articles, search articles,
  "Tags" for categories
- Search to Lowercase

### Future Development

- Restorations to certain revisions / version history points
- Social media feeds on sidebars (Twitter, Discord widget, SubReddit posts, etc.)
