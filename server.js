const express = require('express');
const { join } = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('build'));
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log(`Listening PORT: ${PORT}`)
);

