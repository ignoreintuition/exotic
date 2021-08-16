const express = require('express');

const { auth, species, pets, users, recipes} = require('../controllers');

const app = express();
const router = express.Router();
const bearerToken = auth.auth(app);

router.get('/species', species.getSpecies );
router.get('/pets', pets.getPets );
router.get('/users', users.getUsers);
router.get('/recipes', recipes.getRecipes);

router.post('/species',
    bearerToken.authenticate('bearer', { session: false }),
    species.postSpecies
);

router.put('/species',
    bearerToken.authenticate('bearer', { session: false }),
    species.putSpecies
);

router.delete('/species',
    bearerToken.authenticate('bearer', { session: false }),
    species.deleteSpecies
);

router.post('/pets',
    bearerToken.authenticate('bearer', { session: false }),
    pets.postPets
);

router.put('/pets',
    bearerToken.authenticate('bearer', { session: false }),
    pets.putPets
);

router.delete('/pets',
    bearerToken.authenticate('bearer', { session: false }),
    pets.deletePets
);

router.post('/users',
    bearerToken.authenticate('bearer', { session: false }),
    users.postUsers
);

router.put('/users',
    bearerToken.authenticate('bearer', { session: false }),
    users.putUsers
);

router.delete('/users',
    bearerToken.authenticate('bearer', { session: false }),
    users.deleteUsers
);

router.post('/recipes',
    bearerToken.authenticate('bearer', { session: false }),
    recipes.postRecipes 
);

router.put('/recipes',
    bearerToken.authenticate('bearer', { session: false }),
    recipes.putRecipes
);

router.delete('/recipes',
    bearerToken.authenticate('bearer', { session: false }),
    recipes.deleteRecipes
);

module.exports = router;
