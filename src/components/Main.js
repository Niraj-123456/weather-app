import React from 'react'
import styled from 'styled-components'

function Main(props) {
    return (
        <Container>
            <Wrapper>
                <SearchInput>
                    <label htmlFor="search">Enter Your City Name</label>
                    <input type="text" name="search" id="search" value={props.city} onChange={props.onChange} />
                </SearchInput>
                <WeatherResult>
                    <Background>

                    </Background>
                    <Content>
                        <Temp>
                            {
                                !props.country ? <h1>{props.city}</h1> 
                                : 
                                <City>
                                <i class="fas fa-map-marker-alt"></i>
                                <h1>{props.city}, {props.country.country}</h1>
                                </City>
                            }

                            <h4>{new Date().toLocaleString('en-US', {timeZone: 'Asia/Kathmandu', dateStyle: 'full', timeStyle: 'short'})}</h4>

                            {
                                props.search ? <h2>{props.search.temp} &deg;C</h2> : <h2>City Name Not Found</h2>
                            }
                        </Temp>
                        <MinMax>
                            {
                                props.search ?
                                <> 
                                <p><i className="fas fa-temperature-low"></i> Min. Temp: {props.search.temp_min} &deg;C</p>
                                <p><i className="fas fa-temperature-high"></i> Max. Temp: {props.search.temp_max} &deg;C</p>
                                </>
                            :
                                ''
                            }
                        </MinMax>
                        <SunRiseSet>
                                {
                                    props.country ? 
                                    <>
                                    <p>Sunrise: {new Date(props.country.sunrise).toLocaleString('en-US', {timeStyle: 'short'})}</p>
                                    <p>Sunset: {new Date(props.country.sunset).toLocaleString('en-US', {timeStyle: 'short'})}</p>
                                    </>
                                    :
                                    ''
                                }
                        </SunRiseSet>
                        <Cloud>
                            {
                                props.weather ? props.weather.map((cloud, id) => {
                                    const icon = `http://openweathermap.org/img/w/${cloud.icon}.png`
                                    return (
                                    <CloudContent key={cloud.id}>
                                        <img src={icon} alt="weather-icon" />
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
    width: 100%;
    height: auto;
    margin: 50px auto;
    text-align: center;  
`

const Background = styled.div`
    height: 700px;
    background-image: url('https://st4.depositphotos.com/11221732/27367/i/450/depositphotos_273671996-stock-photo-blue-day-clear-sky-light.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0 1px 5px 2px rgba(255, 255, 255, 0.5);
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
    width: 100%;
    

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

const City = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    i{
        font-size: 50px;
        margin-right: 20px;
    }
`

const MinMax = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

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

const SunRiseSet = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

    p {
        margin: 0 10px;
        font-size: 18px;
    }
`

const Cloud = styled.div`
    margin: 30px auto;
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
