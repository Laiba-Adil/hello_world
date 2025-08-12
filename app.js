const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

/*app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


app.get('/about', (req, res) => {
  res.send('This is the About page.');
});*/

