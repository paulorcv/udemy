const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const events = [];


app.post('/events', (req, res) =>{
    const event = req.body;
    events.push(event);

    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
      });  // posts service
    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
      });  // comments service
    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
      });  // query service
    axios.post('http://localhost:4003/events', event).catch((err) => {
        console.log(err.message);
      });  // query service
    
    res.send({status: 'OK'});
});


app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Listening on port 4005...');
})
