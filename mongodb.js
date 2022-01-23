const mongodb = require('mongodb');

//client
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'checklist';

MongoClient.connect(
    connectionUrl,
    { useNewUrlParser: true },
    (error, client) => {
        //Called when connected to db
        if (error) return console.log('Unable to connect to db: ' + error);

        //Only run on successful connection
        console.log('connected...woooo');
    }
);
