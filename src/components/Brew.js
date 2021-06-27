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

const Brew = (props) => {
  const brews = useSelector(selectBrew);
  return (
    <Container>
      <SnackHeading>Brew</SnackHeading>
      <Content>
        {brews &&
          brews.map((brew, key) => (
            <Wrap key={key}>
              {/* {brew.id} */}
              <Link to={`/detail` + brew.id}>
                <img src={brew.image} alt={brew.name} />
              </Link>
              <ItemName>{brew.name}</ItemName>
              <ItemPrice>{brew.price}</ItemPrice>

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
export default Brew;
