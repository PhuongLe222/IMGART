import styled from "styled-components/macro";
import { Button } from "../Button";
import { useState } from "react";
import { useSelector} from "react-redux";
import { Avatar} from "antd";
import React from 'react';
import { UserOutlined, LogoutOutlined, ShopOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connectWallet, hashShortener, disConnect } from "../../sdk/iconSDK.js";


const HeaderStyle = styled.div`

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.51vw; /* 100px */
  }
  .main-header {
    position: absolute;
    width: 100%;
    height: 6.65vw; /* 102.23px */
    left: 0%;
    top: -0.32vw; /* -5px */
    background: #406ca1;
  }
  .header-logo {
    position: absolute;
    width: 10%; /* 145.83px */
    height: 130%; /* 137.56px */
    left: 2%; /* 37.58px */
    top: -5%; /* -15.03px */
  }
  .header-list {
    display: flex;
    list-style: none;
    gap: 4.93vw; /* 75.8px */
    margin-left: 12%;
  }
  .header-list-item {
    color: #e5e5e5;
    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
    font-weight: 26.04vw; /* 400px */
    font-size: 1.5vw; /* 21.0475px */
    line-height: 1.69vh; /* 26px */
    width: 8vw; /* 80px */
    height: 0.7vh; /* 5.25px */
  }
  .header-list-item:hover {
    color: #f2b962;
    cursor: pointer;
  }
  .search-input {
    width: 20vw; /* 419.54px */
    height: 1.3vw; /* 41.34px */
    border: 0.065vw solid #002b5b; /* 1px */
    border-radius: 3px; /* 3px */
    background-color: transparent;
    background: url("search-icon.svg") no-repeat left;
    background-size: 3%; /* 17px */
    background-position: 97% 50%; /* 400px 12px */
    margin-left: 6%;
    vertical-align: middle;
    padding: 1em 1em;
    outline: none;
    font-sixe: 3vw;
  }
  .search-input::placeholder {
    padding-left: 0.5vw; /* 7px */
    color: #e5e5e5;
    font-size: 0.8vw;
    vertical-align: super;
  }
  #userAvatar {
    background-color: #f9e7de;
    border-radius: 50%;
    color: #cc5252;
    padding: 0.3vw 0.8vw;
  }

  @media screen and (max-width: 1130px) {
    .userAddress {
        display: none;
    }
  }

  .userMenuBar {
    background: #f9e7de;
    color: #cc5252;
    width:185px;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 16px;
    font-weight: 3px;
  }
  tr {
    height: 30px;
    padding: 10px;
    cursor: pointer;
  }
  &:hover {
    background-color: #f3b95f;
  }
  .user {
    cursor: pointer;
  }
`;

export const Header = () => {
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const userState = useSelector((state) => state.userInfo);
  userState.address = localStorage.getItem("address");
  const [isOpen, setIsOpen] = useState(false);
  const onChange = () => {
    if(isOpen === false)
      setIsOpen(true);
    else 
      setIsOpen(false);
  }

  const goHome = () => {
    document.getElementById("Home").click();
  }
  const LogOut = () => {
    disConnect(setAddress);
    userState.address = false;
    goHome();
  }
  const  SignIn = () => {
    connectWallet(setAddress);
    userState.address = true;
  }

  return (
    <HeaderStyle>
      <header className="main-header">
        <Link id="Home" to="/" style={{display:"none"}}>Home</Link>
        <img className="header-logo" src="Logo.png" alt="Logo store" onClick={goHome}></img>
        <ul className="header-list">
          <Link className="header-list-item" to="/create" style={{textDecoration:"none"}}>Create NFT</Link>
          <Link className="header-list-item" to="/about-us" style={{textDecoration:"none"}}>About us </Link>
        </ul>
        <input className="search-input" placeholder="Search" onKeyPress={(event) => {
    if (event.key === "Enter") {
      window.alert("search: " + event.target.value);
      event.target.value = "";
    }
  }}></input>
        {address ? (
          <div onClick={onChange} className="user" style={isOpen?({marginTop: "15vh"}):({marginTop: "0px"})}>   
            <Avatar id="userAvatar" size={60} icon={<UserOutlined />}/>        
            <span className="userAddress" style={{ marginLeft: 10, fontSize: 20, color: "#f3b95f" }}>
              {hashShortener(address)}
            </span>
            {
              isOpen?(
                <table className="userMenuBar">                  
                  <tr><Link to='/' style={{color: "#cc5252", textDecoration: "none"}}><ShopOutlined style={{marginRight: 10}}/>My NFTs</Link></tr>
                  <tr onClick={LogOut}><LogoutOutlined style={{marginRight: 5}}/> Disconnect</tr>
                </table>  
              ):(
                null
              )
            }
          </div> 
          ) : (
          <Button 
            Width={"7em"} 
            Height={"2.2em"} 
            FSize={"1.5vw"} 
            FontFamily={"Sniglet"}
            onClick={SignIn}
          >
            Connect
          </Button>            
          )}
      </header>
    </HeaderStyle>
  );
};