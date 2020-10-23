import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  const handleChoice = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const voteChoice = () => {
    setVote({
      ...vote,
      [selected]: vote[selected] + 1
    })
  }

  const maxVote = () => {
    let max = -1, maxEl = -1
    for (let el in vote) {
      if (vote[el] > max) {
        maxEl = el
        max = vote[el]
      }
    }
    return maxEl
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        <button onClick={handleChoice}>next anecdote</button>
      </div>
      <div>
        <button onClick={voteChoice}>vote</button>
      </div>
      <div>
        It has {vote[selected]} votes
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {props.anecdotes[maxVote()]}
      </div>
    </>
  )
};

ReactDOM.render(
  <App
    anecdotes={anecdotes}
  />,
  document.getElementById("root"));
