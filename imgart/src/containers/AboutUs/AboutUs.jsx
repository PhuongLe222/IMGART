import React from "react";
import { PrimaryLayout } from "../../components/Layout";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
  return (
    <PrimaryLayout>
      <div>
        <img className="img-logo" src="logo.png"></img>
        <div className="container">
          <div className="left">
            <div className="content">
              <div className="title">ABOUT US</div>
              <hr className="hr-line"></hr>
              <div className="content-member">
                IMGART store was established with 4 members:
                <li>Lê Thị Kim Phượng</li>
                <li>Lê Thị Thu Trang</li>
                <li>Trần Gia Trân</li>
                <li>Ngô Anh Thư</li>
              </div>
              <div className="logo-contact">
                <a href="https://www.facebook.com/thutrang.5631">
                  <img src="Ellipse 18.svg"></img>
                </a>
                <a href="https://github.com/PhuongLe222">
                  <img src="logogit.png"></img>
                </a>
                <a href="https://mail.google.com/">
                  <img src="logogmail.png"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img className="img-us" src="aboutus.jpg"></img>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default AboutUs;
