import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import InpName from './components/InpName'
import InpNumber from './components/InpNumber'
import InpSearch from './components/InpSearch'
import InpButton from './components/InpButton'
import personService from './services/persons'

const App = () => {
    
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState(' ')
    const [ newNumber, setNewNumber ] = useState(' ')
    const [ searchName, setSearchName ] = useState(' ')
	const [ filterChange, setFilterChange ] = useState(false) 

   
    useEffect(() => {
    personService
        .getAll()
        .then(response => {
            setPersons(response.data)
        })
    }, [])

    const addPerson = (event)  => {
        event.preventDefault()
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
            })
        
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
            <div>
				<InpSearch type = "text" value = {searchName.trim()} onChange = {handleSearchName} />
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
                {personsToShow.map(person => 
                    <Persons key={person.id} person={person} />
                )}
            </div>
        </div>
    )
}

export default App