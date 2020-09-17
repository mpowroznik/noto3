const express = require('express'),
    helmet = require('helmet'),
    bodyparser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema,
    _ = require('lodash');

require('dotenv').config();

const app = express()
app.use(morgan('common'))
app.use(helmet({ frameguard: false }))
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
var port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
    res.send('<h1>NOzbe TOdo 3stages</h1>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))