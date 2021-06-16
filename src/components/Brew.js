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

function Brew() {
  return (
    <Container>
      <Viewers />
      <SnackHeading>Brew</SnackHeading>
      <Content>
        <Wrap>
          <img src="images/ice-tea.jpg" alt="" />
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

export default Brew;
