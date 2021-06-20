import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <NavBar>
                <h4>Weather App</h4>
            </NavBar>
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: auto;
`

const NavBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    h4 {
        text-transform: uppercase;
        font-size: 30px;
        letter-spacing: 1px;
    }
`
