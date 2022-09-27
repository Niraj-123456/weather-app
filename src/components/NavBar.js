import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <Container>
      <Nav>
        <i className="fas fa-cloud"></i>
        <h4>Weather App</h4>
        <i className="fas fa-cloud"></i>
      </Nav>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  width: 100%;
`;

const Nav = styled.div`
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
    margin: 0 15px;
  }

  i {
    font-size: 30px;
  }
`;
