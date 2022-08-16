import React from "react";

import "./HomePage.css";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro/Intro";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { NFT } from "../../components/NFT/NFT";

export const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <div className="content-container-1">
        <div className="content-title">SUPER HOT</div>
        <div className="select-btn-list">
          <Button Width={80} Height={39} margin={20}>
            Music
          </Button>
          <Button Width={70} Height={39} margin={20} bgColor={"#FFE4B5"}>
            Art
          </Button>
          <Button Width={80} Height={39} margin={20}>
            Sport
          </Button>
          <Button Width={125} Height={39} margin={20}>
            Photography
          </Button>
          <Button Width={145} Height={39} margin={20}>
            Virtual Reality
          </Button>
          <Button Width={80} Height={39} margin={20}>
            Videos
          </Button>
          <Button Width={80} Height={39} margin={20}>
            ...
          </Button>
        </div>
      </div>
      <div className="NFT-group">
        <NFT
          src={"NFT1.png"}
          name={"Doodle"}
          avt={"avt.png"}
          author={"0x60...9B38"}
          price={"8.0"}
        ></NFT>
        <NFT
          src={"NFT2.png"}
          name={"Small Bro"}
          avt={"avt.png"}
          author={"0x27...2cbC"}
          price={"0.049"}
        ></NFT>
        <NFT
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
        <NFT
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
        <NFT
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
        <NFT
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
      </div>
      <div className="page-btn-group">
        <div className="page-btn-item">
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div className="page-btn-item">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="page-btn-item">
          <span>1</span>
        </div>
        <div className="page-btn-item active">
          <span>2</span>
        </div>
        <div className="page-btn-item">
          <span>3</span>
        </div>
        <div className="page-btn-item">
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="page-btn-item">
          <i className="fa-solid fa-angles-right"></i>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
