const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://user:${password}@cluster0.pjz0b.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.set('useUnifiedTopology', true)

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: name,
    number: number,
})

if (process.argv.length === 3) {
  console.log('\nphonebook:')
  Person
    .find({})
    .then(persons => {
        persons.forEach( person => console.log(`${person.name} ${person.number}`))
        console.log('')
        mongoose.connection.close()
    })
} else {
    person.save().then(response => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}

