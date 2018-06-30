const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/tests',(req,res) => {
  res.json('The backend is linked!');
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));