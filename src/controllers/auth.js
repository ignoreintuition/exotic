const BearerStrategy = require('passport-http-bearer');
const jwt = require('jwt-simple');
const passport = require('passport');

const auth = app => {
    app.use(passport.initialize());
    app.use(passport.session());
    try{
        passport.use(new BearerStrategy(
            function(token, done) {
                return done(null, {user: "test"}, {scope: 'all'});
            }
        ));
        return passport;
    } catch(e) {
        throw new Error(e.message);
    }
};
module.exports = {
    auth: auth
};
