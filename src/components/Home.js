import React, { useState, useEffect, useTransition } from "react";
import styled from "styled-components";
import Main from "./Main";
import MoreInfo from "./MoreInfo";

function Home() {
  const [isPending, startTransition] = useTransition();
  const [city, setCity] = useState("Kathmandu");
  const [searchResult, setSearchResult] = useState("");

  const onInputChange = (e) => {
    startTransition(() => {
      setCity(e.target.value);
    });
  };

  useEffect(() => {
    const fetchApi = async () => {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=909f316fd27d1e1d18b99d8dbea246c6`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setSearchResult(result);
    };
    fetchApi();
  }, [city]);

  return (
    <Container>
      <Main
        onChange={onInputChange}
        searchResult={searchResult}
        city={city}
        loading={isPending}
      />
      <MoreInfo />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: auto;
`;
