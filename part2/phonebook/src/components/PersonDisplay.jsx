const PersonDisplay = ({person, deletePerson}) => {
    const deleteEntry = () =>{
        const confirmed  = window.confirm(`Delete '${person.name}'?`)
        if (confirmed){
            deletePerson(person.id)
        }
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