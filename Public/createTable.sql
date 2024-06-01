CREATE TABLE SocialNetworks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    url VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO SocialNetworks (name, url, username, password)
VALUES
("YouTube", "https://www.youtube.com", "Your YouTube channel name", "Your YouTube channel password"),
    ("Instagram", "https://www.instagram.com", "Your Instagram username", "Your Instagram password"),
    ("Facebook", "https://www.facebook.com", "Your Facebook username", "Your Facebook password"),
    ("Twitter", "https://www.twitter.com", "Your Twitter username", "Your Twitter password");
