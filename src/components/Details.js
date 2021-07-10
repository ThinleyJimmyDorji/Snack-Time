import React from "react";
import styled from "styled-components";
import { BsHeartFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // helpful in getting id
import db from "../firebase";

function Details() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detailData, setDetailData] = useState({}); //set a variable 'detail' whose value will bet set by 'setDetailData' func. Start with empty set(empty detail)

  useEffect(() => {
    db.collection("snacks")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No collection as such exists");
        }
      })
      .catch((error) => {
        console.log("error fetching the document:", error);
      });
  }, [id]);

  return (
    <IconContext.Provider
      value={{ color: "#2a98b9", margin: "2em", size: "1.5em" }}
    >
      <Container>
        <Content>
          <ItemImage>
            <img src={detailData.image} alt={detailData.name} />
          </ItemImage>
          <DetailsBox>
            <ItemName>
              <span>{detailData.name}</span>
            </ItemName>
            <RatingBox>
              <Stars>
                <BsStarFill />
                &nbsp; &nbsp;
                <BsStarFill />
                &nbsp; &nbsp;
                <BsStarFill />
                &nbsp; &nbsp;
                <BsStarFill />
                &nbsp; &nbsp;
                <BsStarFill />
                &nbsp;
              </Stars>
              <RatingCount>{detailData.reviews} reviews</RatingCount>
            </RatingBox>
            <ItemPrice>
              <h2> Nu {detailData.price} </h2>&nbsp;
            </ItemPrice>
            <Quantity>Minimim Quantity: 2</Quantity>
            <OrderDetails>
              <Operations>
                <Decrement
                  disabled={!count ? true : false}
                  count
                  onClick={() => dispatch(decrement())}
                >
                  <span>-</span>
                </Decrement>
                <OrderCount>{count}</OrderCount>
                <Increment onClick={() => dispatch(increment())}>
                  <span>+</span>
                </Increment>
              </Operations>
              <TrayBox>
                <span>Add to Tray</span>
              </TrayBox>
            </OrderDetails>
            <Description>
              <span>
                Magic beans don’t just exist in fairytales. The finest red beans
                are first sourced from the fertile Tokachi area of Hokkaido and
                made into amanatto using a traditional process. They are then
                dipped in white chocolate and coated with Kyoto's famous Uji
                Matcha powder, which transforms the beans into this dreamy,
                creamy confection.
              </span>
            </Description>
          </DetailsBox>
        </Content>
      </Container>
    </IconContext.Provider>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 100px calc(3.5vw + 5px);
  overflow-x: hidden;
`;
const Content = styled.div`
  padding-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const ItemImage = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 80%auto;
  }
`;
const DetailsBox = styled.div`
  padding-left: 80px;
  width: 90%;
  @media (max-width: 768px) {
    margin: 50px 0px;
    padding-left: 0px;
    width: 100%;
  }
`;
const ItemName = styled.div`
  span {
    letter-spacing: 1px;
    color: rgb(112, 76, 182);
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
  }
`;
const RatingBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const Stars = styled.div`
  display: flex;
  letter-spacing: 1px;
`;
const RatingCount = styled.div`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemPrice = styled.div`
  display: flex;
  padding-top: 0px 0px;
  align-items: center;
`;
const Quantity = styled(RatingCount)`
  padding-left: 0;
  margin: 10px 0px;
`;
const OrderDetails = styled.div`
  margin: 8px 0px;
  display: flex;
  align-items: center;
`;
const Operations = styled.div`
  display: flex;
  align-items: center;
`;
const Decrement = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid rgb(112, 76, 182);
  border-radius: 50%;
  background-color: rgba(112, 76, 182, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  span {
    font-size: 30px;
    color: rgb(112, 76, 182);
  }

  &:hover,
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

const OrderCount = styled.div`
  font-size: 25px;
  margin-right: 10px;
`;
const Increment = styled(Decrement)`
  span {
    font-size: 25px;
  }
`;
const TrayBox = styled.div`
  background-color: rgba(112, 76, 182, 0.1);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  margin: 10px 0px;
  span {
    font-size: 16px;
    color: rgb(112, 76, 182);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(112, 76, 182, 0.5);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;
const Description = styled.div`
  height: auto;
  width: 100%;
  /* max-width: 350px; */
  background-color: #ecf4f9;
  border: 1px solid #2a98b9;
  border-left: 6px solid #2a98b9;
  padding: 8px 8px;
  span {
    line-height: 1.5;
    font-size: 16px;
  }

  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Details;
