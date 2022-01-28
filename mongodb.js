const mongodb = require('mongodb');

//client & objectId
const { MongoClient, ObjectId } = mongodb;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'checklist';

MongoClient.connect(
    connectionUrl,
    { useNewUrlParser: true },
    (error, client) => {
        //Called when connected to db
        if (error) return console.log('Unable to connect to db: ' + error);

        //Only run on successful connection
        const database = client.db(databaseName);
    }
);
