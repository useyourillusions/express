const express = require('express');
const app = express();
const PORT = 5000;

// app.get('/', (req, res) => {
//     res.end('.')
// });

// app.listen(PORT, (...arg) => {
//     console.log(arg);
// })

app.use(express.static('./dist/heroku-test'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/heroku-test' }
  );
});

app.listen(PORT || 8080);

console.log(`Running on port ${PORT || 8080}`)