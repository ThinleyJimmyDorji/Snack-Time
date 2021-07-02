import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectCartSnacks, setCartSnacks } from "../redux/orderSlice";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
function Checkout() {
  const items = useSelector(selectCartSnacks);
  const dispatch = useDispatch();

  // let subTotal = 0;
  // for (var item = 0; item <= items.length; item++) {
  //   subTotal = subTotal + item.price;
  // }
  // console.log(subTotal);

  const removeCartItem = (id) => {
    dispatch(
      setCartSnacks({
        type: "REMOVE_FROM_CART",
        id: id,
      })
    );
  };
  return (
    <Container>
      <CheckoutLeft>
        <Heading> Your Order Tray</Heading>

        {items &&
          items.map((item, key) => (
            <BasketList key={key}>
              <ImageContainer>
                <Link to={`/detail/` + item.id}>
                  <img src={item.image} alt={item.name} />
                </Link>
              </ImageContainer>

              <Info>
                <Title>{item.name}</Title>
                <Price>
                  <span>Nu </span>
                  <strong>{item.price}</strong>
                </Price>
                <Rating>
                  {/* {Array(item.ratings)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))} */}
                </Rating>
                <Button
                  onClick={() => {
                    removeCartItem(item.id);
                  }}
                >
                  <span>Remove</span>
                </Button>
              </Info>
            </BasketList>
          ))}
      </CheckoutLeft>

      <CartContainer>
        <CheckoutHeading>Order Summary</CheckoutHeading>
        <CheckoutRight>
          <Subtotal />
        </CheckoutRight>
      </CartContainer>
    </Container>
  );
}
const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const CheckoutLeft = styled.div`
  width: 100%;
  max-height: 90%;
  margin-top: 100px;
  margin-left: 20px;
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  img {
    width: 80%;
    height: 80px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Heading = styled.div`
  font-size: 20px;
  height:40px;
  max-width: 490px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 15px;
  margin-left: 20px;
  @media (max-width: 768px) {
    border: none;
  }
`;
const CheckoutHeading = styled(Heading)`
  width: 60%;
  margin-top: 100px;
  @media (max-width: 768px) {
    border: none;
  }
`;
const BasketList = styled.div`
  display: flex;
  margin: 20px 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  height: 150px;
`;
const CheckoutRight = styled.div`
  background-color: red;
  width: 60%;
  height: 200px;
  max-height: 250px;
  display: flex;
  justify-content: center;
  /* margin: 0px 30px; */
  margin-left: 20px;
  border-radius: 5px;
  background-color: #ecf4f9;
  border: 1px solid #2a98b9;
  border-left: 6px solid #2a98b9;
  margin-top: 20px;
  position: sticky;
  @media (max-width: 768px) {
    width: 90%;
    margin: 30px 10px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 20px;
  padding: 5px 20px;
  @media (max-width: 768px) {
    width: 80%;
    margin: 30px 10px;
  }
`;
const Title = styled.div`
  margin: 10px 0px;
`;
const Price = styled.div``;
const Rating = styled.div``;
const Button = styled.div`
  margin: 10px 8px;
  color: white;
  padding: 8px 40px;
  background-color: rgba(112, 76, 182, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  span {
    font-size: 12px;
    color: rgb(112, 76, 182);
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

export default Checkout;
