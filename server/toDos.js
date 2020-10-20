var toDos = [];

var addToDo = (item) => {
  toDos = [...toDos, item];
}
var deleteToDo = (item) => {
  let index = toDos.indexOf(item);
  toDos.splice(index, 1);
}

module.exports = {toDos, addToDo, deleteToDo};