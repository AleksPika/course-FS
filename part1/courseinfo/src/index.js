import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  const list = props.parts.map(function (el) {
    return (
      <div>
        <p> {el.name} {el.exercises} </p>
      </div>
    )
  })
  return list
}

const Total = (props) => {
  let score = 0
   
  const list = props.parts.map(function (el) {
    score += el.exercises
  })
  return (
    <div>
      <p>Number of exercises {score}</p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
