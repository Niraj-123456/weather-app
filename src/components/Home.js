import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Main from './Main'

function Home() {

    const [city, setCity] = useState('Kathmandu');
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState('');

    const onInputChange = (e) => {
        setCity(e.target.value);
    }

    useEffect(() => {
        const fetchApi = async () => {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=909f316fd27d1e1d18b99d8dbea246c6`
                const response = await fetch(url);
                const result = await response.json();
                setSearch(result.main);
                setCountry(result.sys);
                setWeather(result.weather)
        }
        fetchApi();
    }, [city])

    return (
        <Container>
            <Main onChange={onInputChange} search={search} city={city} country={country} weather={weather}/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: auto;
`
