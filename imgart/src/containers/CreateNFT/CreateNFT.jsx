import React from "react";
import { FiFolder } from "react-icons/fi";
import {useState} from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { Button } from "../../components/Button";
import "./CreateNFT.css";
const CreateNFT = () => {
    // const userState = useSelector((state) => state.userInfo); // lấy data từ store ra sài
   
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  

  const LoadImg = () => {
    document.getElementById("imageUploadInput").click();
  }
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false); 
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  };

 

    return (
        <div className="CreateNFT">
            
            <span className="Title">Create NFT</span>
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
        <form onSubmit={handleSubmit}>
          <Field name="productImg">
            {({ input, meta }) => (
                <div class="container imageUploadContainer">
                <div className="imgFrame">
                  {isSelected ? (
                    <img src={URL.createObjectURL(selectedFile)} alt="upload img" className="imagePreview"></img>
                    
                  ) : (
                    <img 
                          src="logo512.png" 
                          alt="Ảnh xem trước" 
                          className="imagePreview">
                      </img>
                  )}
                 </div>
                <div class="imageUpload">
                  <input type="file" id="imageUploadInput" accept=".jpg,.png" onChange={changeHandler}></input>
                  <span class="button" id="imageUploadInputBtn" onClick={LoadImg}> 
                    <FiFolder style={{verticalAlign: "top", marginRight: "10px"}}/>
                    Upload
                  </span>                   
                </div>
                <div id="uploadFileStatus"></div>
          </div>
              )}
            
          </Field>
          <Field name="productName">
            {({ input, meta }) => (
              <div>
                <label className="tLabel">Name</label>
                <input {...input} type="text" placeholder="Name" />
                {meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="productPrice">
            {({ input, meta }) => (
              <div>
                <label className="tLabel">Price</label>
                <input {...input} type="number" placeholder="Price" />
                {meta.error && meta.touched && <span className="error">{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <Button Width={120} Height={40}>
              Create
            </Button>
          </div>
        </form>
      )}
    />
            
            
        </div>
    );
  };
  
  export default CreateNFT;