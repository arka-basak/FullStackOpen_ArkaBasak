import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import PhoneBookSearch from './components/PhoneBookSearch'
import {useState} from 'react'

const App = ({data}) => {
  const [persons, setPersons] = useState(data)
  const [filter, setFilter] = useState('')

  const addPerson = (newPerson) => {
    if (newPerson.name.length <= 0){
      alert('Provide a name')
    }else if (persons.some((person)=> person.name === newPerson.name)){
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
      <PersonsList persons = {persons} filter = {filter}/>
    </div>
  )
}

export default App