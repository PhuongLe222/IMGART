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
    width: 50%;
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
    width: 420px;
    height: 300px;
    left: 246px;
    top: 181px;

    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 120px;
    color: white;
  }

  .contain-des-left {
    position: absolute;
    width: 500px;
    height: 98px;
    left: 250px;
    top: 530px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
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
    width: 995px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 35px;
    margin-left: 20%;
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
          <img src="devera.png" alt="description"></img>
        </div>
      </div>
      <div class="logo-group">
        <div className="logo_icon">
          <img src="icon.svg" alt="description"></img>
        </div>
        <div className="logo_devera">
          <img src="devera-logo.png" alt="description"></img>
        </div>
        <div className="logo_lecle">
          <img height="120" src="lecle.png" alt="description"></img>
        </div>
      </div>
    </IntroStyle>
  );
};
