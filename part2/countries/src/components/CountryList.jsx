const CountryList = ({countryList})=>{
    return (
        <>{countryList.map(country=>{return <div key = {country.cca2 + country.ccn3}>{country.name.common}</div>})}</>
    )
}

export default CountryList