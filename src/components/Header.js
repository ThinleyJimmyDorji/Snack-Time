import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillFire } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { MdLocalOffer } from "react-icons/md";
import { IconContext } from "react-icons";
function Header() {
  return (
    <IconContext.Provider value={{ color: "#3c096c", size: "1.5em" }}>
      <Nav>
        <LogoWrapper>
          <Logo src="/images/logo.svg" />
        </LogoWrapper>

        <NavMenu>
          <a>
            <AiFillFire />
            <span>Sale</span>
          </a>
          <a>
            <ImSearch />
            <span>Search</span>
          </a>
          <a>
            <MdLocalOffer />
            <span>Offers</span>
          </a>
        </NavMenu>
        <PostContainer>
          <span>Add a Snack</span>
        </PostContainer>
        <Divider></Divider>

        <LoginContainer>
          <span>Login</span>
        </LoginContainer>

        <UserImage src="/images/user.svg" />
      </Nav>
    </IconContext.Provider>
  );
}
const Divider = styled.div`
  width: 1px;
  height: 30px;
  margin-right: 0px 0px;

  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;
const PostContainer = styled.div`
  background-color: rgba(112, 76, 182, 0.1);
  width: 10%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  margin: 0px 10px;
  span {
    font-size: 12px;
    color: rgb(112, 76, 182);
    letter-spacing: 1px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(112, 76, 182, 0.5);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

const Nav = styled.nav`
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  padding: 0 25px;
  overflow-x: hidden;
  width: 100%;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  box-shadow: rgb(0 0 0 /69%) 0px 4px 10px -10px,
    rgb(0 0 0 /73%) 0px 6px 8px -10px;
`;

const LogoWrapper = styled.div`
  max-width: 200px;
  width: 70px;
  height: 70px;
`;
const Logo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;
const LoginContainer = styled(PostContainer)`
  width: 60px;
  &:hover,
  &:focus {
    border-color: transparent;
    background-color: rgb(112, 76, 182);
    span {
      color: white;
    }
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
  /* flex: 1; */
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1; // give priority to the nav menu, expand as far as possible
  margin-left: 12px;
  cursor: pointer; // give it a hand pointer on hover-over
  align-items: center;
  padding: 8px 8px;
  margin-right: 8px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1.42px;
      font-weight: 500;
      position: relative;
      color: rgb(112, 76, 182);

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
