const { petsService } = require('../services');

const { getPetsService } = petsService;

const getPets = async (req, res, next) => {
    try {
        const pets = await getPetsService(req.query);
        res.send(pets)
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

module.exports = {
    getPets
}
