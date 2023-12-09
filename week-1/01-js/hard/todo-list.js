/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodoOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(todo=[]){
    this.todo = todo
  }

  add(task){
    this.todo.push(task)
  }
  
  remove(indexOfTodo){
    if (this.isValidIndex(indexOfTodo)) {
      this.todo.splice(indexOfTodo, 1);
    } else {
      null
    }
  }

  update(indexOfTodo, updateTodo){
    if (this.isValidIndex(indexOfTodo)) {
      this.todo[indexOfTodo] = updateTodo;
    } else {
      return null
    }
  }

  get(indexOfTodo){
    if (this.isValidIndex(indexOfTodo)) {
      return this.todo[indexOfTodo];
    } else {
      return null
    }
  }

  getAll(){
    return this.todo
  }

  clear(){
    this.todo = []
  }

  isValidIndex(index) {
    return index >= 0 && index < this.todo.length;
  }
}

module.exports = Todo;
