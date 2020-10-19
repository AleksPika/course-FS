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
      <p>average: {(props.good - props.bad) / props.all}</p>
      <p>positive {(props.good / props.all) * 100} %</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>
      <button className="btn btn-success m-1" onClick={() => setGood(good + 1)}>
        {" "}
        good{" "}
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => setNeutral(neutral + 1)}
      >
        {" "}
        neutral{" "}
      </button>
      <button className="btn btn-danger m-1" onClick={() => setBad(bad + 1)}>
        {" "}
        bad{" "}
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
