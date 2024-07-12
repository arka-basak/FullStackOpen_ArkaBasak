import { useState } from 'react'

const AddPersonForm = ({addPerson}) =>{
  const [newName, setNewName] = useState('')

  const submitPersonForm = (e) => {
    e.preventDefault()
    addPerson(newName)
    setNewName('')
  }

  return (
    <form onSubmit = {submitPersonForm}>
        <div>
          name: <input value = {newName} onChange ={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}
export default AddPersonForm