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

const Sweets = (props) => {
  const sweets = useSelector(selectSweets);
  return (
    <Container>
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

export default Sweets;
