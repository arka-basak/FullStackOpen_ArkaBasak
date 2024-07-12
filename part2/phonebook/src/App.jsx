import AddPersonForm from './components/AddPersonForm'
import PersonsDisplay from './components/PersonsDisplay'
import {useState} from 'react'

const App = ({data}) => {
  const [persons, setPersons] = useState(data) 

  const addPerson= (newPerson) => {
    if (persons.some((person)=> person.name === newPerson.name)){
      alert(`Person '${newPerson.name}' is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPerson))
    }
  }
    

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPersonForm addPerson = {addPerson}/>
      <h2>Numbers</h2>
      <PersonsDisplay persons = {persons}/>
    </div>
  )
}

export default App