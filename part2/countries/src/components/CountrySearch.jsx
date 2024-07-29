import {useState, useEffect} from 'react'
import searchService from '../services/search'
import CountryResults from './CountryResults'


const CountrySearch = () =>{
    const [filterString, setFilterString] = useState('Sw')
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
        console.log(matches)
    },[matches])

    return (
        <>
            find countries 
            <input value = {filterString} onChange = {e => updateSearch(e.target.value)}/>
            <CountryResults countryList = {matches}/>
            
        </>
    )
}


export default CountrySearch