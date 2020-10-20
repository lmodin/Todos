const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');

const toDos = require('./toDos.js');

const app = express();
app.use(Cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/toDos', function (req, res) {
  res.send(toDos.toDos)
})
app.post('/toDos', (req, res) => {
  toDos.addToDo(req.body)
  res.send(toDos.toDos)
})
app.delete('/toDos', (req, res) => {
  toDos.deleteToDo(req.body)
  res.send(toDos.toDos)
})

app.listen(8000, function() {
  console.log('listening on 8000!')
})