const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist/heroku-test')));

app.get('/test', (req, res) => {
    res.json({token: '.'});
});

const wf = (json) => {
    fs.writeFile('./BACKEND/DB/users.json', JSON.stringify(json), err => {
        if (err) throw err;

        console.log('Data written to file');
    })
}

app.get('/test1', (req, res) => {
    const rawData = fs.readFileSync('./BACKEND/DB/users.json');
    const users = JSON.parse(rawData);
    
    users.test = 10;

    fs.writeFileSync('./BACKEND/DB/users.json', JSON.stringify(users));

    const rawData1 = fs.readFileSync('./BACKEND/DB/users.json');
    const users1 = JSON.parse(rawData1);

    console.log(users);
    res.json(users1);
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