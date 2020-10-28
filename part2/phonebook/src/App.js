import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import InpName from './components/InpName'
import InpNumber from './components/InpNumber'
import InpSearch from './components/InpSearch'
import InpButton from './components/InpButton'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
    
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ searchName, setSearchName ] = useState('')
    const [ filterChange, setFilterChange ] = useState(false) 
    const [ message, setmessage ] = useState(null)
    const [ messageType, setMessageType ] = useState(null)

   
    useEffect(() => {
    personService
        .getAll()
        .then(response => {
            setPersons(response.data)
        })
    }, [])

    const addPerson = (event)  => {
        event.preventDefault()
        
        const duplicateCheck = persons.find(person => person.name === newName)
            if (typeof duplicateCheck !== 'undefined' && duplicateCheck.number !== newNumber) {
            personService
                .update(duplicateCheck.id, { name: duplicateCheck.name, number: newNumber})
                .then(returnedPerson => {
                if (window.confirm(`${returnedPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
                    setPersons(persons.map(person => 
                            person.id !== duplicateCheck.id ? person : returnedPerson))
                }
                setNewName('')
                setNewNumber('')
                })
                return
            } else if (typeof duplicateCheck !== 'undefined') {
                alert(`${newName} is already added to phonebook`)
                setNewName('')
                setNewNumber('')
                return
            }

        const personObject = {
            name: newName,
            number: newNumber,
        }
        
        personService
            .create(personObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
                setMessageType('confirmation')
                setmessage(`Added ${response.name}`)
                setTimeout(() => {
                    setmessage(null)
                    setMessageType(null)
                }, 5000)
            })
        
    } 
    const deleteName = (event) => {
        event.preventDefault()
        const id = parseInt(event.target.value)
        const name = persons[id -1].name
        personService.deletion(persons[id -1])
        .catch(error => {
            setMessageType('error')
            setmessage(`Information of ${name} has already been removed from server`)
            setTimeout(() => {
                setmessage(null)
                setMessageType('error')
            }, 5000)
            setPersons(persons.filter(n => n.id !== id))
        })
        setPersons(persons.filter(n => n.id !== id))
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchName = (event) => {
		setSearchName(event.target.value)
		setFilterChange(true)
	}
	const filterItems = (query) => {
		const filter_result = persons.filter(person => person.name.toLowerCase().split(' ').join(' ').indexOf(query.toLowerCase()) !== -1)
		return filter_result
	}
    const personsToShow = filterChange
		? filterItems(searchName)
		: persons

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={message} messageType={messageType} />
            <div>
				<InpSearch type = "text" value = {searchName} onChange = {handleSearchName} />
            </div>
            <h1>Add a new number</h1>
            <form onSubmit={addPerson}>
                <InpName
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                />
                <InpNumber
                    type="text"
                    value={newNumber}
                    onChange={handleNumberChange}
                />
                <InpButton
                    type="submit"
                    text="add"
                />
            </form>
            <h1>Numbers</h1>
            <div>
                <table className="table table-hover" style={{maxWidth:`650px`}}>
                    <thead>
                        <tr>
                            <th scope="col" style={{minWidth:`50px`}}>#</th>
                            <th scope="col" style={{minWidth:`200px`}}>Name</th>
                            <th scope="col" style={{minWidth:`200px`}}>Phone</th>
                            <th scope="col" style={{minWidth:`200px`}}>Delete</th>
                        </tr>
                    </thead>
                </table>
                {personsToShow.map(person => 
                    <Persons key={person.id} filter={filterChange} person={person} deleteName={deleteName} />
                )}
            </div>
        </div>
    )
}

export default App