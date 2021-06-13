import React from "react";
import styled from "styled-components";
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/chinese-momo.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/omelete.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/pasta-with-tomato.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/momo.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/meat-and-mint-noodle.jpg" alt="" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px; //add space between grid items
  grid-template-columns: repeat(
    5,
    minmax(0, 1fr)
  ); // create 5 columns, with min width of 0 (minmax(0,)) but stretch as far as possible(minmax(, 1fr))
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 349, 349, 0.8);
    box-shadow: rgb(0 0 0 /69%) 0px 40px 58px -10px,
      rgb(0 0 0 /73%) 0px 30px 22px -10px;
  }
  @media (max-width: 768px) {
    border-radius: 4px;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover; // fit the object as much as possible inside the div
  }
`;
export default Viewers;