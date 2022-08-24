import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { NFT } from "../../components/NFT/NFT";
import { PrimaryLayout } from "../../components/Layout";
import { transfer } from "../../sdk/iconSDK";
import { hashShortener } from "../../sdk/iconSDK";
import NFTpicture from "../../asset/image 4.svg";
import avatar from "../../asset/avt.png";
import NFTpicture1 from "../../asset/NFTpicture1.png";

const ProductDetailsStyle = styled.div`
  background-color: #8bb6e0;
  .container-1 {
    display: flow-root;
    margin-left: 5vw;
    margin-top: 8vw;
  }
  .container-2 {
    display: flow-root;
    margin-left: 5vw;
    margin-top: 3vw;
  }
  .container-left {
    margin-top: 3vw;
    float: left;
    width: 40%;
  }
  .container-right {
    margin-top: 3vw;
    float: right;
    width: 60%;
  }
  @media only screen and (max-width: 768px) {
    .container-left,
    .container-right {
      float: none;
      width: 100%;
    }
  }
  .image-NFT {
    width: 35vw;
    height: 33vw;
  }
  .product-detail {
    background-color: #c3d3d4;
    width: 50vw;
    height: auto;
    /* height: 33vw; */
  }
  /* @media only screen and (min-width: 1200px) {
    .product-detail {
      height: 33vw;
    }
  } */

  .product-detail p {
    color: #30384d;
    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
  }
  .product-name {
    font-weight: 700;
    line-height: 102px;
    font-size: 6vw;
    margin-left: 15vw;
    display: inline;
    margin-bottom: 30px;
  }
  .product-author {
    font-weight: 400;
    font-size: 3vw;
    line-height: 51px;
    margin-left: 6vw;
  }
  .product-author img {
    padding-left: 10px;
    display: inline;
    vertical-align: middle;
    /* width: 100%; */
    width: 5vw;
    height: auto;
  }
  .price-icon {
    display: inline-block;
    width: 4vw;
    max-width: 47px;
    height: auto;
    margin-left: -30vw;
    vertical-align: inherit;
  }
  .product-price {
    display: block;
    margin-left: 20vw;
    font-weight: 700;
    font-size: 5vw;
    line-height: 65px;
    margin-top: -10px;
    margin-bottom: 30px;
  }
  .btn-buy {
    margin-left: 18vw;
  }
  @media only screen and (max-width: 992px) {
    .btn-watchmore {
      margin-left: 27px;
    }
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
    margin-top: 5vw;
  }
  @media only screen and (max-width: 992px) {
    .gird-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  /* @media only screen and (min-width: 1300px) {
    .gird-container {
      margin-left: 6vw;
    }
  } */
  .btn-watchmore {
    display: block;
    margin-bottom: 34px;
    margin-left: 37vw;
  }
  @media only screen and (max-width: 992px) {
    .btn-watchmore {
      margin-left: 27px;
    }
  }
`;

const ProductDetails = ({ src, name, author, avt, price }) => {
  const sendToken = (price) => {
    const priceImage = document.getElementById("price-img").textContent;
    transfer({
      to: "hx25178aea97711c063d5501820c9713db263e1b12",
      value: priceImage,
    });
  };
  const onSubmit = async (price) => {
    sendToken(price);
  };
  return (
    <PrimaryLayout>
      <ProductDetailsStyle>
        <div className="container-1">
          <div className="container-left">
            <img className="image-NFT" src={src} alt="NFT"></img>
          </div>
          <div className="container-right">
            <div className="product-detail">
              <p className="product-name">{name}</p>
              <p className="product-author">
                Create by <strong>{hashShortener(author)}</strong>
                <img src={avt} alt="avata"></img>
              </p>

              <p className="product-price" style={{ fontFamily: "DM Mono" }}>
                <span value="price" id="price-img">
                  {price}
                </span>{" "}
                ICX{" "}
                <img
                  className="price-icon"
                  src="Ellipse 6.svg"
                  alt="price icon"
                ></img>
              </p>
              <div className="btn-buy">
                <Button
                  Height={"60px"}
                  Width={"13vw"}
                  FSize={"4vw"}
                  FWeight={400}
                  onClick={onSubmit}
                  FontFamily={"Sniglet"}
                  Margin={"1.6vw"}
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
        <div className="container-2">
          <p className="container-tittle">More from this user</p>
          <div className="gird-container">
            {" "}
            <NFT
              src={NFTpicture1}
              name={"Crazy Apes"}
              avt={avatar}
              author={hashShortener(
                "hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"
              )}
              price={"3.90"}
            ></NFT>{" "}
            <NFT
              src={NFTpicture1}
              name={"Crazy Apes"}
              avt={avatar}
              author={hashShortener(
                "hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"
              )}
              price={"3.90"}
            ></NFT>{" "}
            <NFT
              src={NFTpicture1}
              name={"Crazy Apes"}
              avt={avatar}
              author={hashShortener(
                "hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"
              )}
              price={"3.90"}
            ></NFT>{" "}
          </div>
          <div className="btn-watchmore">
            <Button
              Width={"157px"}
              Height={"51px"}
              FSize={"20px"}
              FWeight={700}
              FontFamily={"Sniglet"}
            >
              Watch More
            </Button>
          </div>
        </div>
      </ProductDetailsStyle>
    </PrimaryLayout>
  );
};
export default ProductDetails;
