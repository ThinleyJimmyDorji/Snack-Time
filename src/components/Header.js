import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillFire } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { MdLocalOffer } from "react-icons/md";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//material UI
import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
//firebase
import { auth, provider } from "../firebase";
//from redux store
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../redux/userSlice";
import { selectCartSnacks } from "../redux/orderSlice";
function Header() {
  const items = useSelector(selectCartSnacks);
  console.log(items);
  const StyledBadge = withStyles((theme) => ({
    //shopping cart badge
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  // const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [userName]);

  const signIn = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          // console.log(result.user.photoURL);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOutState());
    });
  };

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
        {!userName ? (
          <LoginContainer onClick={signIn}>
            <span>Login</span>
          </LoginContainer>
        ) : (
          <>
            <SignOutContainer onClick={signOut}>
              <span>Signout</span>
            </SignOutContainer>
          </>
        )}

        <Link to="/checkout">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={items?.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>
        <>
          <User>
            {!userName ? (
              <UserImg src="/images/user.svg" />
            ) : (
              <>
                <UserImg src={userPhoto} alt={userName} />
                {/* <span>{userName}</span> */}
              </>
            )}
          </User>
        </>
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
  margin-top: 0px;
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

const SignOutContainer = styled(LoginContainer)``;

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
const User = styled.div`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export default Header;
