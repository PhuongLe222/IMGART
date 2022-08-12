import React from "react";
import styled from "styled-components/macro";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";

const HomePageStyle = styled.div`
  .left,
  .right {
    height: 400px;
  }

  .left {
    float: left;
    width: 50%;
  }

  .right {
    float: right;
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    .left,
    .right {
      float: none;
      width: 100%;
    }
  }
`;
const HomePage = () => {
  return (
    <HomePageStyle>
      <Header></Header>
      <Intro></Intro>
    </HomePageStyle>
  );
};

export default HomePage;
