-- JOIN QUERIES
-- QUERY1:  Print names of all authors and their corresponding mentors
SELECT
    authors.author_name AS authorN,
    mentor.author_name AS mentorN
FROM
    authors
    LEFT JOIN authors mentor ON authors.mentor = mentor.author_id;

-- QUERY2: Print "all columns of authors" and their "paper_title"
-- If there is an author without any research_Papers, print the information of that author too. (even if null)
SELECT
    authors.*,
    research_Papers.paper_title
FROM
    authors
    JOIN authors_papers AP ON authors.author_id = AP.author_id
    JOIN research_Papers ON AP.paper_id = research_Papers.paper_id;

--  Aggregate Functions
-- QUERY1: ALL PAPERS - NumOFAuthorsWorkedONEachPaper
SELECT
    paper_title,
    COUNT(author_id) AS authNUM
FROM
    authors_papers
    JOIN research_Papers ON authors_papers.paper_id = research_Papers.paper_id
GROUP BY
    paper_title;

-- QUERY2: Sum of the research papers published by all female authors
SELECT
    COUNT(*) AS total_F
FROM
    authors_papers
    JOIN authors ON authors_papers.author_id = authors.author_id
WHERE
    authors.gender = 'F';

-- QUERY3:Average of the h-index of all authors per university
SELECT
    university,
    AVG(h_index) AS index_avg
FROM
    authors
GROUP BY
    university;

-- QUERY4: Sum of the research papers of the authors per university
SELECT
    university,
    COUNT(*) AS totalP
FROM
    authors
    JOIN authors_papers ON authors.author_id = authors_papers.author_id
GROUP BY
    university;

-- QUERY5:Minimum and maximum of the h-index of all authors per university
SELECT
    university,
    MIN(h_index) AS min_h,
    MAX(h_index) AS max_h
FROM
    authors
GROUP BY
    university;