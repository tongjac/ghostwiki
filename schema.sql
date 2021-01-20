-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS wiki_db;
CREATE DATABASE wiki_db;
USE wiki_db;

DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(64) NOT NULL,
  date_revised DATE NOT NULL,
  cat1 TEXT,
  cat1content TEXT,
  cat2 TEXT,
  cat2content TEXT,  
  cat3 TEXT,
  cat3content TEXT,
  cat4 TEXT,
  cat4content TEXT,
  tags TEXT,
  PRIMARY KEY(id)
);

-- Comment section--
DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id INTEGER AUTO_INCREMENT NOT NULL,
  date_posted DATE NOT NULL,
  user_id INTEGER NOT NULL,
  user_name VARCHAR(64) DEFAULT "Anonymous",
  comment TEXT,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES user(id)
);

-- User Data Section --
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(64) NOT NULL,
  user_icon TEXT,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL,
  contribution INT,
  PRIMARY KEY(id)
);

-- Seed Article Data --
INSERT INTO articles (title, date_revised, cat1, cat1content, cat2, cat2content) 
VALUES ("Moddey Dhoo", "2021.01.19", "Overview", "A Black dog commonly seen on church grounds, and a typical symbol of a death in the family to follow.", "Habitat", "Old hallowed church grounds, England");

INSERT INTO articles (title, date_revised, cat1, cat1content) 
VALUES ("Banshee", "2021-01-01", "Overview", "The signature scream of this monster signifies an ill omen.");

SELECT * FROM articles;