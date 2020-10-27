import React from 'react'

const Country = ({ country, weather }) => {
  return (
    <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h4>Spoken languages</h4>
            <ul>
                {country.languages.map(one => <li key = {one.name}>{one.name}</li>)}
            </ul>
        <img src = {country.flag} alt = "" width = "150px" height = "100px" />
        <h3>Weather in {country.capital}</h3>
        <p><b>temperature: </b> {weather['current'].temperature} Celcius</p>
        <img src={weather['current'].weather_icons[0]} alt='weather icon' />
        <p><b>wind: </b> {weather['current'].wind_speed} kph direction {weather['current'].wind_dir}</p>         
	</div>
  )
}

export default Country