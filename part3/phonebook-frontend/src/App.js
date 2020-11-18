import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import InpSearch from './components/InpSearch'
import InpName from './components/InpName'
import InpNumber from './components/InpNumber'
import InpButton from './components/InpButton'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
    
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ searchName, setSearchName ] = useState('')
    const [ message, setmessage ] = useState(null)
    const [ messageType, setMessageType ] = useState(null)

    useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
            setPersons(initialPersons)
        })
    }, [])

    const addPerson = (event)  => {
        event.preventDefault()
        
        const duplicateCheck = persons.find(person => person.name === newName)
        if (typeof duplicateCheck !== 'undefined' && duplicateCheck.number !== newNumber) {
            if (window.confirm(`${duplicateCheck.name} is already added to phonebook, replace the old number with a new one?`)) {
                personService
                    .update(duplicateCheck.id, { name: duplicateCheck.name, number: newNumber })
                    .then(returnedPerson => {
                    
                        setPersons(persons.map(person =>
                            person.id !== duplicateCheck.id ? person : returnedPerson))
                        setMessageType('verification')
                        setmessage(`The old number ${duplicateCheck.name} replaced with a new one `)
                        setTimeout(() => {
                            setmessage(null)
                            setMessageType(null)
                        }, 5000)
                        setNewName('')
                        setNewNumber('')
                })
            }
                return
            } else if (typeof duplicateCheck !== 'undefined') {
                setNewName('')
                setNewNumber('')
                setMessageType('error')
                setmessage(`${newName} is already added to phonebook`)
                setTimeout(() => {
                    setmessage(null)
                    setMessageType(null)
                }, 5000)
                return
            }

        personService
            .create({ name: newName, number: newNumber })
            .then(response => {
                setPersons(persons.concat(response))
                setNewName('')
                setNewNumber('')
                setMessageType('verification')
                setmessage(`Added ${response.name}`)
                setTimeout(() => {
                setmessage(null)
                setMessageType(null)
                }, 5000)
            })
            .catch(error => {
                setMessageType('error')
                setmessage(`${JSON.stringify(error.response.data)}`)
                setTimeout(() => {
                setmessage(null)
                setMessageType('error')
                }, 5000)
            })
    } 

    const deleteName = (event) => {
       event.preventDefault()

        const personToBeRemoved = persons.find(person => person.id === event.target.value)
        const id = personToBeRemoved.id
        const name = personToBeRemoved.name
        
        if (window.confirm(`Delete ${name} ?`)) {
            personService.remove(id)
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
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchName = (event) => {
		setSearchName(event.target.value)
	}
	
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
                            <th scope="col" style={{minWidth:`200px`}}>Name</th>
                            <th scope="col" style={{minWidth:`200px`}}>Phone</th>
                            <th scope="col" style={{minWidth:`200px`}}>Delete</th>
                        </tr>
                    </thead>
                </table>
                <Persons filter={searchName} persons={persons} deleteName={deleteName} />
            </div>
        </div>
    )
}

export default App