   //Insert simple document into users collection (table)
        database.collection('users').insertOne(
            {
                name: 'Sam Torres',
                age: 29,
            },
            (error, result) => {
                if (error) console.log('Unable to insert user: ' + error);

                //If things went well
                console.log(result);
            }
        );

        //Insert multiple users at once
        database.collection('users').insertMany([
            {
                name: 'Jason Bourne',
                age: 35,
            },
            {
                name: 'Sonic Hedgehog',
                age: 40,
            },
            (error, result) => {
                if (error) console.log('Unable to insert users: ' + error);

                //If things went well
                console.log(result);
            },
        ]);

        database.collection('tasks').insertMany([
            {
                description: 'Dummy task 1',
                completed: false,
            },
            {
                description: 'Dummy description 2',
                completed: true,
            },
            {
                description: 'Dummy description 3',
                completed: true,
            },
            (error, result) => {
                if (error) console.log(error);

                console.log(result);
            },
        ]);
    }