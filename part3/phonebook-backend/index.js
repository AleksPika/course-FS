require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('post', (request, response) => JSON.stringify(request.body))
app.use(morgan(function (tokens, request, response) {
  if (tokens.method(request, response) === 'POST'){
    return [
      tokens.method(request, response),
      tokens.url(request, response),
      tokens.status(request, response),
      tokens.res(request, response, 'content-length'), '-',
      tokens['response-time'](request, response), 'ms',
      tokens.post(request, response)
    ].join(' ')
  } else {
    return [
      tokens.method(request, response),
      tokens.url(request, response),
      tokens.status(request, response),
      tokens.res(request, response, 'content-length'), '-',
      tokens['response-time'](request, response), 'ms'
    ].join(' ')
  }
}))
let  persons = [
  {
      "name": "Arto Hellas",
      "number": "18191655818",
      "id": 1
  }
]
app.get("/info", (request, response) => {
	const date = new Date()
  
  Person.find({}).then(persons =>{
    response.send(`
        <h1>Phonebook has info for ${persons.length} people</h1> 
        <h2>${date}</h2>
    `)
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
    }

    let nam = persons.find(person => person.name === body.name)
	
	  if (nam) {
      return res.status(400).json({
        error: "name must be unique"
      })
    }
    
  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedNote => response.json(savedAndFormattedNote))
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => person ? response.json(person) : response.status(404).end())
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})