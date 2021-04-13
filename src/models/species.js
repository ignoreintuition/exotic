const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/exotic'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const speciesDb = async query => {
    try {
        await client.connect();
        const database = await client.db('exotic');
        const speciesCollection = await database.collection('animals');
        const species = await speciesCollection.find(query);
        return species.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    speciesDb
}
