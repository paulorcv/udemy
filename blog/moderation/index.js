const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const axios = require('axios');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const commentsByPostId = {};

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
})

app.listen(4003, ()=> {
    console.log('Listening on port 4003...');
});
