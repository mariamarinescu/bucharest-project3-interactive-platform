const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute')
const port = 5500;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/authentication', authRoute);
app.listen(port, () => console.log(`Im on ${port}`));