/* Structure of code:
db, data and queries are in sql files and this is the main executable js file */
const mysql = require('mysql');
const util = require('util');
const fs = require('fs');
const path = require('path');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: '123456',
    // database: 'eduDB'
});

//promisify fs.readfile + DB.query + DB.connect
const readFile = util.promisify(fs.readFile);
const execQuery = util.promisify(DB.query).bind(DB);
const connectDB = util.promisify(DB.connect).bind(DB);
const endDB = util.promisify(DB.end).bind(DB);

//connect func
const connection = async () => {

    try {
        await connectDB();
        console.log('CONNECTED TO DATABASE');

    } catch (err) {
        throw err;
    }

};

//extra func to drop and create a db //it was an attempt to fix a problem in file2
const dbFunc = async () => {
    await execQuery('DROP DATABASE IF EXISTS eduDB');
    await execQuery('CREATE DATABASE IF NOT EXISTS eduDB');
    await execQuery('Use eduDB');
};

//execute files func
const execSqlFile = async (fileName) => {

    try {
        const fPath = path.join(__dirname, 'databases', fileName);
        const sqlData = await readFile(fPath, 'utf8');

        //to execute multiple queries in the same files
        const queries = sqlData.split(';').filter(query => query.trim() !== '');


        let count = 1;
        for (const query of queries) {
            try {
                // Execute the query
                const result = await execQuery(query);
                console.log(`QUERY ${count++}:`, result);
            } catch (e) {
                // Handle query execution errors
                console.error(`Error executing query ${count}: ${e.message}`);
            }
        }


    } catch (err) {
        throw new Error(`ERROR: ${fileName}: ${err.message}`);
    }

};


//main func
const main = async () => {
    try { //connection+ files(db,data,queries) + endConnection 

        await connection();

        await dbFunc();

        await execSqlFile('edu_db.sql');
        await execSqlFile('edu_data.sql');
        await execSqlFile('edu_queries.sql');

        await endDB();


    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

//call main func
main();



/*
module.exports = {
    execQuery,
    execSqlFile,
};*/
