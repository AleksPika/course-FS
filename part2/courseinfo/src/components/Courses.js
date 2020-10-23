import React from 'react'

const Courses = ({ courses }) => {

  const mas1 = [];
  const mas2 = [];
	const total = (s, p) => {
		return (
			s + p
		)
	}
	
	for (let i = 0; i < courses[0].parts.length; i++) {
		mas1.push(courses[0].parts[i].exercises)
  }
  for (let i = 0; i < courses[1].parts.length; i++) {
		mas2.push(courses[1].parts[i].exercises)
	}

  return (
    <div>
      <h1>{courses[0].name}</h1>
      {courses[0].parts.map(note => 
          <div key={note.id}> {note.name} {note.exercises}</div> 
      )}
      <div style={{fontWeight:800}}>total of {mas1.reduce(total)} exercises</div>
      <h1>{courses[1].name}</h1>
      {courses[1].parts.map(note => 
          <div key={note.id}> {note.name} {note.exercises}</div> 
      )}
      <div style={{fontWeight:800}}>total of {mas2.reduce(total)} exercises</div>
    </div>
  )
}

export default Courses