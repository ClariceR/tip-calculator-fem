import React from "react";
import styled from "styled-components";

const Button = ({ text, selectTip, handleSelectTip }) => (
  <SelectButton onClick={handleSelectTip}>{text}</SelectButton>
);

export default Button;

const SelectButton = styled.button`
  border-radius: 5px;
  padding: 6px 16px;
  font-family: inherit;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  border: transparent;

  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.bkg};
`;

SelectButton.defaultProps = {
  theme: {
    color: "white",
    bkg: "#00474b",
  },
};
