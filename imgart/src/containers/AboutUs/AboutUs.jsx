import React from "react";
import { PrimaryLayout } from "../../components/Layout";
import "../AboutUs/AboutUs.css";
import aboutus from "../../asset/aboutus.jpg";

const AboutUs = () => {
  return (
    <PrimaryLayout>
      <div>
        <img className="img-logo" src="logo.png" alt="logo"></img>
        <div className="container-us">
          <div className="left-us">
            <div className="content">
              <div className="title-us">ABOUT US</div>
              <hr className="hr-line-us"></hr>
              <div className="content-member">
                IMGART store was established with 4 members:
                <li>Lê Thị Kim Phượng</li>
                <li>Lê Thị Thu Trang</li>
                <li>Trần Gia Trân</li>
                <li>Ngô Anh Thư</li>
              </div>
              <div className="logo-contact">
                <a href="https://www.facebook.com/thutrang.5631">
                  <img src="Ellipse 18.svg" alt="fb"></img>
                </a>
                <a href="https://github.com/PhuongLe222">
                  <img src="logogit.png" alt="github"></img>
                </a>
                <a href="https://mail.google.com/">
                  <img src="logogmail.png" alt="gmail"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="right-us">
            <img className="img-us" src={aboutus} alt="us"></img>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default AboutUs;
