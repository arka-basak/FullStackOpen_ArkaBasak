import { useState } from 'react'

const FeedbackGiver = ({setGood, setNeutral, setBad, good, neutral, bad}) =>{
  return (
    <>
      <h1>give feedback</h1>
      <button onClick = {()=> setGood(good + 1)}>good</button>
      <button onClick = {()=> setNeutral(neutral + 1)}>neutral</button>
      <button onClick = {()=> setBad(bad + 1)}>bad</button>
    </>
    
  )
}

const Statistics = ({good,neutral,bad}) => {
  const all = good + bad + neutral
  const average = all > 0 ? (good - bad)/all : 0
  const positive = all > 0 ? (good/all) * 100 : 0 

  return (
      <>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {average}</div>
        <div>positive {positive} %</div>
      </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <FeedbackGiver setGood = {setGood} setNeutral = {setNeutral} setBad = {setBad} good = {good} neutral = {neutral} bad = {bad}/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App