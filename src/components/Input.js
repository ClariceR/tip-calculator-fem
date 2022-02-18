import React from "react";
import styled from "styled-components";

const Input = ({title, icon, valueType, handlerChange}) => {
  

  return (
    <InputSection>
      <InputTitle>{title}</InputTitle>
      <InputField>
        <i>
          <img src={icon}></img>
        </i>
        <input
          placeholder="0"
          value={valueType}
          onChange={handlerChange}
        ></input>
      </InputField>
    </InputSection>
  );
};

export default Input;

const InputSection = styled.div`
  padding-top: 32px;
`;

const InputTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
`;

const InputField = styled.div`
  margin-top: 12px;
  display: grid;

  input {
    background-color: #f3f9fa;
    border: transparent;
    width: 100%;
    height: 48px;
    font-family: inherit;
    font-size: 24px;
    color: #00474b;
    text-align: right;
  }

  i {
    position: absolute;
    align-self: center;
    padding-left: 20px;
  }
`;
