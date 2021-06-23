import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Main from './Main'
import MoreInfo from './MoreInfo';

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
                console.log(result);
                setSearch(result.main);
                setCountry(result.sys);
                setWeather(result.weather)
        }
        // const fetchApi2 = async () => {
        //     let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=909f316fd27d1e1d18b99d8dbea246c6`
        //         const response2 = await fetch(url2);
        //         const result2 = await response2.json();
        //         console.log(result2); 
        // }
        fetchApi();
        // fetchApi2();
    }, [city])

    return (
        <Container>
            <Main onChange={onInputChange} search={search} city={city} country={country} weather={weather}/>
            <MoreInfo />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: auto;
`
