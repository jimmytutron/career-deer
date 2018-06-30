const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Just a basic test route to hit for making sure everything was
// linking up properly for development and production.
app.get('/tests',(req,res) => {
  res.json('The backend is linked!');
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));