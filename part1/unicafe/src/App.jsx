import { useState } from 'react'



const Button = ({handleClick, text}) =>{
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) =>{
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = ({good,neutral,bad}) => {
  const all = good + bad + neutral
  if (all > 0){
    const average = (good - bad)/all 
    const positive = String((good/all) * 100 ) + " %"
    return (
        <>
          <h1>statistics</h1>
          <table>
            <tbody>
              <StatisticLine text = 'good' value = {good}></StatisticLine>
              <StatisticLine text = 'neutral' value = {neutral}></StatisticLine>
              <StatisticLine text = 'bad' value = {bad}></StatisticLine>
              <StatisticLine text = 'all' value = {all}></StatisticLine>
              <StatisticLine text = 'average' value = {average}></StatisticLine>
              <StatisticLine text = 'positive' value = {positive}></StatisticLine>
            </tbody>
          </table>
          
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

  const incrementGood = () => setGood(good+1)
  const incrementNeutral = () => setNeutral(neutral+1)
  const incrementBad = () =>setBad(bad + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick = {incrementGood} text = {'good'}/>
      <Button handleClick = {incrementNeutral}  text = {'neutral'}/>
      <Button handleClick = {incrementBad}  text = {'bad'}/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App