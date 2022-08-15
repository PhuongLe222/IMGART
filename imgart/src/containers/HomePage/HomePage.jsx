import React from "react";
import styled from "styled-components/macro";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { Button } from "../../components/Button";

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
export const HomePage = () => {
  return (
    <HomePageStyle>
      <Header></Header>
      <Intro></Intro>
      <div className="content-container-1">
        <div className="content-title">SUPER HOT</div>
        <div className="select-btn-list">
          <Button Width={90} Height={39}>
            Music
          </Button>
          <Button Width={92} Height={39} Background={"#FFE4B5"}>
            Art
          </Button>
          <Button Width={90} Height={39}>
            Sport
          </Button>
          <Button Width={152} Height={39}>
            Photography
          </Button>
          <Button Width={200} Height={39}>
            Virtual Reality
          </Button>
          <Button Width={119} Height={39}>
            Videos
          </Button>
          <Button Width={119} Height={39}>
            ...
          </Button>
        </div>
      </div>

      <div class="page-btn-group">
        <div class="page-btn-item">
          <i class="fa-solid fa-angles-left"></i>
        </div>
        <div class="page-btn-item">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="page-btn-item">
          <span>1</span>
        </div>
        <div class="page-btn-item active">
          <span>2</span>
        </div>
        <div class="page-btn-item">
          <span>3</span>
        </div>
        <div class="page-btn-item">
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div class="page-btn-item">
          <i class="fa-solid fa-angles-right"></i>
        </div>
      </div>
    </HomePageStyle>
  );
};
