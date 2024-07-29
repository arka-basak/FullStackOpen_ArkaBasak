import {useState, useEffect} from 'react'
import searchService from '../services/search'
import CountryResults from './CountryResults'


const CountrySearch = () =>{
    const [filterString, setFilterString] = useState('')
    const [matches, setMatches] = useState([])

    const queryCountries = (input) =>{
        searchService
            .getCountries()
            .then(countries => {
                setMatches(countries.filter(country =>country.name.common.toLowerCase().includes(input.toLowerCase())))
            })
    }
    
    const updateSearch = (input) =>{
        setFilterString(input)
        queryCountries(input)
    }

    useEffect(()=>{
        queryCountries(filterString)
    },[ filterString])

    const handleClick = (e) =>{
        e.preventDefault()
        setFilterString(e.target.name)
    }

    return (
        <>
            find countries 
            <input value = {filterString} onChange = {e => updateSearch(e.target.value)}/>
            <CountryResults handleClick = {handleClick} countryList = {matches}/>
            
        </>
    )
}


export default CountrySearch