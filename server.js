const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist/heroku-test')));

app.get('/test', (req, res) => {
    res.json({token: '.'});
});

// app.listen(PORT, (...arg) => {
//     console.log(arg);
// })

// app.use(express.static('./dist/heroku-test'));

// app.get('/*', function (req, res) {
//   res.sendFile('index.html', { root: 'dist/heroku-test' });
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/heroku-test/index.html'));
});

app.listen(process.env.PORT || PORT);

console.log(`Running on port ${process.env.PORT || PORT}`)