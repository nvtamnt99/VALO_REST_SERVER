const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 9000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors('*'));

const db = require('./models/connect.model');
db.sequelize.sync();



app.listen(port, function() {
    console.log(`Server is running on port: ${port}`);
})