import React from "react";
import { Button, Container, Grid } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  return (
    <div>
      <Container>
        {/* {cartItems.length > 0 ? ( */}
        <Grid mt={5} container spacing={2}>
          <Grid item xs={8}>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>qty</th>
                  <th>Price </th>
                  <th>Sub Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {/* {cartItems?.map((item) => ( */}
                <tr>
                  <td>
                    {/* <img width={150} src={item.photoUrl} alt={item.name} /> */}
                  </td>
                  <td></td>
                  <td className="d-flex justify-content-center">
                    <button className="btn btn-lg">-</button>
                    <input
                      style={{ width: "40%" }}
                      className="form-control"
                      type="number"
                    />
                    <button className="btn btn-lg">+</button>
                  </td>
                  <td>
                    {/* {item.discount ? ( */}
                    <>
                      <del></del> <span></span> AZN
                    </>
                    {/* // ) : ( */}
                    <span></span>
                    {/* )} */}
                  </td>
                  <td>
                    {/* {( */}
                    {/* (item.discount > 0 ? item.discount : item.price) *
                          item.quantity
                        ).toFixed(2)} */}
                  </td>
                  <td>
                    <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </Grid>
          <Grid item xs={4}>
            <div className="text-center card p-5">
              <h5>
                Total :
                {/* {cartItems.reduce(
                    (total, item) =>
                      total +
                      (item.discount > 0 ? item.discount : item.price) *
                        item.quantity,
                    0
                  )} */}
                Azn
              </h5>
              <hr />
              <button className="btn my-3 btn-success w-58">Purchase</button>
              <button className="btn btn-outline-danger">
                Remove all Cart
              </button>
            </div>
          </Grid>
        </Grid>
        {/* ) : ( */}

        <div className="cart">
          <p className="alert alert-danger">Cart is Empty</p>
          <button className="btn btn-dark">Back to Shop</button>
        </div>
        {/* )} */}
      </Container>
    </div>
  );
};

export default Cart;
