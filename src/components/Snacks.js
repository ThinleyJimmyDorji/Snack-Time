import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSnacks } from "../redux/snackSlice";

const Snacks = (props) => {
  const snacks = useSelector(selectSnacks);
  return (
    <Container>
      <SnackHeading>Snacks</SnackHeading>
      <Content>
        {snacks &&
          snacks.map((snack, key) => (
            <Wrap key={key}>
              {/* {snack.id} */}
              <Link to={`/detail` + snack.id}>
                <img src={snack.image} alt={snack.name} />
              </Link>
              <ItemName>{snack.name}</ItemName>
              <ItemPrice>{snack.price}</ItemPrice>

              <Operations>
                <AddButton>
                  <span>Select</span>
                </AddButton>
              </Operations>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 0px 26px;
  margin-left: 0px;
  margin-top: 0px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SnackHeading = styled.div`
  width: 40%;
  background-color: #ecf4f9;
  text-align: center;
  padding: 8px 16px;
  margin-top: 100px;
  border-radius: 4px;
  border: 1px solid #2a98b9;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const Content = styled.div`
  margin-left: 0;
  display: grid;
  grid-gap: 30px;
  max-width: 60%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* overflow: hidden; */
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
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
    border-radius: 4px;
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
  margin: 4px 8px;
  color: white;
  padding: 8px 40px;
  background-color: rgba(112, 76, 182, 0.1);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  span {
    font-size: 12px;
    color: rgb(112, 76, 182);
    text-transform: uppercase;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      padding: 0px 8px;
      font-size: 10px;
    }
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(112, 76, 182, 0.5);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
  @media (max-width: 768px) {
    height: 30px;
    font-size: 12px;
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
const ItemName = styled.div`
  font-size: 16px;
  padding: 8px 4px 0px 0px;
  color: black;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const ItemPrice = styled.div`
  font-size: 12 px;
  color: #2a98b9;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export {
  Container,
  SnackHeading,
  Content,
  Wrap,
  Operations,
  AddButton,
  ItemName,
  ItemPrice,
};
export default Snacks;
