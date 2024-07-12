const PersonsDisplay = ({persons, filter}) =>{
    
    const filteredPersons = persons.filter((person)=>person.name.toLowerCase().includes(filter))

    return (
        <>
            <h2>Numbers</h2>
            {filteredPersons.map((person)=>
                <p key = {person.id}>{person.name} {person.number}</p>
            )}
        </>
    )
}

export default PersonsDisplay