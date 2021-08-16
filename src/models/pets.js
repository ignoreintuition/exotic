const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/exotic';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoConnect = async () => {
    await client.connect();
    const database = await client.db('exotic');
    const petsCollection = await database.collection('pets');
    return petsCollection;
};

const getPets = async query => {
    try {
        await client.connect();
        const pipeline = [
            {
                $lookup: {
                    from: "users",
                    localField: "owner",
                    foreignField: "_id",
                    as: "owner_pet"
                }
            },
            {
                $unwind:"$owner_pet"
            },
            {
                $lookup: {
                    from: "animals",
                    localField: "species",
                    foreignField: "_id",
                    as: "pet_species"
                }
            },
            {
                $unwind:"$pet_species"
            },
            {
                $match:{
                    $and:[{"owner_pet.firstName" : query.firstName }]
                }
            },
            {
                $project: {
                    name: 1,
                    ownerName: "$owner_pet.firstName",
                    species: "$pet_species.species"
                }
            }];
        const pets = await mongoConnect();
        const petsAgg = pets.aggregate(pipeline);
        return petsAgg.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

const postPets = async query => {
    try {
        const petsCollection = await mongoConnect();
        petsCollection.insert(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const putPets = async query => {
    try {
        const petsCollection = await mongoConnect();
        petsCollection.updateOne(
            { "_id": query._id },
            { $set: query },
            { upsert: true }
        );
    } catch(e) {
        throw new Error(e.message);
    }
};

const deletePets = async query => {
    try {
        const petsCollection = await mongoConnect();
        petsCollection.remove( { "_id": query._id } );
    } catch(e) {
        throw new Error(e.message);
    }
};
module.exports = {
    getPets,
    postPets,
    putPets,
    deletePets
};
