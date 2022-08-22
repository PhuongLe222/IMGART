import React, { useState } from "react";
import styled from "styled-components";
import "./HomePage.css";
import { Button } from "../../components/Button";
import { NFT } from "../../components/NFT/NFT";
import { PrimaryLayout } from "../../components/Layout/Layout";
import "./dataNFT";

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

let NFTitem = [
  {
    link: "product-detail",
    src: "NFT1.png",
    name: "Doodle",
    avt: "avt.png",
    author: "0x60...9B38",
    price: "8.0",
  },
  {
    link: "product-detail",
    src: "NFT1.png",
    name: "Doodle",
    avt: "avt.png",
    author: "0x60...9B38",
    price: "8.0",
  },
  {
    link: "product-detail",
    src: "NFT1.png",
    name: "Doodle",
    avt: "avt.png",
    author: "0x60...9B38",
    price: "8.0",
  },
  {
    link: "product-detail",
    src: "NFT1.png",
    name: "Doodle",
    avt: "avt.png",
    author: "0x60...9B38",
    price: "8.0",
  },
  {
    link: "product-detail",
    src: "NFT1.png",
    name: "Doodle",
    avt: "avt.png",
    author: "0x60...9B38",
    price: "8.0",
  },
  {
    link: "product-detail",
    src: "NFT1.png",
    name: "Doodle",
    avt: "avt.png",
    author: "0x60...9B38",
    price: "8.0",
  },
];
const NFT_ART = () => {
  return (
    <div>
      <div className="NFT-group">
        {/* <NFT
          link={"product-detail"}
          src={"NFT1.png"}
          name={"Doodle"}
          avt={"avt.png"}
          author={"0x60...9B38"}
          price={"8.0"}
        ></NFT>
        <NFT
          link={"product-detail"}
          src={"NFT2.png"}
          name={"Small Bro"}
          avt={"avt.png"}
          author={"0x27...2cbC"}
          price={"0.049"}
        ></NFT>
        <NFT
          link={"product-detail"}
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
        <NFT
          link={"product-detail"}
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
        <NFT
          link={"product-detail"}
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT>
        <NFT
          link={"product-detail"}
          src={"image.png"}
          name={"Crazy Apes"}
          avt={"avt.png"}
          author={"hx45...250e"}
          price={"3.90"}
        ></NFT> */}
        {NFTitem.map((item) => (
          <NFT
            link={item.src}
            src={item.src}
            name={item.name}
            avt={item.avt}
            author={item.author}
            price={item.price}
          ></NFT>
        ))}
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
    </div>
  );
};

const SuperHot = () => {
  const [tab, setTab] = useState("art");
  // console.log(tab);
  return (
    <div>
      <div className="content-container-1">
        <div className="content-title">SUPER HOT</div>
        <div className="select-btn-list">
          <Button
            Width={80}
            Height={39}
            bgColor={tab === "music" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("music");
            }}
          >
            Music
          </Button>
          <Button
            Width={80}
            Height={39}
            bgColor={tab === "art" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("art");
            }}
          >
            Art
          </Button>
          <Button
            Width={80}
            Height={39}
            bgColor={tab === "sport" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("sport");
            }}
          >
            Sport
          </Button>
          <Button
            Width={100}
            Height={39}
            bgColor={tab === "photography" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("photography");
            }}
          >
            Photography
          </Button>
          <Button
            Width={110}
            Height={39}
            bgColor={tab === "virtual reality" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("virtual reality");
            }}
          >
            Virtual Reality
          </Button>
          <Button
            Width={80}
            Height={39}
            bgColor={tab === "videos" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("videos");
            }}
          >
            Videos
          </Button>
          <Button
            Width={80}
            Height={39}
            bgColor={tab === "more" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("more");
            }}
          >
            ...
          </Button>
        </div>
      </div>
      {tab === "art" ? <NFT_ART></NFT_ART> : <div></div>}
    </div>
  );
};

export const HomePage = () => {
  return (
    <PrimaryLayout>
      <HomePageStyle>
        <div className="content-container">
          <div className="contain-info">
            <div className="contain-title">
              Discover, Sell & Collect Rare NFTs
            </div>
            <div className="contain-des">
              Digital marketplace for crypto collections and non-fungible tokens
              (NFTs)
            </div>
          </div>
          <div className="contain-image"></div>
        </div>
        <div className="logo-group">
          <img src="icon.svg" alt="Logo of Icon"></img>
          <img src="devera-logo.png" alt="Logo of Devera"></img>
          <img height="120" src="lecle.png" alt="Logo of Lecle"></img>
        </div>
        <SuperHot></SuperHot>
      </HomePageStyle>
    </PrimaryLayout>
  );
};
