import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.parts} {props.exercises}</p>
  )
}

const Content = () => {
  return (
    <>
      <Part parts='Fundametals of React' exercises='10' />
      <Part parts="Using props to pass data" exercises='7' />
      <Part parts="State of a component" exercises='14' />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises parts = {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  
    return (
      <div>
        <Header course={course} />
        <Content />
        <Total  exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
