import styled from "styled-components/macro";

const HeaderStyle = styled.div`
  .nav {
  }
  .nav li {
    display: inline-block;
    font-size: 26px;
    font-family: "Sniglet";
    font-style: normal;
    line-height: 35px;
    font-weight: 400;
    color: #e5e5e5;
    padding: 25px;
  }
  .main-header {
    position: absolute;
    width: 100%;
    height: 140px;
    left: 0px;
    top: -5px;
    background: #406ca1;
  }
  a {
    text-decoration: none;
    color: #e5e5e5;
    font-family: "Sniglet";
    font-style: normal;
  }
  .logo {
    position: absolute;
    width: 175px;
    height: 154px;
    left: 60px;
    top: -2px;
  }
  .search-input {
    width: 380px;
    height: 40px;
    border: 1px solid #002b5b;
    border-radius: 3px;
    background-color: transparent;
    background: url("search-icon.svg") no-repeat left;
    background-size: 15px;
    background-position: 350px 12px;
    margin-left: 13%;
  }

  .search-input::placeholder {
    padding-left: 7px;
    color: #e5e5e5;
  }

  .btn {
    color: #cc5252;
    background: #f9e7de;
    border-radius: 5px;
    width: 114px;
    height: 42px;
    border: none;
    margin-left: 12%;
  }
  ul {
    margin-left: 14%;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <header class="main-header">
        <ul className="nav">
          <li>
            <img class="logo" src="Logo.png" alt="Logo store"></img>
          </li>
          <li>
            <a href="#create_NFT">Create NFT</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <input className="search-input" placeholder="Search"></input>
          <button className="btn">Connect</button>
        </ul>
      </header>
    </HeaderStyle>
  );
};
