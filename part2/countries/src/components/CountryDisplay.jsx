
const CountryDisplay = ({country}) =>{
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>{`capital ${country.capital[0]}`}</div>
            <div>{`area ${country.area}`}</div>
            <h2>languages</h2>
            <ul>
                {Object.values(country.languages).map(language =>{return<li key = {language}>{language}</li>})}
            </ul>
            <img src = {country.flags.png}/>
        </div>
    )
}

export default CountryDisplay