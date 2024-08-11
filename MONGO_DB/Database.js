const {MongoClient}=require('mongodb');

const URL="mongodb+srv://kmanish87064:GHFbZnpzWKfHzTj9@setup1.byop8.mongodb.net/";
const client=new MongoClient (URL);

const dbName="University-Data";

async function main(){
    // It will coneect the client with the mongo db serever hosted at AWS 
    await client.connect(); 
    console.log('Connected successfully to server');
    const db=client.db(dbName);
    const collection=db.collection('user');
    

    return 'Done.';
}

const connectionDone=main();
connectionDone
.then(console.log)
.catch(console.error)
.finally(()=>client.close());