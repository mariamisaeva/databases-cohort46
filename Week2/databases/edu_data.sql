INSERT INTO
    authors (
        author_name,
        university,
        date_of_birth,
        h_index,
        gender
    )
VALUES
    ('John Doe', 'University A', '1990-05-15', 10, 'M'),
    (
        'Jane Smith',
        'University B',
        '1985-12-20',
        8,
        'F'
    ),
    (
        'Michael Johnson',
        'University C',
        '1982-07-08',
        12,
        'M'
    ),
    (
        'Alice Brown',
        'University D',
        '1992-03-25',
        9,
        'F'
    ),
    (
        'Robert White',
        'University E',
        '1988-09-14',
        11,
        'M'
    ),
    (
        'Emily Davis',
        'University F',
        '1995-06-18',
        7,
        'F'
    ),
    (
        'William Clark',
        'University G',
        '1980-11-30',
        13,
        'M'
    ),
    (
        'Sophia Lee',
        'University H',
        '1987-04-22',
        10,
        'F'
    ),
    (
        'David Martinez',
        'University I',
        '1991-08-10',
        8,
        'M'
    ),
    (
        'Olivia Wilson',
        'University J',
        '1983-02-05',
        12,
        'F'
    ),
    (
        'Daniel Anderson',
        'University K',
        '1979-10-12',
        11,
        'M'
    ),
    (
        'Isabella Taylor',
        'University L',
        '1993-07-28',
        9,
        'F'
    ),
    (
        'James Harris',
        'University M',
        '1986-01-17',
        14,
        'M'
    ),
    (
        'Emma Thomas',
        'University N',
        '1989-09-03',
        10,
        'F'
    ),
    (
        'Alexander Rodriguez',
        'University O',
        '1984-05-07',
        15,
        'M'
    );

-- Add some data to mentor 
UPDATE authors
SET
    mentor = 1
WHERE
    author_id = 8;

UPDATE authors
SET
    mentor = 2
WHERE
    author_id = 12;

UPDATE authors
SET
    mentor = 3
WHERE
    author_id = 7;

UPDATE authors
SET
    mentor = 2
WHERE
    author_id = 13;

UPDATE authors
SET
    mentor = 3
WHERE
    author_id = 10;

UPDATE authors
SET
    mentor = 4
WHERE
    author_id = 8;

UPDATE authors
SET
    mentor = 5
WHERE
    author_id = 12;

UPDATE authors
SET
    mentor = 6
WHERE
    author_id = 11;

UPDATE authors
SET
    mentor = 7
WHERE
    author_id = 9;

UPDATE authors
SET
    mentor = 8
WHERE
    author_id = 14;

UPDATE authors
SET
    mentor = 9
WHERE
    author_id = 10;

UPDATE authors
SET
    mentor = 10
WHERE
    author_id = 15;

-- add 30 research_papers
INSERT INTO
    research_papers (paper_title, conference, publish_date)
VALUES
    (
        'Title 1: The First Paper',
        'Conference XYZ',
        '2004-06-01'
    ),
    (
        'Title 2: Another Important Work',
        'Conference ABC',
        '2005-08-01'
    ),
    (
        'Title 3: More Research Please',
        'Conference DEF',
        '2006-01-01'
    ),
    (
        'Title 4: Let''s Make It Fun!',
        'Conference GHI',
        '2007-05-01'
    ),
    (
        'Title 5: Exploring New Horizons',
        'Conference JKL',
        '2008-09-01'
    ),
    (
        'Title 6: The Next Breakthrough',
        'Conference MNO',
        '2009-03-01'
    ),
    (
        'Title 7: Beyond the Limits',
        'Conference PQR',
        '2010-07-01'
    ),
    (
        'Title 8: Innovation Unleashed',
        'Conference STU',
        '2011-02-01'
    ),
    (
        'Title 9: A Journey into Science',
        'Conference VWX',
        '2012-04-01'
    ),
    (
        'Title 10: The Future Starts Here',
        'Conference YZA',
        '2013-10-01'
    ),
    (
        'Title 11: Trailblazing Discoveries',
        'Conference BCD',
        '2014-11-01'
    ),
    (
        'Title 12: Breaking Barriers',
        'Conference EFG',
        '2015-06-01'
    ),
    (
        'Title 13: Revolutionizing Technology',
        'Conference HIJ',
        '2016-08-01'
    ),
    (
        'Title 14: Advancing Knowledge',
        'Conference KLM',
        '2017-12-01'
    ),
    (
        'Title 15: Shaping the Future',
        'Conference NOP',
        '2018-03-01'
    ),
    (
        'Title 16: Pioneering Innovations',
        'Conference QRS',
        '2019-05-01'
    ),
    (
        'Title 17: Exploring New Frontiers',
        'Conference TUV',
        '2020-07-01'
    ),
    (
        'Title 18: Uncovering Mysteries',
        'Conference WXY',
        '2021-09-01'
    ),
    (
        'Title 19: The Quest for Answers',
        'Conference ZAB',
        '2022-11-01'
    ),
    (
        'Title 20: Inspiring Breakthroughs',
        'Conference CDE',
        '2023-01-01'
    ),
    (
        'Title 21: Transforming Ideas into Reality',
        'Conference FGH',
        '2024-02-01'
    ),
    (
        'Title 22: Unlocking Potential',
        'Conference IJK',
        '2025-04-01'
    ),
    (
        'Title 23: Empowering Change',
        'Conference LMN',
        '2026-06-01'
    ),
    (
        'Title 24: Driving Innovation Forward',
        'Conference OPQ',
        '2027-08-01'
    ),
    (
        'Title 25: Embracing New Technologies',
        'Conference RST',
        '2028-10-01'
    ),
    (
        'Title 26: Building a Better Future',
        'Conference UVW',
        '2029-12-01'
    ),
    (
        'Title 27: Leading the Way',
        'Conference XYZ',
        '2030-02-01'
    ),
    (
        'Title 28: Redefining Possibilities',
        'Conference ABC',
        '2031-04-01'
    ),
    (
        'Title 29: Advancing Humanity',
        'Conference DEF',
        '2032-06-01'
    ),
    (
        'Title 30: Inspiring Innovation',
        'Conference GHI',
        '2033-08-01'
    );

-- Add some data to authors_papers table
INSERT INTO
    authors_papers (author_id, paper_id)
VALUES
    (1, 1), -- John Doe contributed to Paper 1
    (2, 1), -- Jane Smith contributed to Paper 1
    (2, 2), -- Jane Smith contributed to Paper 2
    (3, 2), -- Michael Johnson contributed to Paper 2
    (4, 3), -- Alice Brown contributed to Paper 3
    (5, 3), -- Robert White contributed to Paper 3
    (6, 4), -- Emily Davis contributed to Paper 4
    (7, 4), -- William Clark contributed to Paper 4
    (8, 5), -- Sophia Lee contributed to Paper 5
    (9, 5), -- David Martinez contributed to Paper 5
    (10, 6), -- Olivia Wilson contributed to Paper 6
    (11, 6), -- Daniel Anderson contributed to Paper 6
    (12, 7), -- Isabella Taylor contributed to Paper 7
    (13, 7), -- James Harris contributed to Paper 7
    (14, 8), -- Emma Thomas contributed to Paper 8
    (15, 8), -- Alexander Rodriguez contributed to Paper 8
    (1, 9), -- John Doe contributed to Paper 9
    (2, 9), -- Jane Smith contributed to Paper 9
    (3, 10), -- Michael Johnson contributed to Paper 10
    (4, 10), -- Alice Brown contributed to Paper 10
    (5, 11), -- Robert White contributed to Paper 11
    (6, 11), -- Emily Davis contributed to Paper 11
    (7, 12), -- William Clark contributed to Paper 12
    (8, 12), -- Sophia Lee contributed to Paper 12
    (9, 13), -- David Martinez contributed to Paper 13
    (10, 13), -- Olivia Wilson contributed to Paper 13
    (11, 14), -- Daniel Anderson contributed to Paper 14
    (12, 14), -- Isabella Taylor contributed to Paper 14
    (13, 15), -- James Harris contributed to Paper 15
    (14, 15), -- Emma Thomas contributed to Paper 15
    (15, 16), -- Alexander Rodriguez contributed to Paper 16
    (1, 17), -- John Doe contributed to Paper 17
    (2, 17), -- Jane Smith contributed to Paper 17
    (3, 18), -- Michael Johnson contributed to Paper 18
    (4, 18), -- Alice Brown contributed to Paper 18
    (5, 19), -- Robert White contributed to Paper 19
    (6, 19), -- Emily Davis contributed to Paper 19
    (7, 20), -- William Clark contributed to Paper 20
    (8, 20), -- Sophia Lee contributed to Paper 20
    (9, 21), -- David Martinez contributed to Paper 21
    (10, 21), -- Olivia Wilson contributed to Paper 21
    (11, 22), -- Daniel Anderson contributed to Paper 22
    (12, 22), -- Isabella Taylor contributed to Paper 22
    (13, 23), -- James Harris contributed to Paper 23
    (14, 23), -- Emma Thomas contributed to Paper 23
    (15, 24), -- Alexander Rodriguez contributed to Paper 24
    (1, 25), -- John Doe contributed to Paper 25
    (2, 25), -- Jane Smith contributed to Paper 25
    (3, 26), -- Michael Johnson contributed to Paper 26
    (4, 26), -- Alice Brown contributed to Paper 26
    (5, 27), -- Robert White contributed to Paper 27
    (6, 27), -- Emily Davis contributed to Paper 27
    (7, 28), -- William Clark contributed to Paper 28
    (8, 28), -- Sophia Lee contributed to Paper 28
    (9, 29), -- David Martinez contributed to Paper 29
    (10, 29), -- Olivia Wilson contributed to Paper 29
    (11, 30), -- Daniel Anderson contributed to Paper 30
    (12, 30), -- Isabella Taylor contributed to Paper 30
    (13, 1), -- James Harris contributed to Paper 1
    (14, 1), -- Emma Thomas contributed to Paper 1
    (15, 2);

-- Alexander Rodriguez contributed to Paper 2
