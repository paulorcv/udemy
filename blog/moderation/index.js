const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const axios = require('axios');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const commentsByPostId = {};

app.post('/events', async (req, res) => {
    console.log('Received Event', req.body.type);
    const { type, data } = req.body;

    if(type==='CommentCreated'){
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        }).catch((err) => {
            console.log(err.message);
          });
    }

    res.send({});
})

app.listen(4003, ()=> {
    console.log('Listening on port 4003...');
});
