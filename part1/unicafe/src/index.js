import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  if (props.all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {((props.good - props.bad) / props.all).toFixed(1)}</p>
      <p>positive {((props.good / props.all) * 100).toFixed(1)} %</p>
    </div>
  );
};

const Button = (props) => (
  <button className="btn btn-success m-1" onClick={props.handleClick}>
    {props.text}
  </button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const setToGood = (newGood) => {
    setGood(newGood);
  };
  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral);
  };
  const setToBad = (newBad) => {
    setBad(newBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={() => setToGood(good + 1)} text="Good" />

      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />

      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
