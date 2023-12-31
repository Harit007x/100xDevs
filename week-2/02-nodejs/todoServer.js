/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const todoDataJson = require('./todos.json');
  const fs = require('fs')
  const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  const port = 3000  
  app.use(bodyParser.json());

  // Get all todo
  app.get('/todos', (req, res) => {
    res.status(200).json(todoDataJson)
  })

  // Get specific todo
  app.get('/todos/:id', (req, res) => {
    const todoId = Number(req.params.id)
    const trackedTodo = todoDataJson.find((item) => item.id === todoId)
    if(!trackedTodo){
      res.status(404).send("Not found")
    }else{
      res.status(200).json(trackedTodo)
    }
  })

  // app.get('/todos/:id', (req, res) => {
  //   const todo = todos.find(t => t.id === parseInt(req.params.id));
  //   if (!todo) {
  //     res.status(404).send();
  //   } else {
  //     res.json(todo);
  //   }
  // });

  // Create todo
  app.post('/todos', (req, res) => {
    const id = todoDataJson.length !== 0 ? todoDataJson[todoDataJson.length-1].id + 1 : 1;
    const data = {
      id:id,
      ...req.body
    }
    todoDataJson.push(data)

    // console.log(todoDataJson)
    res.status(201).json({id})
  })

  // Update todo
  app.put('/todos/:id', (req, res) => {
    const todoId = Number(req.params.id)
    const { title, completed, description } = req.body;
    const trackedTodo = todoDataJson.filter((item) => {
      // console.log("item id -", item.id)
        if(item.id === todoId){
          return item
        }
    })

    if(trackedTodo.length===0){
      res.status(404).send("Not found")
    }else{
      trackedTodo[0].title = title
      trackedTodo[0].completed = completed
      trackedTodo[0].description = description
      res.status(200).send("Todo Updated Successfully")
    }
  })

  // Delete todo
  app.delete('/todos/:id', (req, res) => {
    const todoID = Number(req.params.id)
    let deleteIndex = undefined

    todoDataJson.filter((item, index) =>{
      if(item.id == todoID){
        deleteIndex = index
      }
      return
    })
    
    if(deleteIndex===undefined){
      res.status(404).send("Not found.")
    }else{
      todoDataJson.splice(deleteIndex, 1)
      res.status(200).send("Todo deleted successfully.")
    }    
  })

  // Starting server
  // app.listen(port, () => {
  //   console.log(`Server is running on http://localhost:${port}`);
  // });
  
  // to handle all the invalid routes
  app.use((req, res, next) => {
    res.status(404).send();
  });
  
  module.exports = app;