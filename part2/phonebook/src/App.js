import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
 
    const [persons, setPersons] = useState(props.persons)
    const [newName, setNewName] = useState(' ')
    const [newNumber, setNewNumber] = useState(' ')


    const addPerson = (event)  => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        const repeat = () => {
            for (let i = 0; i < persons.length; i++){
                if (newName === persons[i].name) {
                    window.alert(`${newName} is already added to phonebook`)
					
					setPersons(persons)
                }
                else {
					setPersons(persons.concat(personObject))
				}
            }
        }
        repeat()
        setNewName('')
        setNewNumber('')
    } 

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }


    return (
        <div>
            <h1>Phonebook</h1>
           <form className="form-inline" onSubmit={addPerson}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name:</label>
                    <input className="form-control" 
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <label className="col-sm-2 col-form-label">Phone:</label>
                    <input className="form-control" 
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                    <button className="btn btn-primary ml-2" type="submit">add</button>
                </div>
               
            </form>
            <h1>Numbers</h1>
            <div>
                {persons.map(person => 
                    <Note key={person.id} person={person} />
                )}
            </div>
            
        </div>
    )
}

export default App