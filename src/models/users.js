const { ObjectId, MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/exotic'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoConnect = async () => {
    await client.connect();
    const database = await client.db('exotic');
    const speciesCollection = await database.collection('users');
    return speciesCollection;
};

const getUsers = async query => {
    try {
        const usersCollection = await mongoConnect();
        const users = await usersCollection.find(query);
        return users.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

const postUsers = async query => {
    try {
        const usersCollection = await mongoConnect();
        usersCollection.insert(query)
    } catch(e) {
        throw new Error(e.message);
    }
};

const putUsers = async query => {
    try {
        console.log(query)
        if (!query["_id"]) return null;
        const id = new ObjectId(query["_id"]);
        delete query["_id"];
        const usersCollection = await mongoConnect();
        usersCollection.updateOne(
            { "_id": id },
            { $set: query },
            { upsert: true }
        );
    } catch(e) {
        console.log(e.message);
    }
};

module.exports = {
    getUsers,
    postUsers,
    putUsers
}
