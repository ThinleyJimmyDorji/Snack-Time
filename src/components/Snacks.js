import React from "react";
import styled from "styled-components";
import "../index.css";
import { BsHeartFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Snacks() {
  return (
    <Container>
      <h4>All Items</h4>
      <Content>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
        <Wrap>
          <img src="images/steamed-noodles.jpg" alt="" />
          <SnackName>
            <h4>name</h4>
          </SnackName>
          <Operations>
            <AddButton>Select</AddButton>
            <LikeButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </LikeButton>
            <span>4.2</span>
          </Operations>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0px 26px;
`;

const Content = styled.div`
  margin-left: 0;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
`;
const SnackItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 8px;
  overflow: hidden;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  margin-bottom: 16px;

  &:hover {
    /* transform: scale(1.05); */
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
    &:hover {
      cursor: pointer;
    }
  }
`;
const Operations = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-size: 12px;
  letter-spacing: 1.5px;

  span {
    margin-left: 8px;
  }
`;
const AddButton = styled.div`
  background-color: #06f;
  margin: 4px 8px;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 250ms;
  &:hover {
    background-color: #4895ef;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 2px 8px;
  }
`;
const LikeButton = styled.div`
  .react-icons {
    vertical-align: middle;
    padding: 1px 1px;
  }

  margin-left: 50px;
  @media (max-width: 768px) {
    margin-left: 8px;
    font-size: 8px;
  }
`;
const SnackName = styled.div`
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  left: 50%;
  top: 50%;
  opacity: 0;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    opacity: 100%;
  }
  transform: translate(-50%, -50%);
  h4 {
    font-size: 20px;
    text-transform: uppercase;
    color: white;
  }
`;

export default Snacks;