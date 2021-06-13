import React, { useEffect } from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>Sale</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>Offers</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>Originals</span>
        </a>
      </NavMenu>
      <LoginContainer>
        <Login>Login</Login>
      </LoginContainer>

      <UserImage src="/images/user.svg" />
    </Nav>
  );
}

const Nav = styled.nav`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 25px;
  overflow-x: hidden;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  box-shadow: rgb(0 0 0 /69%) 0px 4px 10px -10px,
    rgb(0 0 0 /73%) 0px 6px 8px -10px;
`;
const Logo = styled.img`
  width: 80px;
`;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 8px;
  height: 30px;
  /* flex: 1; */
`;
const Login = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
  padding: 8px 8px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 250ms;
  font-weight: 600;

  &:hover {
    background-color: #06f;
    color: white;
    border-color: transparent;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1; // give priority to the nav menu, expand as far as possible
  margin-left: 12px;
  cursor: pointer; // give it a hand pointer on hover-over
  align-items: center;
  padding: 0px 16px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      font-weight: 500;
      position: relative;

      &:after {
        // make a dark bottom line show up (creates a small div)
        content: "";
        background-color: rgba(0, 0, 0, 0.6);
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      color: rgba(0, 0, 0, 0.8);
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImage = styled.img`
  width: 35px;
  height: 35 px;
  border-radius: 50%;
  cursor: pointer;
`;

export default Header;
