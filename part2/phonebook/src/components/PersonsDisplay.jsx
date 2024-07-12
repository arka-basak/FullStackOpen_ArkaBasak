const PersonsDisplay = ({persons}) =>{
    return (
        <>
            {persons.map((person)=>
                <p key = {person.name}>{person.name}</p>
            )}
        </>
    )
}

export default PersonsDisplay