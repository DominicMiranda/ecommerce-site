import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { addToCart } from "../redux/actions";
import { getCartItems, getProductList } from "../redux/selectors";
import "./ProductDetails.css";

function Product({ currentUser, cartList, productList, addToCart }) {
  const { productId } = useParams();
  const product = productList.find((product) => product.id === productId);

  useEffect(() => {
    if (cartList.length) {
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  }, [cartList]);

  const handleAddToCart = (product) => {
    addToCart(currentUser, product);
    localStorage.setItem("cart", JSON.stringify(cartList));
  };

  return (
    <>
      <div className="content-container">
        <div className="product-detail-card grid-container float-left ">
          <img
            className="item1"
            src={product.image}
            alt={`${product.name} image`}
            width="600"
            height="600"
          />
          <div className="item2 bg-white">
            {cartList.find((item) => item.id === product.id) ? (
              <NavLink to="/cart">
                <button className="button">
                  <h3>Go To Cart</h3>
                </button>
              </NavLink>
            ) : (
              <button
                className="button"
                onClick={() => {
                  handleAddToCart(product);
                }}
                disabled={currentUser === null}
              >
                <h3>Add To Cart</h3>
              </button>
            )}
          </div>

          <div className="bg-white item3">
            {/* change class */}
            <h2>
              {product.brand} {product.name}
            </h2>
            <h3>
              <i>&#8377;{product.price}</i>
            </h3>
            <br />
            <table id="product-description">
              <tbody>
                <tr>
                  <th>Brand</th>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <td>{product.operatingSystem}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{product.description ? product.description : "NA"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const { currentUser } = state.users;
  const cartList = getCartItems(state, currentUser);
  const productList = getProductList(state);
  return {
    currentUser,
    cartList,
    productList,
  };
};
export default connect(mapStateToProps, { addToCart })(Product);
