import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function Main() {

    // const date = new Date().toLocaleDateString();
    // const time = new Date().toLocaleTimeString();
    

    const [city, setCity] = useState('Kathmandu');
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState('');

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
            <Wrapper>
                <SearchInput>
                    <label htmlFor="search">Enter Your City Name</label>
                    <input type="text" name="search" id="search" value={city} onChange={(e) => setCity(e.target.value)} />
                </SearchInput>
                <WeatherResult>
                    <Background>

                    </Background>
                    <Content>
                        <Temp>
                            {
                                !country ? <h1>{city}</h1> : <h1>{city}, {country.country}</h1>
                            }

                            <h4>{new Date().toLocaleString('en-US', {timeZone: 'Asia/Kathmandu', dateStyle: 'full', timeStyle: 'short'})}</h4>

                            {
                                search ? <h2>{search.temp} &deg;C</h2> : <h2>City Name Not Found</h2>
                            }
                        </Temp>
                        <MinMax>
                            {
                                search ?
                                <> 
                                <p><i className="fas fa-temperature-low"></i> Min. Temp: {search.temp_min} &deg;C</p>
                                <p><i className="fas fa-temperature-high"></i> Max. Temp: {search.temp_max} &deg;C</p>
                                </>
                            :
                                ''
                            }
                        </MinMax>
                        <Cloud>
                            {
                                weather ? weather.map((cloud, id) => {
                                    return (
                                    <CloudContent key={cloud.id}>
                                        <i className="fas fa-cloud-sun-rain"></i>
                                        <p>{cloud.description}</p>
                                    </CloudContent>
                                    )
                                })
                                : ''
                            }

                        </Cloud>
                    </Content>   
                </WeatherResult>
            </Wrapper>
        </Container>
    )
}

export default Main

const Container = styled.div`
    color: #fff;
`

const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    margin: 100px auto;
`

const SearchInput = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 20px;
    color: #fff;

    input {
        height: 40px;
        width: 100%;
        border-radius: 10px;
        border: none;
        outline: none;
        padding: 0 10px;
        font-size: 15px;
        margin: 10px auto;
    }
`

const WeatherResult = styled.div`
    width: 90%;
    height: auto;
    margin: 50px auto;
    text-align: center;  
`

const Background = styled.div`
    height: 600px;
    background-image: url('https://st4.depositphotos.com/11221732/27367/i/450/depositphotos_273671996-stock-photo-blue-day-clear-sky-light.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: -5px 2px 5px 3px rgba(0, 0, 0, 0.3);
    position: relative;
`

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
`

const Temp = styled.div`
    margin-top: 50px;
    

    h1 {
        font-size: 50px;  
        text-transform: capitalize;
        font-weight: 300;
    }

    h4 {
        font-size: 30px;
        font-weight: 300;
        
    }

    h2 {
        font-size: 60px;
        font-weight: 300;
    }
`

const MinMax = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        padding: 0 20px;
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 600;

        i {
            font-size: 30px;
        }   
    }
`

const Cloud = styled.div`
    margin-top: 30px;
    width: 100%;

    i {
        font-size: 30px;
        margin: 0 10px;
    }

    p {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
    }

`

const CloudContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
