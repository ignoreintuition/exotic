const { ObjectId, MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/exotic';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoConnect = async () => {
    await client.connect();
    const database = await client.db('exotic');
    const speciesCollection = await database.collection('animals');
    return speciesCollection;
};

const getSpecies = async query => {
    try {
        const speciesCollection = await mongoConnect();
        const species = await speciesCollection.find(query);
        return species.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

const postSpecies = async query => {
    try {
        const speciesCollection = await mongoConnect();
        speciesCollection.insertOne(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const putSpecies = async query => {
    try {
        const speciesCollection = await mongoConnect();
        speciesCollection.updateOne(
            { "_id": query._id },
            { $set: query },
            { upsert: true }
        );
    } catch(e) {
        throw new Error(e.message);
    }
};

const deleteSpecies = async query => {
    try {
        const usersCollection = await mongoConnect();
        usersCollection.remove( { "_id": query._id } );
    } catch(e) {
        throw new Error(e.message);
    }
};
module.exports = {
    getSpecies,
    postSpecies,
    putSpecies,
    deleteSpecies
}
