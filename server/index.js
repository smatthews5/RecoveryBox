const express = require('express');
const db = require('./models/index');
const router = require('./router');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection to db has been established successfully.'); // eslint-disable-line no-console
    await db.sequelize.sync(); //{force: true}
    app.listen(port);
    console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
