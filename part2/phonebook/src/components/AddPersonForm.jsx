import { useState } from 'react'

const AddPersonForm = ({addPerson}) =>{
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const submitPersonForm = (e) => {
    e.preventDefault()
    addPerson({
        name: newName,
        number: newNumber
    })
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit = {submitPersonForm}>
        <div>
            name: <input value = {newName} onChange ={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>
            number: <input value = {newNumber} onChange = {(e)=> setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}
export default AddPersonForm