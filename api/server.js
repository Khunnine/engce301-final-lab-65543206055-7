const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const users = [
  {
    firstName: "ณัฐฎภรณ์",
    lastName: "ใจมนต์",
    email: "natthaporn_ja65@live.rmutl.ac.th",
    Position: "System Analyst (SA)"
  },
  {
    firstName: "พัทธนันท์",
    lastName: "ใจช่วย",
    email: "patthanan_ja65@live.rmutl.ac.th",
    Position: "Developer"
  },
  {
    firstName: "อริยา",
    lastName: "รันยะ",
    email: "ariya_ra65@live.rmutl.ac.th",
    Position: "Tester"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});