const { ObjectId, MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/exotic';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoConnect = async () => {
    await client.connect();
    const database = await client.db('exotic');
    const recipesCollection = await database.collection('recipes');
    return recipesCollection;
};

const getRecipes = async query => {
    try {
        const pipeline = [
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "user_recipe"
                }
            },
            {
                $unwind:"$user_recipe"
            },
            {
                $match: {
                  "$and":[
                    {"$or":[
                      {"user_recipe.firstName" : query.firstName },
                      {"name": query.name}
                  
                    ]}
                  ]
                }
                 
            },
            {
                $project: {
                    name: 1,
                    description: 2,
                    ingredients: 3,
                    userName: "$user_recipe.firstName",
                }
            }];
        const recipes = await mongoConnect();
        const recipesAgg = recipes.aggregate(pipeline);
        return recipesAgg.toArray();
    } catch(e) {
        throw new Error(e.message);
    }
};

const postRecipes = async query => {
    try {
        const recipesCollection = await mongoConnect();
        recipesCollection.insert(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const putRecipes = async query => {
    try {
        const recipesCollection = await mongoConnect();
        recipesCollection.updateOne(
            { "_id": query._id },
            { $set: query },
            { upsert: true }
        );
    } catch(e) {
        throw new Error(e.message);
    }
};

const deleteRecipes = async query => {
    try {
        const recipesCollection = await mongoConnect();
        recipesCollection.remove( { "_id": query._id } );
    } catch(e) {
        throw new Error(e.message);
    }
};
module.exports = {
    getRecipes,
    postRecipes,
    putRecipes,
    deleteRecipes
}
