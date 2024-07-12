import AddPersonForm from './components/AddPersonForm'
import PersonsDisplay from './components/PersonsDisplay'
import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const addPerson= (newName) => {
    setPersons(persons.concat({name: newName}))
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