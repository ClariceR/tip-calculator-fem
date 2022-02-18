import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Select from "./Select";
import Result from "./Result";

const Card = ({
  billValue,
  handleBillValueChange,
  numPeople,
  handleNumPeopleChange,
  selectTip,
  handleSelectTip,
}) => (
  <CardBkg>
    <CardGroup>
      <Input
        title="Bill"
        icon={"/images/icon_bill.png"}
        valueType={billValue}
        handlerChange={handleBillValueChange}
      />
      <Select selectTip={selectTip} handleSelectTip={handleSelectTip} />
      <Input
        title="Number of People"
        icon={"/images/icon_people.png"}
        valueType={numPeople}
        handlerChange={handleNumPeopleChange}
      />
    </CardGroup>
    <CardGroup>
      <Result />
    </CardGroup>
  </CardBkg>
)

export default Card;

const CardBkg = styled.div`
  max-width: 900px;
  background: #ffffff;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px 25px 0px 0px;
  padding: 0 32px 32px 32px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    border-radius: 25px;
  }
`

const CardGroup = styled.div``
