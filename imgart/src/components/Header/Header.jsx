import styled from "styled-components/macro";
import { Button } from "../Button";
import { Link } from "react-router-dom";

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
    height: auto; /* 102.23px */
    left: 0%;
    top: -0.32vw; /* -5px */
    background: #406ca1;
  }
  .header-logo {
    position: absolute;
    width: 10vw; /* 145.83px */
    height: 19vh; /* 137.56px */
    left: 4%; /* 37.58px */
    top: -7%; /* -15.03px */
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
    width: 25vw; /* 419.54px */
    height: 5vh; /* 41.34px */
    border: 0.065vw solid #002b5b; /* 1px */
    border-radius: 3px; /* 3px */
    background-color: transparent;
    background: url("search-icon.svg") no-repeat left;
    background-size: 3%; /* 17px */
    background-position: 97% 50%; /* 400px 12px */
    margin-left: 6%;
  }
  .search-input::placeholder {
    padding-left: 0.45vw; /* 7px */
    color: #e5e5e5;
    font-size: 0.8vw;
  }
  a {
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <header className="main-header">
        <img className="header-logo" src="Logo.png" alt="Logo store"></img>
        <ul className="header-list">
          <Link to="/create-NFT">
            <li className="header-list-item">Create NFT</li>
          </Link>
          <li className="header-list-item">About us </li>
        </ul>
        <input className="search-input" placeholder="Search"></input>
        <Button Width={114} Height={42}>
          Connect
        </Button>
      </header>
    </HeaderStyle>
  );
};
