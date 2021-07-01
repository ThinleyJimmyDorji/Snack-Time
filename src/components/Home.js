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
import { selectUserName } from "../redux/userSlice";

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
        setSnacks({
          snacks: snack_items,
          brew: brew_items,
          sweets: sweets_items,
        })
      );
    });
  }, []); // grab the data from firestore when the user logs in
  return (
    <Container>
      <Viewers />
      <Snacks />
      <Brew />
      <Sweets />
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
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
export default Home;
