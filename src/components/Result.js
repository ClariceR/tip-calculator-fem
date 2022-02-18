import React from "react";
import styled from "styled-components";
import Description from "./Description";

const ResultSection = styled.div`
  padding-top: 32px;
  display: grid;
`;

const ResultCard = styled.div`
  margin-bottom: 32px;
  background: #00474b;
  border-radius: 15px;
  display: grid;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const ResultDetail = styled.div`
  padding-top: 32px;
  width: 281px;
  display: grid;
  gap: 25px;
  justify-self: center;

  @media (min-width: 1024px) {
    width: 333px;
    gap: 52px;
  }
`;

const ResetButton = styled.button`
  border-radius: 5px;
  font-family: inherit;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  border: transparent;
  color: #00474b;
  background: #26c2ae;
  text-transform: uppercase;
  padding: 9px 33px;
  margin: 25px 24px;

  @media (min-width: 1024px) {
    margin-top: 160px;
  }
`;

const Result = (props) => (
  <ResultSection>
    <ResultCard>
      <ResultDetail>
        <Description title="Tip Amount" value="$4.27" />
        <Description title="Total" value="$32.79" />
      </ResultDetail>
      <ResetButton>Reset</ResetButton>
    </ResultCard>
  </ResultSection>
);

export default Result