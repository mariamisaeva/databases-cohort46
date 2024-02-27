-- CREATE DATABASE IF NOT EXISTS eduDB;
DROP DATABASE IF EXISTS eduDB;

CREATE DATABASE IF NOT EXISTS eduDB;

USE eduDB;

-- AUTHORS TABLE
CREATE TABLE IF NOT EXISTS authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(50) NOT NULL,
    university VARCHAR(255),
    date_of_birth DATE,
    h_index INT,
    gender CHAR(1)
);

-- RESEARCH_PAPERS TABLE
CREATE TABLE IF NOT EXISTS research_Papers (
    paper_id INT AUTO_INCREMENT PRIMARY KEY,
    paper_title VARCHAR(255),
    conference VARCHAR(255),
    publish_date DATE
);

-- MANY TO MANY RESEARCH_AUTHORS
CREATE TABLE IF NOT EXISTS authors_papers (
    author_id INT,
    paper_id INT,
    FOREIGN KEY (author_id) REFERENCES authors (author_id),
    FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id),
    PRIMARY KEY (author_id, paper_id)
    -- UNIQUE(author_id, paper_id)
);

-- Add "mentor" column to "authors" table
ALTER TABLE authors
ADD COLUMN mentor INT,
-- Add a foreign key constraint to the 'mentor' column, referencing the author_id
ADD CONSTRAINT fk_mentor FOREIGN KEY (mentor) REFERENCES authors (author_id);
