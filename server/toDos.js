var toDos = [];

var addToDo = (item) => {
  toDos = [...toDos, item];
  console.log('added to the todos: ',toDos)
  return toDos;
}
var deleteToDo = (item) => {
  let index = toDos.indexOf(item);
  toDos.splice(index, 1);
  return toDos;
}

module.exports = {toDos, addToDo, deleteToDo};