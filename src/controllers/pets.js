const { pets } = require('../services');

const { petsService } = pets;

const getPets = async (req, res, next) => {
    try {
        const pets = await petsService(req.query);
        res.send(pets)
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

module.exports = {
    getPets
}
