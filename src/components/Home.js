import React from "react";
import styled from "styled-components";
import Viewers from "./Viewers";
import Snacks from "./Snacks";

function Home() {
  return (
    <Container>
      <Viewers />
      <Snacks />
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: #f2f2f2 center center / cover no-repeat fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; // send the background of all the content
    position: absolute; // fix the position of the background image
  }
`;
export default Home;
