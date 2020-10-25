import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
 
    const [persons, setPersons] = useState(props.persons)
    
   
    const [newName, setNewName] = useState(' ')


    const addPerson = (event)  => {
        event.preventDefault()
        const personObject = {
            name: newName,
            date: new Date().toISOString(),
            id: persons.length + 1,
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    } 

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }


    return (
        <div>
            <h1>Persons</h1>
           
            <ul>
                {persons.map(person => 
                    <Note key={person.id} person={person} />
                )}
            </ul>
            <form className="form-inline" onSubmit={addPerson}>
                <div className="form-group">
                    <input className="form-control"
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <button className="btn btn-primary ml-2" type="submit">save</button>
                </div>
            </form>
        </div>
    )
}

export default App