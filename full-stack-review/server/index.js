const express = require('express');
require('dotenv').config();
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const bodyParser = require('body-parser');
const c = require('./controller')


const app = express();

app.use(express());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}));

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});

app.get('/api/words', c.readWords);
app.post('/api/words', c.createWord);

app.get('/api/users/:id', c.readUser)

const port = 4000;
app.listen(port, ()=>{console.log(`server is listening on port ${port}`)})