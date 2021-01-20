-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS wiki;
CREATE DATABASE wiki;

DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(64) NOT NULL,
  date_revised DATE,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id INTEGER AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id)
);

