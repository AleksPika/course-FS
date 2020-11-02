const express = require('express')
const app = express()

let  persons = [
    {
      "name": "Arto Hellas",
      "number": "18191655818",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "2-43-23434",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
]
app.get("/info", (request, response) => {
	const date = new Date()
	
    response.send(`
    <h1>Phonebook has info for ${persons.length} people</h1> 
    <h2>${date}</h2>
    `)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})