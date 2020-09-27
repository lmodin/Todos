const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(Cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.listen(8000, function() {
  console.log('listening on 8000!')
})