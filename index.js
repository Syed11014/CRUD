const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const pool = require('./dbConn')
const TodoController = require('./controllers/todoController')

const TODO_BASE_ROUTE = '/todo';

const todoController = new TodoController()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get(TODO_BASE_ROUTE, todoController.getAll)

app.post(TODO_BASE_ROUTE, todoController.createTask)


app.put(TODO_BASE_ROUTE, todoController.getAll)

app.delete(TODO_BASE_ROUTE + '/:id', todoController.createTask)
app.put(TODO_BASE_ROUTE + '/:id', todoController.createTask)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})