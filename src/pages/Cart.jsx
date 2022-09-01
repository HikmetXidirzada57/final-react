import React, { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  ClearCart,
  removeFromCart,
} from "../Redux/Actions/CartActions";

import { Link } from "react-router-dom";

const Cart = () => {
  const [qty, setQty] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(qty);

  // button increment/decrement functions/////
  const handleIncrement = () => {
    if (qty > 0) {
      setQty((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };
  ////////////////////////

  // add to cart///////
  const addToCart = (id, key) => {
    const findItem =
      cartItems.length > 0 ? cartItems.find((c) => c.id === id) : null;
    const quantity = findItem ? findItem.quantity + key : 1;

    if (quantity === 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(AddToCart(id, quantity));
    }
  };
  ///////////////////

  return (
    <div style={{ background: "#FFFFF" }}  className="col-lg-12 col-md-8 col-sm-12">
      <div className="container pb-2">
        {cartItems.length > 0 ? (
          <Grid mt={2} container spacing={1}>
            <Grid item xs={9}>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price </th>
                    <th>Sub Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr>
                      <td>
                        <img width={100} src={item.photoUrl} alt={item.name} />
                      </td>
                      <td>
                        <strong>{item.name}</strong>
                      </td>
                      <td className="d-flex justify-content-center">
                        <button
                          onClick={() => dispatch(addToCart(item.id, -1))}
                          className="btn btn-lg"
                          onclick={handleDecrement}
                          type="button"
                        >
                          -
                        </button>
                        <button
                          style={{ width: "35%" }}
                          className="form-control"
                          type="number"
                          value={qty}
                        />
                        <button
                          onClick={() => dispatch(addToCart(item.id, 1))}
                          className="btn btn-lg"
                          onclick={handleIncrement}
                          type="button"
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {item.dicount ? (
                          <>
                            <del>{item.price}</del> <br /> <span>{item.dicount}</span> 
                            $
                          </>
                        ) : (
                          <span>{item.price} $</span>
                        )}
                      </td>
                      <td>
                        {(
                          (item.dicount > 0 ? item.dicount : item.price) *
                          item.quantity
                        ).toFixed(2)}
                      </td>
                      <td
                        onClick={() => dispatch(removeFromCart(item.id))}
                        style={{ cursor: "pointer" }}
                      >
                        <RestoreFromTrashIcon sx={{ color: "red" }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Grid>
            <Grid item xs={3}>
              <div className="text-center card p-5">
                <h5>
                  <b>Total</b> : <br /> 
                  {cartItems.reduce(
                    (total, item) =>
                      total +
                      (item.dicount > 0 ? item.dicount : item.price) *
                        Number(item.quantity),
                    1
                  )}
                  $
                </h5>
                <hr />
                <button className="btn my-3 btn-success w-58">Purchase</button>
                <button
                  onClick={() => dispatch(ClearCart())}
                  className="btn btn-outline-danger"
                >
                  Remove all Cart
                </button>
              </div>
            </Grid>
          </Grid>
        ) : (
          <div className="cart">
            <p className="alert alert-danger  mt-3">Senin Kartin islemir!</p>
            <Link to="/shop" className="btn btn-primary">
              Back to Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
