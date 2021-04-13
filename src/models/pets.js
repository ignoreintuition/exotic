const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/exotic'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const petsDb = async query => {
    try {
        await client.connect();
        const database = await client.db('exotic');
        const userCollection = await database.collection('users')
        const user = await userCollection.findOne(query);
        const petsCollection = await database.collection('pets');
        const pets = await petsCollection.find({owner: user._id});
        return pets.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    petsDb
}
