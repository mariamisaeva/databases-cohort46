const util = require('util');
const mysql = require('mysql');
require('dotenv').config();

//create connection
const con = mysql.createConnection({ //create and move to .env
    host: process.env.MY_HOST,
    user: process.env.MY_USER,
    password: process.env.MY_PASSWORD,
});


//promisify the query 
const execQuery = util.promisify(con.query.bind(con));

//Create DB, Tables and add some data
const createDbAndSeed = async () => {
    try {// A question: Should I always DROP DATABASE first to prevent duplication?
        await execQuery('CREATE DATABASE IF NOT EXISTS transDB'); //create a db if not exists
        await execQuery('USE transDB'); //us the db

        //create tables "account"
        await execQuery(`CREATE TABLE IF NOT EXISTS account ( 
                         account_number INT NOT NULL PRIMARY KEY, 
                         balance DECIMAL(8,2) NOT NULL
                         );`
        );


        //create account_changes table
        await execQuery(`CREATE TABLE IF NOT EXISTS account_changes (
                         change_number INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                         account_number INT NOT NULL,
                         amount DECIMAL(8,2) NOT NULL,
                         changed_date DATE NOT NULL,
                         remark VARCHAR(255),

                         FOREIGN KEY (account_number) REFERENCES account(account_number)
                          );`
        );


    } catch (e) {
        console.error('ERR:', e);
    } finally {
        con.end();
    }
};


createDbAndSeed();