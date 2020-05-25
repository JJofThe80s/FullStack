import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const DisplayAnecdote = ({selection,anecdotes}) => {
  return (
    <p>{anecdotes[selection]}</p>
  )
}

const DisplayAnecdoteVotes = ({selection, votes}) => {
  return (
    <p>has {votes[selection]} votes</p>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
  const RandomSelect = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const Vote = () => {
    const copy =[...votes]
    copy[selected] +=1
    setVotes(copy)
  }

  const maxVotesIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdote selection={selected} anecdotes={anecdotes} />
      <DisplayAnecdoteVotes selection={selected} votes={votes} />
      <Button text='vote'          handleClick={Vote}/>
      <Button text='next anecdote' handleClick={RandomSelect}/>
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote selection={maxVotesIndex} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'testi'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
