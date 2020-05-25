import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({g, n, b}) => {
  if ((g+n+b)===0) {
    return (
      <p>No feedback given</p>
      )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text='good'     value={g} />
        <StatisticsLine text='neutral'  value={n} />
        <StatisticsLine text='bad'      value={b} />
        <StatisticsLine text='all'      value={g+n+b} />
        <StatisticsLine text='average'  value={(g+b*-1)/(g+n+b)} />
        <StatisticsLine text='positive' value={g/(g+n+b)*100}             unit='%' />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({text, value, unit}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} {unit}</td>
      </tr>
    )
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good+1)
  const addNeut = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good'     handleClick={addGood}/>
      <Button text='neutral'  handleClick={addNeut}/>
      <Button text='bad'      handleClick={addBad}/>
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
