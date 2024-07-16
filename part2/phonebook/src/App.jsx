import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import PhoneBookSearch from './components/PhoneBookSearch'
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then((response)=>{
        console.log('fetch successful',response.data)
        setPersons(response.data)
      })
  },[])
  
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