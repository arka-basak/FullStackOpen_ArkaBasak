import CountryList from './CountryList'
import CountryDisplay from './CountryDisplay'

const CountryResults = ({countryList}) =>{
    if (countryList.length <= 10 && countryList.length >1 ){
        return ( <CountryList countryList = {countryList}/>
        )
    }else if (countryList.length === 1 ){
        return (<CountryDisplay country = {countryList[0]}/>)
    }else{
        return (<div>Too many matches, specify another filter</div>)
    }
}

export default CountryResults