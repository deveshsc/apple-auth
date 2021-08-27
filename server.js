const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/api/auth/callback/apple', (req, res) => {
    console.log(req.body);
});

app.post('/api/auth/callback/apple', (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));