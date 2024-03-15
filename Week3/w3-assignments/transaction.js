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

const execQuery = promisify(con.query.bind(con));

//create transaction
const createTransaction = async () => {
    try {
        //1000 from 101 to 102 (account_changes)
        await execQuery('START TRANSACTION');

        await execQuery(`UPDATE account 
                         SET balance = balance - 1000 
                         WHERE account_number = 101;`); //account T 101 balance - 1000

        await execQuery(`UPDATE account 
                         SET balance = balance + 1000
                         WHERE account_number = 102;`); //account T 101 balance + 1000

        //get date and time of the transaction 
        const changedDate = new Date().toISOString().slice(0, 19).replace('T', ' '); //new Date().toLocaleString();

        //insert into account_changes:account_number,amount,changed_date,remark
        await execQuery(`INSERT INTO account_changes 
                         (account_number, amount, changed_date, remark)
                         VALUES
                         (101, -1000, '${changedDate}', 'Transfer to 102'),
                         (102, +1000, '${changedDate}', 'Transfer from 101');
                         `);

        //commit changes
        await execQuery('COMMIT');

    } catch (e) {
        await execQuery('ROLLBACK'); //rollback changes
        console.error(e);

    } finally {
        con.end();
    }
};

createTransaction();