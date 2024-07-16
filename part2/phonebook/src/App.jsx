import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import PhoneBookSearch from './components/PhoneBookSearch'
import {useState, useEffect} from 'react'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    personService
      .getAll()
      .then(people => setPersons(people))
  },[])
  
  const addPerson = (newPerson) => {
    personService
      .createPerson(newPerson)
      .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
  }

  const removePerson = (id) => {
    personService
      .deletePerson(id)
      .then(setPersons(persons.filter(person=> person.id !== id)))
  }

  const updateNumber = (updatedPerson) => {
    personService
      .updateNumber(updatedPerson)
      .then(returnedPerson =>setPersons(persons.map(person => returnedPerson.id === person.id ? returnedPerson : person)))
  }
  
  const updateSearch = (filterString) =>{
    setFilter(filterString)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBookSearch updateSearch = {updateSearch}/>
      <AddPersonForm persons = {persons} addPerson = {addPerson} updateNumber = {updateNumber}/>
      <PersonsList persons = {persons} filter = {filter} deletePerson = {removePerson}/>
    </div>
  )
}

export default App