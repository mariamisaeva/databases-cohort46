require('dotenv').config({ path: 'ex1-aggregation/.env' });
const { MongoClient } = require('mongodb');

const URI = process.env.DB_URI;


const insertData = async (client) => {

    const database = client.db('transacDB');
    const accountsCollection = database.collection('accounts');

    const docsCount = await accountsCollection.countDocuments();
    //console.log('Number Of Documents: ', docsCount);

    //inserting some data
    if (docsCount === 0) {
        await accountsCollection.insertMany(
            [
                { accountNumber: 101, balance: 7000 },
                { accountNumber: 102, balance: 10000 },
                { accountNumber: 103, balance: 17000 },
                { accountNumber: 104, balance: 40000 }
            ]);

    } else {
        console.log('Data already exists');
    }


    //Printing out the accounts before transaction
    console.log('Printing out the accounts before transaction');
    const resBefore = await accountsCollection.find({}).toArray();
    //console.log(resBefore);
};


const transfer = async (client) => {
    // const client = new MongoClient(URI); //will pass client as a param better

    const session = client.startSession();

    try {

        const database = client.db('transacDB'); //can add to .env (process.env.MongoDatabase)
        const accountsCollection = database.collection('accounts');
        const accountChangesCollection = database.collection('account-changes');

        //Starting transaction
        await session.startTransaction();

        const changedDate = new Date();//.toISOString().slice(0, 19).replace('T', ' ');
        const transAmount = 1000;


        //Update the accounts
        await accountsCollection.updateOne(
            { accountNumber: 101 },
            { $inc: { balance: -transAmount } },
            { session }
        );

        await accountsCollection.updateOne(
            { accountNumber: 102 },
            { $inc: { balance: transAmount } },
            { session }
        );


        //Insert the transaction into accountChanges collection
        await accountChangesCollection.insertMany(
            [
                { accountNumber: 101, amount: -transAmount, changedDate, remark: 'Transfer to 102' },
                { accountNumber: 102, amount: transAmount, changedDate, remark: 'Transfer from 101' }
            ], { session });


        await session.commitTransaction(); //commit the transaction


        //printing out the accounts after transaction
        console.log('Printing out the accounts after transaction');
        const resAfter = await accountsCollection.find({}).toArray();
        console.log(resAfter);

    } catch (e) {
        console.error('Error: ', e);
        await session.abortTransaction();

    } finally {
        session.endSession();
    }
};


async function main() {

    const client = new MongoClient(URI);

    try {
        await client.connect();

        //invoke the funcs 
        await insertData(client);
        await transfer(client);

    } catch (e) {
        console.error('An Error occurred', e);

    } finally {
        await client.close();
    }
}


main();
