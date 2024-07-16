import { useState } from 'react'

const AddPersonForm = ({persons , addPerson , updateNumber}) =>{
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const submitPersonForm = (e) => {
    e.preventDefault()
    const existingPerson = persons.find(person=> newName === person.name)
    if (newName.length <= 0 || newNumber.length <= 0 ){
      alert('Please fill all fields')
    }else if (existingPerson){
      if (window.confirm(`'${newName}' is already added to phonebook, replace the old number with a new one?`)){
        updateNumber({...existingPerson, number: newNumber})
      }
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