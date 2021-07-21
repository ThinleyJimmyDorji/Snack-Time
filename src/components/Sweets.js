import React from "react";
import styled from "styled-components";
import {
  Container,
  SnackHeading,
  Content,
  Wrap,
  Operations,
  AddButton,
  ItemName,
  ItemPrice,
} from "./Snacks";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSweets } from "../redux/snackSlice";
import { useDispatch } from "react-redux";
import { setCartSnacks } from "../redux/orderSlice";

const Sweets = (props) => {
  const sweets = useSelector(selectSweets);
  const dispatch = useDispatch();

  const setCartItem = (id, name, category, image, reviews, price) => {
    dispatch(
      setCartSnacks({
        type: "ADD_TO_CART",
        item: {
          id: id,
          name: name,
          category: category,
          image: image,
          reviews: reviews,
          price: price,
        },
      })
    );
  };

  return (
    <>
      {sweets?.length != 0 ? (
        <Container id="sweets">
          <SnackHeading>Sweets</SnackHeading>
          <Content>
            {sweets &&
              sweets.map((sweet, key) => (
                <Wrap key={key}>
                  {/* {sweet.id} */}
                  <Link to={`/detail/` + sweet.id}>
                    <img src={sweet.image} alt={sweet.name} />
                  </Link>
                  <ItemName>{sweet.name}</ItemName>
                  <ItemPrice>{sweet.price}</ItemPrice>

                  <Operations>
                    <AddButton
                      onClick={() => {
                        setCartItem(
                          sweet.id,
                          sweet.name,
                          sweet.category,
                          sweet.image,
                          sweet.reviews,
                          sweet.price
                        );
                      }}
                    >
                      <span>Select</span>
                    </AddButton>
                  </Operations>
                </Wrap>
              ))}
          </Content>
        </Container>
      ) : (
        <EmptyMessage>
          <img src="https://img.icons8.com/dusk/64/000000/sad.png" />{" "}
          <span>Sorry! No sweets in the collection</span>
        </EmptyMessage>
      )}
    </>
  );
};

const EmptyMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  img {
    height: 30px;
    width: 30px;
    margin: 12px;
  }
`;
export default Sweets;
