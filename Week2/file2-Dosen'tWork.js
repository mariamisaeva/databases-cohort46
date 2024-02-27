/*
{I have a problem creating this file, and I don't know how to fix it.
(I was trying to reuse functions from 1.keys.js But every time I get different errors like : unknown database/use database/ something with handshake "when I use main/connection/execSqlFiles". And sometimes it is wirking normal then I get errors from nowhere) I need help}
*/

const { execQuery, execSqlFile, connection } = require('./mainFIle');
const DB = require('./mainFIle');

const joinQueries = async () => {
    try {


        //  await execQuery('USE eduDB');
        await execQuery('SELECT * FROM authors');

        //QUERY1:  Print names of all authors and their corresponding mentors
        /*   const Q1 = await execQuery(`
           SELECT 
           authors.author_name AS authorN,
           mentor.author_name AS mentorN
           FROM authors
           LEFT JOIN authors mentor
           ON authors.mentor = mentor.author_id;
           `);
           console.log('RESULTS: ', Q1);
   */

        //QUERY2: Query 2: Print "all columns of authors" and their "paper_title". 
        //If there is an author without any research_Papers, print the information of that author too. (even if null)

        /*   const Q2 = await execQuery(`
               SELECT 
               authors*., 
               research_Papers.paper_title
               FROM authors
               JOIN authors_papers AP
               ON authors.author_id = AP.author_id
               JOIN research_Papers
               ON AP.paper_id = research_Papers.paper_id
               `);
           console.log('RESULTS: ', Q2);*/

    } catch (err) {
        //throw new Error('ERROR EXECUTING JOIN-QUERIES', err.message);
        throw err;
    }
};

//module.exports = {
joinQueries();
//};
