import React from "react";
import styled from "styled-components";
import { PrimaryLayout } from "../components/Layout";

const aboutUsStyled = styled.div`
  .left {
    background-color: blue;
  }
  .img-us {
    width: 40vw;
    height: 40vw;
  }
`;

const aboutUs = () => {
  return (
    <PrimaryLayout>
      <aboutUsStyled>
        <div className="container">
          <div className="left">
            <img className="img-us" src="aboutus.jpg"></img>
          </div>
        </div>
      </aboutUsStyled>
    </PrimaryLayout>
  );
};

export default aboutUs;
