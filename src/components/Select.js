import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CustomInput from "./CustomInp";


function Select ({handleSelectTip}) {
  return (
    <SelectSection>
      <SelectTitle>Select Tip %</SelectTitle>
      <SelectOptions>
        <Button text="5%" handleSelectTip={handleSelectTip}></Button>
        <Button text="10%" handleSelectTip={handleSelectTip}></Button>
        <Button text="15%" handleSelectTip={handleSelectTip}></Button>
        <Button text="25%" handleSelectTip={handleSelectTip}></Button>
        <Button text="50%" handleSelectTip={handleSelectTip}></Button>
        <CustomInput placeholder="Custom" />
      </SelectOptions>
    </SelectSection>
  );
}

export default Select;

const SelectSection = styled.div`
  padding-top: 32px;
`;

const SelectTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
`;

const SelectOptions = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 17px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

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

const secondary = {
  color: "#547878",
  bkg: "#F3F9FA",
};
