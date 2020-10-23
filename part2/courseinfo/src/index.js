import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(note => 
          <div key={note.id}> {note.name} {note.exercises}</div> 
        )}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }
  
const Sum = () => {
	
	const mas = [];
	const total = (s, p) => {
		return (
			s + p
		)
	}
	
	for (let i = 0; i < course.parts.length; i++) {
		mas.push(course.parts[i].exercises)
	}
	
	return (
		<div>
			<p>total of {mas.reduce(total)} exercises</p>
		</div>
	)
}

  return (
    <>
      <Course course={course} />
      <Sum />
    </>
  )
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
)
