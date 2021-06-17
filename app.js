const express = require("express");
const app = express();
require("dotenv").config();
require('./database');
const bodyParser = require('body-parser')
var cors = require('cors')
var router = express.Router();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

router.use(require('./routes/destinatario.routes'));
router.use(require('./routes/banco.routes'));
router.use(require('./routes/cuenta.routes'));
router.use(require('./routes/transferencia.routes'));

app.use('/api/v1', router);

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
    //app.use('/', jobsRouter);
});