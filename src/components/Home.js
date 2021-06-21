import React from 'react'
import styled from 'styled-components'
import Main from './Main'

function Home() {
    return (
        <Container>
            <Main />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: 100%;
`
