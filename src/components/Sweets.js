import React from "react";
import Viewers from "./Viewers";
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

function Sweets() {
  return (
    <Container>
      <Viewers />
      <SnackHeading>Sweets</SnackHeading>
      <Content>
        <Wrap>
          <img src="images/cup-cake.jpg" alt="" />
          <ItemName>Name</ItemName>
          <ItemPrice>Nu 20.0</ItemPrice>

          <Operations>
            <AddButton>
              <span>Select</span>
            </AddButton>
          </Operations>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Sweets;
