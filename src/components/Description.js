import React from "react";
import styled from "styled-components";

const DescriptionGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const DescriptionTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 16px;
  line-height: 24px;

  span {
    font-size: 13px;
    color: #7f9d9f;
  }
`;

const DescriptionValue = styled.h2`
  margin: 0;
  color: #26c2ae;
  font-size: 32px;
  line-height: 19px;
  text-align: right;

  @media (min-width: 1024px) {
      font-size: 48px;
  }
`;

const Description = ({title, value}) => (
          <DescriptionGroup>
            <DescriptionTitle>
              {title}
              <br />
              <span>/ person</span>
            </DescriptionTitle>
            <DescriptionValue>{value}</DescriptionValue>
          </DescriptionGroup>
);

export default Description;
