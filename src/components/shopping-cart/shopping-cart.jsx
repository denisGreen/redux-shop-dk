import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./shopping-cart.css";
import {
  addOneItemToCart,
  decreaseSelectedItemInCart,
  deleteAllSelectedItemsFromCart
} from "../../actions";

const ShoppingCart = ({
  onIncreaseItemsInCart,
  onDecreaseItemsInCart,
  onDeleteItemsFromCart
}) => {
  //taking out the
  const { itemsInCart, orderTotal } = useSelector(state => state.cart);
  console.log(useSelector(state => state));
  const dispatch = useDispatch();
  //console.log(useSelector(state => state.cart));

  const renderRow = (item, numberInTable) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{numberInTable + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => dispatch(deleteAllSelectedItemsFromCart(id))}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i>Remove</i>
          </button>
          <button
            onClick={() => dispatch(addOneItemToCart(id))}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i>+</i>
          </button>
          <button
            onClick={() => dispatch(decreaseSelectedItemInCart(id))}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i>-</i>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table container-fluid">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quatity</th>
            <th>Price</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>{itemsInCart.map(renderRow)}</tbody>
      </table>
      <div className="total text-right">Total: ${orderTotal}</div>
    </div>
  );
};

export default ShoppingCart;
