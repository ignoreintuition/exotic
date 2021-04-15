const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/exotic'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const getUsers = async query => {
    try {
        await client.connect();
        const database = await client.db('exotic');
        const usersCollection = await database.collection('users');
        const users = await usersCollection.find();
        return users.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

const postUsers = async config => {
    console.log(config);
}

module.exports = {
    getUsers,
    postUsers
}
