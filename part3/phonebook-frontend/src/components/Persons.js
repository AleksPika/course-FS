import React from 'react'

const Persons = ({ person, deleteName }) => {
    
    return (
        <table className="table table-hover" style={{maxWidth:`650px`}}>
            <tbody>
                <tr>
                    <th scope="row" style={{minWidth:`50px`}}>{person.id}.</th>
                    <td style={{minWidth:`200px`}}>{person.name}</td>
                    <td style={{minWidth:`200px`}}>{person.number}</td>
                    <td style={{minWidth:`200px`}}>
                        <button className="btn btn-outline-success btn-sm ml-2" type="button" value={person.id} onClick={deleteName}>delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Persons