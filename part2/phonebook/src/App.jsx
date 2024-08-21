import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import PhoneBookSearch from './components/PhoneBookSearch'
import Notification from './components/Notification'
import {useState, useEffect} from 'react'
import personService from './services/person'
import './index.css'



const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notifMessage, setNotifMessage] = useState({message:'', success: null})

  useEffect(()=>{
    personService
      .getAll()
      .then(people => setPersons(people))
  },[])

  const updateNotif = (message, success, timeout)=>{
    setNotifMessage({message, success})
    setTimeout(()=>{
      setNotifMessage({message, success: null})
    }, timeout)
  }
  
  const addPerson = (newPerson) => {
    personService
      .createPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          updateNotif(`Added '${returnedPerson.name}'`, true, 5000)
        })
      .catch((error)=>{
        updateNotif(`Could not add '${newPerson.name};'${error.response.data.error}`, false, 5000)
      })
  }

  const removePerson = (id, name) => {
    personService
      .deletePerson(id)
        .then(() =>{
          setPersons(persons.filter(person=> person.id !== id))
          updateNotif(`Removed '${name}'`, true, 5000)
        })
      .catch(() =>{
        setPersons(persons.filter(person=> person.id !== id))
        updateNotif(`Information of '${name}' has already been removed from server`, false, 5000)
      })
  }

  const updateNumber = (updatedPerson) => {
    personService
      .updateNumber(updatedPerson)
        .then(returnedPerson =>{
          setPersons(persons.map(person => returnedPerson.id === person.id ? returnedPerson : person))
          updateNotif(`Updated '${returnedPerson.name} to have '${returnedPerson.number}'`, true, 5000)
        })
      .catch(()=>{
        setPersons(persons.filter(person=> person.id !== updatedPerson.id))
        updateNotif(`Information of '${updatedPerson.name}' has already been removed from server`, false, 5000)
      })
  }
  
  const updateSearch = (filterString) =>{
    setFilter(filterString)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notif = {notifMessage}/>
      <PhoneBookSearch updateSearch = {updateSearch}/>
      <AddPersonForm persons = {persons} addPerson = {addPerson} updateNumber = {updateNumber}/>
      <PersonsList persons = {persons} filter = {filter} deletePerson = {removePerson}/>
    </div>
  )
}

export default App