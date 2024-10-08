import PersonDisplay from "./PersonDisplay"

const PersonsList = ({ persons, filter, deletePerson }) =>{
    const filteredPersons = persons.filter((person)=>person.name.toLowerCase().includes(filter))

    return (
        <>
            <h2>Numbers</h2>
            <table>
                <tbody>
                    {filteredPersons.map((person)=>
                        <PersonDisplay key = {person.id} person = {person} deletePerson = {deletePerson}/>
                    )}
                </tbody>
            </table>
            
        </>
    )
}

export default PersonsList