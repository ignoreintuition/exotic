const express = require('express');

const { auth, species, pets, users} = require('../controllers');

const app = express();
const router = express.Router();
const bearerToken = auth.auth(app);

router.get('/species', species.getSpecies );
router.get('/pets', pets.getPets );
router.get('/users', users.getUsers);

router.post('/species',
    bearerToken.authenticate('bearer', { session: false }),
    species.postSpecies
);

router.put('/species',
    bearerToken.authenticate('bearer', { session: false }),
    species.putSpecies
);

router.post('/users',
    bearerToken.authenticate('bearer', { session: false }),
    users.postUsers
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
module.exports = router;
