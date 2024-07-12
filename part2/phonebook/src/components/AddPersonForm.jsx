import { useState } from 'react'

const AddPersonForm = ({addPerson, newID}) =>{
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const submitPersonForm = (e) => {
    e.preventDefault()
    addPerson({
        name: newName,
        number: newNumber,
        id: newID
    })
    setNewName('')
    setNewNumber('')
  }

  return (
    <>
        <h2>Add a new</h2>
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
    </>
    
  )
}
export default AddPersonForm