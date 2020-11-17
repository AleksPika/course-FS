import React from 'react'

const Persons = ({ filter, persons, deleteName }) => {
    
    return (
        persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase())).map(person =>
                <table className="table table-hover" style={{maxWidth:`650px`}} key={person.id}>
                    <tbody>
                        <tr>
                            <td style={{minWidth:`200px`}}>{person.name}</td>
                            <td style={{minWidth:`200px`}}>{person.number}</td>
                            <td style={{minWidth:`200px`}}>
                                <button className="btn btn-outline-success btn-sm ml-2" type="button" value={person.id} onClick={deleteName}>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
    )
}

export default Persons