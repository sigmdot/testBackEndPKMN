const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./network/routes');

const app = express();
const db = require('./db');

require('dotenv').config();

const server = require('http').Server(app);
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_LINK}`;

db(url);

app.use(cors());
app.use(bodyParser.json());
router(app);

server.listen(process.env.PORT,function() {
    console.log(`Se esta escuchando en http://localhost:${process.env.PORT}`);
});