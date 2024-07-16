const PersonDisplay = ({person, deletePerson}) => {
    const deleteEntry = () =>{
        console.log(`Delete '${person.name}'`)
        deletePerson(person.id)
    }

    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
                <button onClick = {deleteEntry}>Delete</button>
            </td>
        </tr>
    )
}

export default PersonDisplay