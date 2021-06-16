const express = require("express");
const app = express();
require("dotenv").config();
require('./database');
const bodyParser = require('body-parser')

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(require('./routes/destinatario.routes'));
app.use(require('./routes/banco.routes'));
app.use(require('./routes/cuenta.routes'));
app.use(require('./routes/transferencia.routes'));


app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
    //app.use('/', jobsRouter);
});