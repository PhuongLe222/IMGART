import styled from "styled-components/macro";

const HeaderStyle = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-header {
    position: absolute;
    width: 100%;
    height: 150px;
    left: 0px;
    top: -5px;
    background: #406ca1;
  }
  .header-logo {
    position: absolute;
    width: 175px;
    height: 154px;
    left: 60px;
    top: -2px;
  }
  .header-list {
    display: flex;
    list-style: none;
    gap: 50px;
    margin-left: 10%;
  }
  .header-list-item {
    color: #e5e5e5;
    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
    font-size: 26px;
    line-height: 35px;
  }
  .header-list-item:hover {
    color: #f2b962;
    cursor: pointer;
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

  .connect-btn {
    color: #cc5252;
    background: #f9e7de;
    border-radius: 5px;
    width: 114px;
    height: 42px;
    border: none;
    margin-left: 12%;
  }
  .connect-btn:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <header class="main-header">
        <img class="header-logo" src="Logo.png" alt="Logo store"></img>
        <ul class="header-list">
          <li class="header-list-item">Create NFT</li>
          <li class="header-list-item">About us </li>
        </ul>
        <input className="search-input" placeholder="Search"></input>
        <button className="connect-btn">Connect</button>
      </header>
    </HeaderStyle>
  );
};
