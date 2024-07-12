import { useState } from 'react'

const AddPersonForm = ({addPerson}) =>{
  const [newName, setNewName] = useState('Enter Name Here...')

  const submitPersonForm = (e) => {
    e.preventDefault()
    console.log(`submitting ${newName}`)
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