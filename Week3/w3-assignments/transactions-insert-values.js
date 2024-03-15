const { promisify } = require('util');
const mysql = require('mysql');
require('dotenv').config();

//create connection
const con = mysql.createConnection({
    host: process.env.MY_HOST,
    user: process.env.MY_USER,
    password: process.env.MY_PASSWORD,
    database: process.env.MY_DATABASE
});

//promisify queries
const execQuery = promisify(con.query.bind(con));

//Insert data
const insertData = async () => {
    try {

        execQuery(`INSERT INTO account (account_number, balance)
                   VALUES (101, 5000.00),
                          (102, 7000.00),
                          (103, 9000.00),
                          (104, 10000.00)
                   `);
        //A question: How to prevent data duplication when I run the file for multiple times?

    } catch (e) {
        console.error(e); //log the error if any 
    } finally {
        con.end(); //close the connection
    }
};

insertData();