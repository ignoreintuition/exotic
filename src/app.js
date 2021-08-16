const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => res.send('App is working'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use('/api', routes);
module.exports = {
  app
};
