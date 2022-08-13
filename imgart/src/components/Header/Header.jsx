import styled from "styled-components/macro";
import { Button } from "../Button";

const HeaderStyle = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
  }
  .main-header {
    position: absolute;
    width: 100%;
    height: 102.23px;
    left: 0px;
    top: -5px;
    background: #406ca1;
  }
  .header-logo {
    position: absolute;
    width: 145.83px;
    height: 137.56px;
    left: 37.58px;
    top: -15.03px;
  }
  .header-list {
    display: flex;
    list-style: none;
    gap: 75.8px;
    margin-left: 12%;
  }
  .header-list-item {
    color: #e5e5e5;
    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 21.0475px;
    line-height: 26px;
  }
  .header-list-item:hover {
    color: #f2b962;
    cursor: pointer;
  }

  .search-input {
    width: 419.54px;
    height: 41.34px;
    border: 1px solid #002b5b;
    border-radius: 3px;
    background-color: transparent;
    background: url("search-icon.svg") no-repeat left;
    background-size: 17px;
    background-position: 400px 12px;
    margin-left: 8%;
  }

  .search-input::placeholder {
    padding-left: 7px;
    color: #e5e5e5;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <header className="main-header">
        <img className="header-logo" src="Logo.png" alt="Logo store"></img>
        <ul className="header-list">
          <li className="header-list-item">Create NFT</li>
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
