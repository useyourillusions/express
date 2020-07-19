const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// app.get('/', (req, res) => {
//     res.end('.')
// });

// app.listen(PORT, (...arg) => {
//     console.log(arg);
// })

// app.use(express.static('./dist/heroku-test'));
app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/*', function (req, res) {
//   res.sendFile('index.html', { root: 'dist/heroku-test' }
//   );
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || PORT);

console.log(`Running on port ${process.env.PORT || PORT}`)