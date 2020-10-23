const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');

var toDos = require('./toDos.js');

const app = express();
app.use(Cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/toDos', function (req, res) {
  //console.log(toDos.toDos);
  res.send(toDos.toDos)
})
app.post('/toDos', (req, res) => {
  //console.log(toDos.toDos);
  //console.log('trying to add: ', req.body.todo)
  let list = toDos.addToDo(req.body.todo)
  //console.log('updated list in POST: ',list)
  res.send(list)
})
app.delete('/toDos', (req, res) => {
  //console.log('got a delete request: ',req.body.todo);
  let list = toDos.deleteToDo(req.body.todo)
  res.send(list);
})

app.listen(8000, function() {
  console.log('listening on 8000!')
})