import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountries = (input) =>{
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

export default {getCountries}