const { MongoClient, URI, insertData } = require('./setup');
const { transfer } = require('./transfer');


async function main() {

    const client = new MongoClient(URI);

    const sender = 101;
    const receiver = 102;
    const amount = 1000;

    try {
        await client.connect();

        //invoke the funcs 
        await insertData(client);
        await transfer(client, sender, receiver, amount);

    } catch (e) {
        console.error('An Error occurred', e);

    } finally {
        await client.close();
    }
}


main();
