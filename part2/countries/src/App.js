import React, {useState, useEffect} from 'react'
import axios from 'axios'
import InpSearch from './components/InpSearch'
import Country from './components/Country'


const App = () => {

    const [countries, setCountries] = useState([])
    const [ capitalCity, setCapitalCity] = useState('Helsinki')
    const [ searchNation, setSearchNation ] = useState(' ')
    const [ search, setSearch ] = useState(false)
    const [ weather, setWeather ] = useState([])
    
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => setCountries(response.data))
    }, [])

    useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=5a0a8e2b8486c0e7fbcb9eb5358eecf7&query=${capitalCity}`)
			.then(response => setWeather(response.data))
	}, [capitalCity])
 
    const handleChange = (event) => {
		event.preventDefault()
    }

    const handleSearchCountry = (event) => {
		setSearchNation(event.target.value)
		if (event.target.value === '') {
			setSearch(false)
		}
		else {
			setSearch(true)
		}
	}
    
    const handleClick = (event) => {
        event.preventDefault()
        setSearchNation(event.target.value)	
    }
    
    const filterItems = (query) => {
		const results = countries.filter(nation => nation.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 )
		return results
    }
    
    const displayToShow = search
		? filterItems(searchNation)
        : countries
    
    const handleCountryChange = (capital) => setCapitalCity(capital)

    const AllCountries = () => {
        if (search === false) {
			return null
		}
		else {
			if (displayToShow.length > 10) {
				return (
					<div>
						<p>Too many matches, specify another filter</p>
					</div>
				)
			}
			else if (displayToShow.length <= 10 && displayToShow.length >= 2) {
				return (
					<div>
					
						{displayToShow.map(nation => {
                                return (
                                    <div key ={nation.area}>
                                        <p key={nation.name}>{nation.name}
                                            <button className="btn btn-outline-success ml-3" value={nation.name} onClick={handleClick}>Show</button>
                                        </p>
                                    </div>
                                )
                            }		
						)}
	
					</div>
				)
			}
            else if (displayToShow.length === 1) {
                
                return (
                    <div key={displayToShow[0].name}>
                        <Country country={displayToShow[0]} weather={weather} />
                    </div>
				)
			}
			else {
				return (
					<div>
						<p>Please try again!</p>
					</div>
				)
			}
		}
    }

    return (
        <div>
            <h1>Data for countries</h1>
            <form onSubmit = {handleChange}>
				<InpSearch type = "text" value = {searchNation.trim()} onChange = {handleSearchCountry} />
			</form>
            <AllCountries />
        </div>
    )
}


export default App