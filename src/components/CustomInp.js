import React from "react";
import styled from "styled-components";



const InputField = styled.div`
  input {
    background-color: #f3f9fa;
    border: transparent;
    border-radius: 5px;
    width: 100%;
    height: 48px;
    font-family: inherit;
    font-size: 24px;
    color: #00474b;
    text-align: center;
  }
`;

const CustomInput = (props) => (
  
    <InputField>
      <input placeholder={props.placeholder}></input>
    </InputField>
 
);

export default CustomInput;
