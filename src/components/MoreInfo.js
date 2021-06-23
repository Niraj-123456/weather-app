import React from 'react'
import styled from 'styled-components'

function MoreInfo() {
    return (
        <Container>
            <Wrapper>
                Ipsum irure nulla non ad quis consequat minim. Adipisicing in aliqua Lorem do dolore adipisicing amet cupidatat deserunt. Aliquip cillum nostrud incididunt reprehenderit. Dolor ullamco reprehenderit enim anim pariatur esse est labore cupidatat irure voluptate ut officia qui.
            </Wrapper>
        </Container>
    )
}

export default MoreInfo
const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 1px 5px 2px rgba(255, 255, 255, 0.5);
    padding: 20px;
    margin-bottom: 20px;
`
