const { MongoClient } = require('mongodb');

const URL = "mongodb+srv://kmanish87064:GHFbZnpzWKfHzTj9@setup1.byop8.mongodb.net/";
const client = new MongoClient(URL);

const dbName = "University-Data";

async function main() {
    // It will coneect the client with the mongo db serever hosted at AWS 
    await client.connect();
    // it will print after client get to connected with the mongodb server;
    console.log('Connected successfully to server');

    // we are are reffering to the Collection which we have created in compass using GUI interface 
    const db = client.db(dbName);
    // we are are reffering to the document named user which we have created in compass using GUI interface 
    const collection = db.collection('user');

    // we are getting access to al the documents presented in our document
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'Done.';
}

const connectionDone = main();
connectionDone
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());