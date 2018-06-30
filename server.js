const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/tests',(req,res) => {
  res.json('The backend is linked!');
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));