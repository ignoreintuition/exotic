const { pets } = require('../models')
const { petsDb } = pets;

const petsService = async (query) => {
    try {
        return await petsDb(query);
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    petsService
}

