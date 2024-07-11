import { useState } from 'react'



const Button = ({incrementFeedback, feedback, text}) =>{
  return (
    <button onClick = {() => incrementFeedback(feedback + 1)}>{text}</button>
  )
}

const StatisticLine = ({text, value}) =>{
  return <div>{text} {value}</div>
}


const Statistics = ({good,neutral,bad}) => {
  const all = good + bad + neutral
  if (all > 0){
    const average = (good - bad)/all 
    const positive = String((good/all) * 100 ) + " %"
    return (
        <>
          <h1>statistics</h1>
          <StatisticLine text = 'good' value = {good}></StatisticLine>
          <StatisticLine text = 'neutral' value = {neutral}></StatisticLine>
          <StatisticLine text = 'bad' value = {bad}></StatisticLine>
          <StatisticLine text = 'all' value = {all}></StatisticLine>
          <StatisticLine text = 'average' value = {average}></StatisticLine>
          <StatisticLine text = 'positive' value = {positive}></StatisticLine>
        </>
    )
  }else{
    return (
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
      
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button incrementFeedback={setGood} feedback = {good} text = {'good'}/>
      <Button incrementFeedback={setNeutral} feedback = {neutral} text = {'neutral'}/>
      <Button incrementFeedback={setBad} feedback = {bad} text = {'bad'}/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App