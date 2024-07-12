import {useState} from 'react'

const PhoneBookSearch = ({updateSearch}) =>{
    const [searchString, setSearchString] = useState('')

    const inputHandler = (newString)=>{
        setSearchString(newString)
        updateSearch(newString.toLowerCase())
    }

    return (
        <form>
            filter shown with <input value = {searchString} onChange = {(e)=> inputHandler(e.target.value)}/>
        </form>
    )
}

export default PhoneBookSearch