import { React } from "react";
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
import { selectBrew } from "../redux/snackSlice";
import { setCartSnacks } from "../redux/orderSlice";
import { useDispatch } from "react-redux";
import { selectCartSnacks } from "../redux/orderSlice";
import Snacks from "./Snacks";

const Brew = (props) => {
  const brews = useSelector(selectBrew);
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
    <Container id="brew">
      <SnackHeading>Brew</SnackHeading>
      <Content>
        {brews &&
          brews.map((brew, key) => (
            <Wrap key={key}>
              {/* {brew.id} */}
              <Link to={`/detail/` + brew.id}>
                <img src={brew.image} alt={brew.name} />
              </Link>
              <ItemName>{brew.name}</ItemName>
              <ItemPrice>{brew.price}</ItemPrice>

              <Operations>
                <AddButton
                  onClick={() => {
                    setCartItem(
                      brew.id,
                      brew.name,
                      brew.category,
                      brew.image,
                      brew.reviews,
                      brew.price
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
export default Brew;
