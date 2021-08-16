const { recipes } = require('../models');
const { getRecipes, postRecipes, putRecipes, deleteRecipes} = recipes;

const getRecipesService = async (query) => {
    try {
        return await getRecipes(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const postRecipesService = async (query) => {
    try {
        return await postRecipes(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const putRecipesService = async (query) => {
    try {
        return await putRecipes(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const deleteRecipesServices = async (query) => {
    try {
        return await deleteRecipes(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getRecipesService,
    postRecipesService,
    putRecipesService,
    deleteRecipesServices 
};

