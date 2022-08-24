import React, { useState } from "react";
import styled from "styled-components";
import "./HomePage.css";
import { Button } from "../../components/Button";
import { NFT } from "../../components/NFT/NFT";
import { PrimaryLayout } from "../../components/Layout/Layout";
import { hashShortener } from "../../sdk/iconSDK";
import avatar from "../../asset/avt.png";
import NFTpicture from "../../asset/image 4.svg";

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vw;
`;

let NFTitem_Art = [
  {
    link: "productdetails",
    src: NFTpicture,
    name: "Doodle",
    avt: avatar,
    author: hashShortener("hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"),
    price: "8.2",
  },
  {
    link: "productdetails",
    src: NFTpicture,
    name: "Doodle",
    avt: avatar,
    author: hashShortener("hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"),
    price: "8.2",
  },
  {
    link: "productdetails",
    src: NFTpicture,
    name: "Doodle",
    avt: avatar,
    author: hashShortener("hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"),
    price: "8.2",
  },
  {
    link: "productdetails",
    src: NFTpicture,
    name: "Doodle",
    avt: avatar,
    author: hashShortener("hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"),
    price: "8.2",
  },
  {
    link: "productdetails",
    src: NFTpicture,
    name: "Doodle",
    avt: avatar,
    author: "0x60...9B38",
    price: "8.2",
  },
  {
    link: "productdetails",
    src: NFTpicture,
    name: "Doodle",
    avt: avatar,
    author: hashShortener("hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"),
    price: "8.2",
  },
];
const NFT_ART = () => {
  return (
    <div>
      <div className="NFT-group">
        {NFTitem_Art.map((item) => (
          <NFT
            link={item.link}
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
            Width={"80px"}
            Height={"39px"}
            bgColor={tab === "music" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("music");
            }}
          >
            Music
          </Button>
          <Button
            Width={"80px"}
            Height={"39px"}
            bgColor={tab === "art" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("art");
            }}
          >
            Art
          </Button>
          <Button
            Width={"80px"}
            Height={"39px"}
            bgColor={tab === "sport" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("sport");
            }}
          >
            Sport
          </Button>
          <Button
            Width={"100px"}
            Height={"39px"}
            bgColor={tab === "photography" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("photography");
            }}
          >
            Photography
          </Button>
          <Button
            Width={"110px"}
            Height={"39px"}
            bgColor={tab === "virtual reality" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("virtual reality");
            }}
          >
            Virtual Reality
          </Button>
          <Button
            Width={"80px"}
            Height={"39px"}
            bgColor={tab === "videos" ? "#FFE4B5" : "#f9e7de"}
            onClick={() => {
              setTab("videos");
            }}
          >
            Videos
          </Button>
          <Button
            Width={"80px"}
            Height={"39px"}
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
