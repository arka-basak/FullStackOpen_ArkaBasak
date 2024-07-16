import { useState } from 'react'

const AddPersonForm = ({names,addPerson}) =>{
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const submitPersonForm = (e) => {
    e.preventDefault()
    if (newName.length <= 0 || newNumber.length <= 0 ){
      alert('Please fill all fields')
    }else if (names.includes(newName)){
      alert(`Person '${newName}' is already in phonebook`)
    }else{
      addPerson({
          name: newName,
          number: newNumber,
      })
    }
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