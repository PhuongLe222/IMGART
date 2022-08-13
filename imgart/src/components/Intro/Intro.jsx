import styled from "styled-components/macro";

const IntroStyle = styled.div`
  .contain-left,
  .contain-right {
  }

  .contain-left {
    float: left;
    width: 50%;
    margin-top: 10%;
  }

  .contain-right {
    float: right;
    width: 40%;
    margin-top: 10%;
  }
  @media only screen and (max-width: 768px) {
    .contain-left,
    .contain-right {
      float: none;
      width: 100%;
    }
  }
  .contain-title-left {
    position: absolute;
    width: 600px;
    height: 329px;
    left: 208px;
    top: 179px;

    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 120px;
    color: white;
  }

  .contain-des-left {
    position: absolute;
    width: 720px;
    height: 90px;
    left: 213px;
    top: 545px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #e5e5e5;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 1000%;
  }

  .logo-group {
    width: 1005px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 35px;
    margin-left: 30%;
    margin-top: 76px;
    margin-bottom: 73px;
  }
`;

export const Intro = () => {
  return (
    <IntroStyle>
      <div>
        <div className="contain-left">
          <div className="contain-title-left">
            Discover, Sell & Collect Rare NFTs
          </div>
          <div className="contain-des-left">
            Digital marketplace for crypto collections and non-fungible tokens
            (NFTs)
          </div>
        </div>
        <div className="contain-right">
          <img src="devera.png" alt="Logo of introduction"></img>
        </div>
      </div>
      <div className="logo-group">
        <img src="icon.svg" alt="Logo of Icon"></img>
        <img src="devera-logo.png" alt="Logo of Devera"></img>
        <img height="120" src="lecle.png" alt="Logo of Lecle"></img>
      </div>
    </IntroStyle>
  );
};
