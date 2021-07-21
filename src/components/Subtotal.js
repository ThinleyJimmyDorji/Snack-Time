import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import { selectCartSnacks } from "../redux/orderSlice";
import { getTrayTotal } from "../redux/orderSlice";

function Subtotal() {
  const items = useSelector(selectCartSnacks);
  const dispatch = useDispatch();
  return (
    <Component>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal">
              Subtotal ({items?.length} items):
              <strong classname="amount">{value}</strong>
            </p>
            <p className="delivery_charge">
              <span>Delivery Charge: </span>
              <span className="fee">Free</span>
            </p>
          </>
        )}
        decimalScale={2}
        value={getTrayTotal(items)} // pass the current tray items to calculate the total amount
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Nu."}
      />

      <CheckoutButton disabled={items.length != 0 ? false : true}>
        <span>Order</span>
      </CheckoutButton>
    </Component>
  );
}
const Component = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
  flex-direction: column;
  .subtotal {
    font-size: 16px;
    .amount {
      color: green;
    }
  }
  .delivery_charge {
    .fee {
      color: green;
      font-size: 14px;
    }
  }
`;
const CheckoutButton = styled.button`
  border: none;
  background-color: rgba(112, 76, 182, 0.1);
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.15s;
  margin: 30px 5px 0px 0px;
  span {
    font-size: 16px;
    color: rgb(112, 76, 182);
    letter-spacing: 1px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(112, 76, 182, 0.5);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
  disabled {
    cursor: not-allowed;
  }
`;

export default Subtotal;
