import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function Main() {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const [city, setCity] = useState('Kathmandu');
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=909f316fd27d1e1d18b99d8dbea246c6`
                const response = await fetch(url);
                const result = await response.json();
                // console.log(result);
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
                    <Content>
                        {
                            !country ? <h4>{city}</h4> : <h4>{city}, {country.country}</h4>
                        }

                        <h5>{date}, {time}</h5>

                        {
                            search ? <h3>{search.temp} &deg;C</h3> : <h3>City Name Not Found</h3>
                        }
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
                                    <>
                                        <i className="fas fa-cloud-sun-rain"></i>
                                        <p key={id}>{cloud.description}</p>
                                    </>
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
`

const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    margin: auto;
`

const SearchInput = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 20px;

    input {
        height: 40px;
        width: 100%;
        border: solid 2px #000;
        border-radius: 10px;
        outline: none;
        padding: 0 10px;
        font-size: 15px;
        margin: 10px auto;
    }
`

const WeatherResult = styled.div`
    width: 100%;
    height: auto;
    border: solid 1px #000;
    margin: 50px auto;
    border-radius: 4px;
    box-shadow: -5px 2px 5px 3px rgba(0, 0, 0, 0.3);
    text-align: center;
    background-image: url('https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-blue-arc-weather-background-image_253195.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
`

const Content = styled.div`
    width: 100%;
    height: auto;
    margin: 100px auto;

    h4 {
        font-size: 30px;
    }

    h3 {
        font-size: 40px;
        margin-top: 50px;
    }
`

const MinMax = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

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
