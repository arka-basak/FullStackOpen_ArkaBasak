const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, part)=> {
    return acc + part.exercises
  }, 0)

  return <b>Total of {sum} exercises</b>
}
 

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => 
  <>
    {parts.map((part) => 
      <Part part = {part} key = {part.id}/>
    )}   
  </>

const Course = ({course}) =>{
  return(
    <>
      <Header course= {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  )
}

export default Course