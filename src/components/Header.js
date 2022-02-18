import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const HeaderGroup = styled.div`
  display: grid;
  place-content: center;
`

const HeaderLogo = styled.img`
  margin-top: 50px;
  margin-bottom: 40px;
`

const Header = props => (
  <HeaderGroup>
    <Link to="/">
      <HeaderLogo src="/images/splitter.png" />
    </Link>
  </HeaderGroup>
)


export default Header