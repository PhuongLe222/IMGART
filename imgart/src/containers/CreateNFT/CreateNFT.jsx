import React from "react";
import { FiFolder } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { Button } from "../../components/Button";
import { TopCreator } from "../../components/TopCreators";
import { PrimaryLayout } from "../../components/Layout";
import image from "../../asset/image.png";
import "./CreateNFT.css";
import { transfer } from "../../sdk/iconSDK.js";
import NFTpicture2 from "../../asset/image 3.png";
import upload from "../../asset/upload.png";

const CreateNFT = () => {
  let NFTitem = [
    {
      src: NFTpicture2,
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: NFTpicture2,
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: NFTpicture2,
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: NFTpicture2,
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: NFTpicture2,
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
  ];

  const userState = useSelector((state) => state.userInfo); // lấy data từ store ra sài

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sendToken = (price) => {
    transfer({
      to: "hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1",
      value: price,
    });
  };

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(
      "Phí tạo sản phẩm " +
        values.productName +
        " là: " +
        0.2 * values.productPrice
    );
    sendToken(0.2 * values.productPrice);
  };

  const LoadImg = () => {
    document.getElementById("imageUploadInput").click();
  };
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [isChangeCreate, setIsChangeCreate] = useState(false);
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  };

  const changeCreateBlock = () => {
    if (userState.address) {
      setIsChangeCreate(true);
    } else {
      window.alert("You must be connected to your wallet before");
    }
    window.scrollTo(0, 0);
  };
  return (
    <PrimaryLayout>
      <div className="container">
        <div
          className="left"
          style={
            isChangeCreate || userState.address
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <p className="title">Create & Sell Your NFTs</p>
          <div className="upload">
            <img className="picture" src={upload} alt="UploadPicture" />
            <p className="textUpload">Upload</p>
            <div className="framedes">
              <p className="desUpload">
                {" "}
                Upload your work, customize your NFTs with properties, stats,
                and unlockable content.
              </p>
            </div>
          </div>
          <div className="btn-connect">
            <Button
              Height={"61px"}
              Width={"260px"}
              FSize={"25px"}
              FontFamily={"Sniglet"}
              FWeight={400}
              onClick={changeCreateBlock}
            >
              Create my NFT
            </Button>
          </div>
        </div>
        <div
          className="CreateNewNFT"
          style={
            isChangeCreate || userState.address
              ? { display: "inline-block" }
              : { display: "none" }
          }
        >
          <h1 className="NewTitle">Create NFT</h1>
          <Form
            onSubmit={onSubmit}
            validate={(values) => {
              const errors = {};
              if (!values.productName) {
                errors.productName = "*Required";
              }
              if (!values.productPrice) {
                errors.productPrice = "*Required";
              }
              if (values.productPrice < 0) {
                errors.productPrice = "Price must be greater than 0";
              }
              return errors;
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className="CreateNFT-Form" onSubmit={handleSubmit}>
                <Field name="productImg">
                  {({ input, meta }) => (
                    <div class="imageUploadContainer">
                      <div className="imgFrame">
                        {isSelected ? (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="upload img"
                            className="imagePreview"
                          ></img>
                        ) : (
                          <img
                            src={image}
                            alt="Ảnh xem trước"
                            className="imagePreview"
                          ></img>
                        )}
                      </div>
                      <div className="imgUpload">
                        <input
                          className="form-input"
                          type="file"
                          id="imageUploadInput"
                          accept=".jpg,.png"
                          onChange={changeHandler}
                        ></input>
                        <span id="imageUploadInputBtn" onClick={LoadImg}>
                          <FiFolder
                            className="folder-icon"
                            style={{
                              verticalAlign: "top",
                              marginRight: "10px",
                            }}
                          />
                          Update
                        </span>
                      </div>
                    </div>
                  )}
                </Field>
                <Field name="productName">
                  {({ input, meta }) => (
                    <div>
                      <label className="tLabel">Name</label>
                      <input
                        {...input}
                        className="form-input"
                        type="text"
                        placeholder="Name"
                      />
                      {meta.error && meta.touched && (
                        <span className="error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="productPrice">
                  {({ input, meta }) => (
                    <div>
                      <label className="tLabel">Price</label>
                      <input
                        {...input}
                        className="form-input"
                        type="number"
                        placeholder="Price"
                      />
                      {meta.error && meta.touched && (
                        <span className="error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <div className="buttons">
                  <Button
                    Width={"12vw"}
                    Height={"5vw"}
                    FSize={"1.8vw"}
                    Margin={"2% 23%"}
                    FontFamily={"Sniglet"}
                  >
                    Create
                  </Button>
                </div>
              </form>
            )}
          />
        </div>
        <div className="right">
          <p className="title-TopCreators">Top Creators of the week</p>
          <ul className="list-TopCreators">
            {NFTitem.map((item) => (
              <li>
                <TopCreator
                  src={item.src}
                  author={item.author}
                  price={item.price}
                ></TopCreator>
              </li>
            ))}
          </ul>
          <div className="btn-watchMore">
            <Button
              Height={"61px"}
              Width={"240px"}
              FSize={"25px"}
              FontFamily={"Sniglet"}
              Margin={"2vw auto"}
            >
              Watch More
            </Button>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default CreateNFT;
