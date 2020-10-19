import React, { useState } from "react";
import ReactDOM from "react-dom";

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
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {(good - bad) / all}</p>
      <p>positive {(good / all) * 100} %</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
