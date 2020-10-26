import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import InpName from './components/InpName'
import InpNumber from './components/InpNumber'
import InpSearch from './components/InpSearch'
import InpButton from './components/InpButton'

const App = () => {
    
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState(' ')
    const [ newNumber, setNewNumber ] = useState(' ')
    const [ searchName, setSearchName ] = useState(' ')
	const [ filterChange, setFilterChange ] = useState(false) 

    const hook = () => {
        axios
        .get('http://localhost:3001/persons')
        .then(response => {
        setPersons(response.data)
        })
    }

    useEffect(hook, [])

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