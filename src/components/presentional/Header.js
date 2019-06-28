import styled from "styled-components";
import React from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 4em;
  margin-bottom: 3em;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  box-sizing: border-box;
  border-bottom: #ef692a solid 1px;
`;

const Logo = styled.img`
  height: 3em;
`;

const MenuItem = styled.div`
  padding-top: 2em;
  a {
    text-decoration: none;
    color: #ef692a;
    font-weight: bolder;
  }
`;
export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </div>
      <MenuItem>
        <Link to={"/about"}>About</Link>{" "}
      </MenuItem>
    </HeaderWrapper>
  );
}
