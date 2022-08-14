import React from "react";
import { useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { Button } from "../../components/Button";
import "./CreateNFT.css";
const CreateNFT = () => {
    // const userState = useSelector((state) => state.userInfo); // lấy data từ store ra sài
    const onSubmit = () => {

    }
    const validate = () => {

    }
    return (
        <div className="CreateNFT">
            
            <span className="Title">Create NFT</span>
            <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          {/* <Field name="firstName" component="input" placeholder="First Name" /> */}
          <input type="text" placeholder="Name" />
        </div>
       
        

        <button type="submit">Submit</button>
      </form>
    )}
  />
            
            
        </div>
    );
  };
  
  export default CreateNFT;