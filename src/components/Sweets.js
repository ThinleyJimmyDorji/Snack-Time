import React from "react";
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
    <Container id = "sweets">
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
  );
};

export default Sweets;
