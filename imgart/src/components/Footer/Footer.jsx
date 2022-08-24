import styled from "styled-components/macro";

const Footerstyle = styled.div`
  .main-footer {
    background-color: #406ca1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 160px;
    padding-top: 55px;
  }
  @media only screen and (max-width: 992px) {
    .main-footer {
      display: block;
    }
  }
  @media only screen and (max-width: 992px) {
    .main-footer-item {
      align-items: center !important;
    }
  }
  .main-footer-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 7px;
    align-items: center;
  }
  .title-footer {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 31.5219px;
    line-height: 40px;
    color: #f3b95f;
  }
  .desc-footer {
    font-weight: 500;
    font-size: 12.0083px;
    line-height: 15px;
    color: #ffffff;
    margin-top: 9px;
    margin-bottom: 27px;
  }
  .logo-social-network {
    display: flex;
    gap: 16px;
    width: 2vw;
  }
  .logo-social-network img {
    width: 2vw;
  }
  .policy-title {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 15.0104px;
    line-height: 19px;
    color: #ffffff;
  }
  .main-footer-item span {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 12.0083px;
    line-height: 15px;
    color: #ffffff;
  }
  .extra-footer-item {
    font-family: "Space Grotesk";
    font-style: normal;
    margin-top: 39px;
    font-size: 10.5073px;
    line-height: 13px;
    color: #f9e7de;
    margin-bottom: 90px;
  }
`;

export const Footer = () => {
  return (
    <Footerstyle style={{ width: "100%" }}>
      <footer>
        <div className="main-footer">
          <div className="main-footer-item" style={{ alignItems: "unset" }}>
            <div className="title-footer">ImgartStore</div>
            <div className="desc-footer">
              Amazing NFTs marketplace, Authentic and unique digital creation.
            </div>
            <div className="logo-social-network">
              <a href="https://www.facebook.com/thutrang.5631">
                <img src="Ellipse 18.svg" alt="logo-facebook" />
              </a>
              <a href="https://github.com/PhuongLe222/IMGART">
                <img src="logogit.png" alt="logo-git" />
              </a>
              <a href="https://mail.google.com/">
                <img src="logogmail.png" alt="logo-gmail" />
              </a>
            </div>
            <div className="extra-footer-item">
              Copyright 2022 ImgartStore, All right reserved.
            </div>
          </div>
          <div className="main-footer-item">
            <div className="policy-title">Marketplace</div>
            <span>Explore</span>
            <span>NFTs</span>
            <span>Collectibles</span>
            <span>Virtual Reality</span>
            <div className="extra-footer-item" style={{ visibility: "hidden" }}>
              .
            </div>
          </div>
          <div className="main-footer-item">
            <div className="policy-title">Resources</div>
            <span>Help Center</span>
            <span>Partners</span>
            <span>Blog</span>
            <span>Newsletter</span>
            <div className="extra-footer-item">Privacy Policy</div>
          </div>
          <div className="main-footer-item">
            <div className="policy-title">Company</div>
            <span>About Us</span>
            <span>Careers</span>
            <span>Support</span>
            <span>Newsletter</span>
            <div className="extra-footer-item">Terms & Conditions</div>
          </div>
        </div>
      </footer>
    </Footerstyle>
  );
};
