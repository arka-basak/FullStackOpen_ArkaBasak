import AddPersonForm from './components/AddPersonForm'
import PersonsDisplay from './components/PersonsDisplay'
import PhoneBookSearch from './components/PhoneBookSearch'
import {useState} from 'react'

const App = ({data}) => {
  const [persons, setPersons] = useState(data)
  const [filter, setFilter] = useState('')

  const addPerson = (newPerson) => {
    if (persons.some((person)=> person.name === newPerson.name)){
      alert(`Person '${newPerson.name}' is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPerson))
    }
  }
  const updateSearch = (filterString) =>{
    setFilter(filterString)
  }


    
  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBookSearch updateSearch = {updateSearch}/>
      <AddPersonForm addPerson = {addPerson} newID = {persons.length + 1 }/>
      <PersonsDisplay persons = {persons} filter = {filter}/>
    </div>
  )
}

export default App