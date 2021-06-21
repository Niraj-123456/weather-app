import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function Main() {

    const [city, setCity] = useState('Kathmandu');
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=909f316fd27d1e1d18b99d8dbea246c6`
                const response = await fetch(url);
                const response2 = await fetch(url);
                const town = await response.json();
                const nation = await response2.json();
                // console.log(result);
                setSearch(town.main);
                setCountry(nation.sys)
        }
        fetchApi();
    }, [city])

    return (
        <Container>
            <Wrapper>
                <SearchInput>
                    <input type="text" name="search" value={city} onChange={(e) => setCity(e.target.value)} />
                </SearchInput>
                <WeatherResult> 
                    {
                        !country ? <p>{city}</p> : <p>{city}, {country.country}</p>
                    }
                    {
                        search ? <p>{search.temp}</p> : 'City Name Not Found'
                    }
                    
                </WeatherResult>
            </Wrapper>
        </Container>
    )
}

export default Main

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    margin: 100px auto;

`

const Wrapper = styled.div`
    width: 50%;
    margin: auto;
`

const SearchInput = styled.div`
    width: 100%;

    input {
        height: 40px;
        width: 100%;
        border: solid 2px #000;
        border-radius: 10px;
        outline: none;
        padding: 0 10px;
        font-size: 15px;
    }
`

const WeatherResult = styled.div`
    width: 80%;
    margin: 50px auto;
    border: solid 1px #000;
`
