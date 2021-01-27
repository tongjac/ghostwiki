-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS wiki_db;
CREATE DATABASE wiki_db;
USE wiki_db;

DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(64) NOT NULL,
  date_revised DATE NOT NULL,
  category TEXT,
  content TEXT,
  habitat TEXT,
  tags TEXT,
  PRIMARY KEY(id)
);

-- User Data Section --
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(64) NOT NULL,
  user_icon TEXT,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL,
  contribution INT,
  PRIMARY KEY(id)
);

-- Comment Data section--
DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id INTEGER AUTO_INCREMENT,
  created_at DATE,
  updated_at DATE,
  user_name TEXT,
  comment TEXT,
  article_id INTEGER, 
  PRIMARY KEY(id)
);

-- Seed Article Data --
INSERT INTO articles (title, date_revised, category, content, habitat) 
VALUES ("Moddey Dhoo", "2021.01.19", "Creature", "A Black dog commonly seen on church grounds, and a typical symbol of a death in the family to follow.", "Old hallowed church grounds, England");

INSERT INTO articles (title, date_revised, category, content) 
VALUES ("Banshee", "2021-01-01", "Creature", "The signature scream of this monster signifies an ill omen.");

INSERT INTO articles (title, date_revised, category, content, habitat, tags)
VALUES ("Wendigo", "2021-01-13", "Creature", "The Wendigo is depicted as a monstrous malevolent spirit, with some characteristics of a human or as a spirit, who has possessed a human being. Its influence is said to invoke acts of murder, insatiable greed, cannibalism and the cultural taboos against such behaviours", "North East Canada & United States", "Folklore");

INSERT INTO articles (title, date_revised, category, content, habitat)
VALUES ("The LaLaurie Mansion", "2021-01-15", "Haunting", "Madame Marie Delphine LaLaurie was a Louisiana socialite known for hosting ritzy soirees in her lavish French Quarter mansion in New Orleans during the early 19th century. Guests gorged on fine food and champagne, unaware of the grisly scenes that unfolded two stories above. When local police responded to a kitchen fire in 1834, they discovered the bodies of several horribly mutilated enslaved people in the attic. When the public learned of LaLaurie’s grotesque secret, a mob stormed the house, prompting her to flee to France. Soon after LaLaurie disappeared from New Orleans, people claimed to hear the phantom screams of her victims spilling from the house in the dead of night.", "New Orleans, Louisiana");

INSERT INTO articles (title, date_revised, category, content, habitat)
VALUES ("Bloody Mary", "2021-01-02", "Ghost", "According to folklore, Bloody Mary is a ghost of a woman who murdered her children long ago. If you want to see her, go into a bathroom, turn the lights off, stand in front of a mirror, and repeat her name three times. Bloody Mary... Bloody Mary... Bloody Mary...", "Mirrors, England");

INSERT INTO articles (title, date_revised, category, content, habitat, tags)
VALUES ("Slenderman", "2021-01-04", "Creature", "Slenderman is depicted as a thin, unnaturally tall humanoid with a featureless head and face, wearing a black suit. He does not directly kill his victims. Instead, he encourages others to in order to please him.", "Woods or Abandoned Buildings", "Fictional");

INSERT INTO articles (title, date_revised, category, content, habitat)
VALUES ("La Llorona", "2021-01-20", "Ghost", "The Weeping Woman, or the Wailer roams waterfront areas mourning her drowned children. It is said one day, Maria sees her husband with another woman and in a fit of blind rage she drowns their children in a river, which she immediately regrets. Unable to save them and consumed by guilt, she drowns herself as well, but is unable to enter the afterlife without her children.", "Waterfronts, Latin America");

-- Seed User Data --
INSERT INTO users (user_name, email, password) 
VALUES ("Fred", "Fred@mail.com", "123456789");

INSERT INTO users (user_name, email, password) 
VALUES ("BballGurl92", "bballgurl92@mail.com", "123456789");

INSERT INTO users (user_name, email, password) 
VALUES ("GhostHunterx3", "GhostHunterx3@mail.com", "123456789");

-- Seed Comment Data --
INSERT INTO comments (created_at, user_name, comment, article_id)
VALUES ("2020-01-01", "User01Test", "Hey the mogghey dhoo is just a big dog right", "1");

INSERT INTO comments (created_at, user_name, comment, article_id)
VALUES ("2020-01-16", "GhostBusterXoXo", "the banshee is really a gently creature if you don't startle her!", "2");

INSERT INTO comments (created_at, user_name, comment, article_id)
VALUES ("2020-01-21", "Unsure", "Whoops, don't bring salt trying to observe this one.", "2");

