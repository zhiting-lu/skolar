const {configSecurity} = require("./src/controllers/jwt");

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const buildDataRouter = require('./src/controllers/data').buildRouter;

const app = express();
const port = 3000;
app.use(require('easy-livereload')());
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))

app.use(bodyParser.json());

configSecurity(app);

app.use('/data', buildDataRouter());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
