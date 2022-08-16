import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { NFT } from "../../components/NFT/NFT";
import { Footer } from "../../components/Footer";

const ProductDetailsStyle = styled.div`
  background-color: #8bb6e0;
  .container {
    display: flow-root;
    margin-left: 80px;
  }
  .container-left {
    margin-top: 38px;
    float: left;
    width: 40%;
  }
  .container-right {
    margin-top: 38px;
    float: right;
    width: 60%;
  }
  @media only screen and (max-width: 992px) {
    .container-left,
    .container-right {
      float: none;
      width: 100%;
    }
  }
  .image-NFT {
    width: 430px;
    height: 440px;
  }
  .product-detail {
    background-color: #c3d3d4;
    margin-right: 80px;
    height: 440px;
    width: 650px;
  }
  .product-detail p {
    color: #30384d;
    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
  }
  .product-name {
    font-weight: 700;
    line-height: 102px;
    font-size: 80px;
    margin-left: 100px;
    display: inline;
    margin-bottom: 30px;
  }
  .product-author {
    font-weight: 400;
    font-size: 40px;
    line-height: 51px;
    margin-left: 90px;
    margin-bottom: 30px;
  }
  .product-author img {
    padding-left: 10px;
    display: inline;
    vertical-align: middle;
    width: 100%;
    max-width: 88px;
    height: auto;
  }
  .price-icon {
    display: inline-block;
    width: 100%;
    max-width: 47px;
    height: auto;
    margin-left: -280px;
    vertical-align: sub;
  }
  .product-price {
    display: block;
    margin-left: 260px;
    font-weight: 700;
    font-size: 50px;
    line-height: 65px;
    margin-top: -10px;
    margin-bottom: 30px;
  }
  .btn-buy {
    margin-left: 240px;
  }
  .hr-line {
    border: 1px solid rgba(92, 82, 82, 0.21);
    transform: rotate(0.24deg);
    margin: 43px 0px 0px 0px;
  }
  .container-tittle {
    margin: 16px 0px 0px 0px;
    font-family: "Sniglet";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 62px;
    color: #ffffff;
  }
  .gird-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;
    margin: 27px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 992px) {
    .gird-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .btn-watchmore {
    display: block;
    margin-bottom: 34px;
    margin-left: 500px;
  }
  @media only screen and (max-width: 992px) {
    .btn-watchmore {
      margin-left: 27px;
    }
  }
`;

const ProductDetails = ({ src, name, author, avt, price }) => {
  return (
    <ProductDetailsStyle>
      <div className="container">
        <div className="container-left">
          <img className="image-NFT" src={src} alt="NFT"></img>
        </div>
        <div className="container-right">
          <div className="product-detail">
            <p className="product-name">{name}</p>
            <p className="product-author">
              Create by <strong>{author}</strong>
              <img src={avt} alt="avata"></img>
            </p>

            <p className="product-price">
              {price} ICX{" "}
              <img
                className="price-icon"
                src="Ellipse 6.svg"
                alt="price icon"
              ></img>
            </p>
            <div className="btn-buy">
              <Button
                Height={67}
                Width={186}
                fontWeight={400}
                fontSize={40}
                lineHeight={50}
              >
                BUY
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="hr-line"></hr>
      </div>
      <div className="container">
        <p className="container-tittle">More from this user</p>
        <div className="gird-container">
          {" "}
          <NFT
            src={"image.png"}
            name={"Crazy Apes"}
            avt={"avt.png"}
            author={"hx45...250e"}
            price={"3.90"}
          ></NFT>{" "}
          <NFT
            src={"image.png"}
            name={"Crazy Apes"}
            avt={"avt.png"}
            author={"hx45...250e"}
            price={"3.90"}
          ></NFT>{" "}
          <NFT
            src={"image.png"}
            name={"Crazy Apes"}
            avt={"avt.png"}
            author={"hx45...250e"}
            price={"3.90"}
          ></NFT>{" "}
        </div>
        <div className="btn-watchmore">
          <Button
            Width={157}
            Height={51}
            fontSize={20}
            fontWeight={700}
            lineHeight={30}
          >
            Watch More
          </Button>
        </div>
      </div>
      <Footer />
    </ProductDetailsStyle>
  );
};
export default ProductDetails;
