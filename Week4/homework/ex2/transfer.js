
const transfer = async (client, senderAcc, receiverAcc, amount) => {
    // const client = new MongoClient(URI); //will pass client as a param better

    const session = client.startSession();

    try {

        const database = client.db('transacDB'); //can add to .env (process.env.MongoDatabase)
        const accountsCollection = database.collection('accounts');


        //Starting transaction
        await session.startTransaction();

        const changedDate = new Date();//.toISOString().slice(0, 19).replace('T', ' ');
        const transAmount = amount;


        //Update the accounts
        await accountsCollection.updateOne(
            { accountNumber: senderAcc },
            {
                $inc: { balance: -transAmount },

                $push: {
                    amount: -transAmount,
                    date: changedDate,
                    remark: `Transfer to ${receiverAcc}`
                }
            },

            { session }
        );

        await accountsCollection.updateOne(
            { accountNumber: receiverAcc },
            {
                $inc: { balance: transAmount },

                $push: {
                    amount: transAmount,
                    date: changedDate,
                    remark: `Transfer from ${senderAcc}`
                }
            },

            { session }
        );


        await session.commitTransaction(); //commit the transaction


        //printing out the accounts after transaction
        console.log('Printing out the accounts after transaction');
        const resAfter = await accountsCollection.find({}).toArray();
        // console.log(resAfter);
        resAfter.forEach(el => {
            console.log(el, '\n___________________________________________________');
        });



    } catch (e) {
        console.error('Error: ', e);
        await session.abortTransaction();

    } finally {
        session.endSession();
    }
};

module.exports = {
    transfer: transfer
};
