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

        const bourneIDObject = new ObjectId('61f0aa4da3244760604106fd');

        //Find specific user by id
        database
            .collection('users')
            .findOne({ _id: bourneIDObject }, (error, user) => {
                const validate = validateItems(error, user);

                if (validate === undefined) return;

                console.log(user);
            });

        // //Return array of objects
        database
            .collection('users')
            .find({ age: 29 })
            .toArray((error, users) => {
                const validate = validateItems(error, users);

                if (validate === undefined) return;

                console.log(users);
            });

        // //Return count if items returned
        database
            .collection('users')
            .find({ age: 29 })
            .count((error, count) => {
                const validate = validateItems(error, count);

                if (validate === undefined) return;

                console.log(count);
            });

        //Return last task in collection by ID
        database
            .collection('tasks')
            .findOne(
                { _id: new ObjectId('61f0aa4da324476060410702') },
                (error, task) => {
                    const validate = validateItems(error, task);

                    if (validate === undefined) return;

                    console.log(task);
                }
            );

        //Return all tasks that are incomplete
        database
            .collection('tasks')
            .find({ completed: false })
            .toArray((error, tasks) => {
                const validate = validateItems(error, tasks);

                if (validate === undefined) return;

                console.log(tasks);
            });
    }
);

const validateItems = (error, item) => {
    let displayMessage = console.log(item);

    if (error !== undefined) {
        displayMessage = console.log(error);
    }

    if (item === null) {
        displayMessage = console.log(`No results found`);
    }

    return displayMessage;
};
