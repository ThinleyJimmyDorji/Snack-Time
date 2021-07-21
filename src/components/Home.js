import React from "react";
import styled from "styled-components";
import Viewers from "./Viewers";
import Snacks from "./Snacks";
import Brew from "./Brew";
import Sweets from "./Sweets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setSnacks } from "../redux/snackSlice";
import { animateScroll as scroll } from "react-scroll";
import { IoChevronUpCircle } from "react-icons/io5";
function Home() {
  const dispatch = useDispatch();
  // const userName = useSelector(selectUserName);
  let snack_items = [];
  let brew_items = [];
  let sweets_items = [];

  useEffect(() => {
    db.collection("snacks").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log(snack_items);
        switch (doc.data().category) {
          case "snacks":
            snack_items = [...snack_items, { id: doc.id, ...doc.data() }];
            break;
          case "brew":
            brew_items = [...brew_items, { id: doc.id, ...doc.data() }];
            break;
          case "sweets":
            sweets_items = [...sweets_items, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setSnacks({   // reducer in snackSlice
          snacks: snack_items,
          brew: brew_items,
          sweets: sweets_items,
        })
      );
    });
  }, []);
  return (
    <Container>
      <Viewers />
      <Snacks />
      <Brew />
      <Sweets />
      <ScrollToTop
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <div class="empty-div"></div>
        <div class="icon-wrapper">
          <IoChevronUpCircle class="up-arrow" size="2.5em" />
        </div>
      </ScrollToTop>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  padding-bottom: 80px;
  margin-bottom: 100px;
  /* position: relative; */
  overflow-x: hidden;

  /* &:before {
    background: #f2f2f2 center center / cover no-repeat fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; // send the background of all the content
    position: absolute; // fix the position of the background image
  } */
`;
const ScrollToTop = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: flex-end;

  .empty-div {
    flex: 1;
  }
  .icon-wrapper {
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
  }
  .up-arrow {
    color: rgba(112, 76, 182, 0.5);
  }
`;
export default Home;
