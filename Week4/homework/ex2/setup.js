require('dotenv').config({ path: '../ex1-aggregation/.env' });
const { MongoClient } = require('mongodb');
const URI = process.env.DB_URI;


const insertData = async (client) => {

    const database = client.db('transacDB'); //dbs
    const accountsCollection = database.collection('accounts'); //tables

    try {

        const docsCount = await accountsCollection.countDocuments(); //num of docs 
        //console.log('Number Of Documents: ', docsCount);

        //inserting some data
        if (docsCount > 0) {
            await database.dropDatabase();
            //  console.log('Database cleared');
        }

        await accountsCollection.insertMany(
            [
                { accountNumber: 101, balance: 7000 },
                { accountNumber: 102, balance: 10000 },
                { accountNumber: 103, balance: 17000 },
                { accountNumber: 104, balance: 40000 }
            ]);

    } catch (e) {
        console.error('Error inserting/clearing data', e);
    }

    //Printing out the accounts before transaction
    console.log('Printing out the accounts before transaction');
    const resBefore = await accountsCollection.find({}).toArray();
    // console.log(resBefore);
    resBefore.forEach(el => {
        console.log(el, '\n--------------------------------------------------');
    });
};

module.exports = {
    MongoClient: MongoClient,
    URI: URI,
    insertData: insertData,
};
