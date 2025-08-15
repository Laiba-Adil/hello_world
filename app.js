/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});*/

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 5000;

// GET Route - fetch data
app.get('/', (req, res) => {
    res.json({ message: 'Hello from GET route!' });
});

app.post('/api/message', (req, res) => {
    res.json({ reply: 'POST request received' });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




