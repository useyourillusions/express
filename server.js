const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const PORT = 5000;
const isProd = process.argv.includes('--prod');
const dbDir = './BACKEND/DB';
const { projects } = require('./angular.json');
const distPath = projects['heroku-test'].architect.build.options.outputPath;

const signUpHandlerPost = require('./BACKEND/api-routes/sign-up');
const signInHandlerPost = require('./BACKEND/api-routes/sign-in');
const userHandlerGet = require('./BACKEND/api-routes/user');
const eventsHandlerGet = require('./BACKEND/api-routes/events/get');
const eventsHandlerPost = require('./BACKEND/api-routes/events/post');

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, distPath)));

// app.get('/*', function (req, res) {
//     res.sendFile('index.html', { root: 'dist/heroku-test' });
// });

// Auth routes
app.post('/api/sign-up', signUpHandlerPost);
app.post('/api/sign-in', signInHandlerPost);

// User route
app.get('/api/user', userHandlerGet);

// Events routes
app.get('/api/events', eventsHandlerGet);
app.post('/api/events', eventsHandlerPost);


// index.html route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, distPath + '/index.html'));
});


!fs.existsSync(dbDir) && fs.mkdirSync(dbDir);

if (isProd) {
    try {
        fs.readFileSync(dbDir + '/users.json');
    } catch {
        fs.writeFileSync(dbDir + '/users.json', '[]');
    }
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on port ${process.env.PORT || PORT}`)
})

// app.use(express.static('./dist/heroku-test'));