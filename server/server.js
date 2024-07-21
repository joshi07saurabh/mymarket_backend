const express = require('express')
const shopRouter = require('../routes/shopRouter');
const { configDotenv } = require('dotenv');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: `./config.env` });
app.use(express.json());

app.use('/api/v1/shop', shopRouter)

module.exports = app;