import React from "react";
import styled from "styled-components";
function Viewers() {
  return (
    <Container>
      <Categories>Categories</Categories>
      <Content>
        <Wrap>
          <img src="https://images.pexels.com/photos/1103909/pexels-photo-1103909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  // create 5 columns, with min width of 0 (minmax(0,)) but stretch as far as possible(minmax(, 1fr))
`;
const Categories = styled.div`
  width: 40%;
  background-color: #ecf4f9;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #2a98b9;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const Content = styled.div`
  padding: 0px 0px 26px;
  max-width: 80%;
  display: grid;
  grid-gap: 25px; //add space between grid items
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    max-width: 100%;
  }
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
    border-radius: 4px;
    object-fit: cover; // fit the object as much as possible inside the div
  }
`;
export default Viewers;
