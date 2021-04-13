const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/exotic'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const petsDb = async query => {
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
        const aggCursor =  await client.db('exotic')
            .collection('pets')
            .aggregate(pipeline);
        return aggCursor.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    petsDb
}
