const express = require('express');
const morgan = require('morgan');
const knex = require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(morgan('short'));

server.get(`/api/:table`, (req, res) => {
    db(req.params.table)
        .then(thing => {
            res.status(200).json(thing);
        })
        .catch(() => {
            res.status(500).json({ error: `Could not retrieve data for ${table}.` });
        });
})

server.listen(5000, () => console.log('Server Running on 5000'));