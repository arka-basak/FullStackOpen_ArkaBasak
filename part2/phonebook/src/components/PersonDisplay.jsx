const PersonDisplay = ({person}) => {
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
        </tr>
    )
}

export default PersonDisplay