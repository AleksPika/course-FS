import React from 'react'
import ReactDOM from 'react-dom'

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


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <>
      <Courses courses={courses} />
    </>
  )
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
)
