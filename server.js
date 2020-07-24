const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;

const signUpHandlerPost = require('./BACKEND/api-routes/sign-up');
const signInHandlerPost = require('./BACKEND/api-routes/sign-in');

const userHandlerGet = require('./BACKEND/api-routes/user');

const eventsHandlerGet = require('./BACKEND/api-routes/events/get');
const eventsHandlerPost = require('./BACKEND/api-routes/events/post');

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist/heroku-test')));

// Auth routes
app.post('/api/sign-up', signUpHandlerPost);
app.post('/api/sign-in', signInHandlerPost);

// User route
app.get('/api/user', userHandlerGet);

// Events routes
app.get('/api/events', eventsHandlerGet);
app.post('/api/events', eventsHandlerPost);


// app.listen(PORT, (...arg) => {
//     console.log(arg);
// })

// app.use(express.static('./dist/heroku-test'));

// app.get('/*', function (req, res) {
//   res.sendFile('index.html', { root: 'dist/heroku-test' });
// });

console.log(`Running on port ${process.env.PORT || PORT}`)