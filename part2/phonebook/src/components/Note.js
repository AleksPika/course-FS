import React from 'react'

const Note = ({ person }) => {
    return (
        <div>{person.id}. {person.name}, {person.number}</div>
    )
}

export default Note