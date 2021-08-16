const { recipesService } = require('../services');

const { getRecipesService, postRecipesService, putRecipesService, deleteRecipesServices } = recipesService;

const getRecipes = async (req, res, next) => {
    try {
        const recipes = await getRecipesService(req.query);
        res.send(recipes);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const postRecipes = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await postPetsService(qs);
        res.sendStatus(201);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const putRecipes = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await putRecipesService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const deleteRecipes = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await deleteRecipesService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};
module.exports = {
    getRecipes,
    postRecipes,
    putRecipes,
    deleteRecipes
};
