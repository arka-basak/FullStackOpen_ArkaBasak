const CountryList = ({countryList, handleClick})=>{


    return (
        <>{countryList.map(country=>{return (
        <div key = {country.cca2 + country.ccn3}>
            {country.name.common}
            <button onClick = {handleClick} name = {country.name.common}> show </button>
        </div>
        )})}</>
    )
}

export default CountryList