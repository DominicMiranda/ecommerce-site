import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/actions";
import { getCartItems } from "../redux/selectors";

function Cart({ activeUserid, cartList, removeFromCart }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const handleRemove = (product) => removeFromCart(activeUserid, product);

  return cartList.length ? (
    <>
      <div className="content-container">
        <div className="products-container">
          <h3 style={{ textAlign: "center" }}>Cart</h3>
          <br />
          {/* <button className="big-button">Proceed To Checkout</button> */}
          <ul className="products-container">
            {cartList.map((product) => {
              return (
                <li className="list-item clearfix" key={product.id}>
                  <img
                    src={product.image}
                    alt={`${product.name} image`}
                    width="120"
                    height="120"
                    className="float-left"
                  />
                  <h3>
                    <NavLink
                      to={`/product/${product.id}`}
                      className="page-link"
                    >
                      {product.name}
                    </NavLink>
                  </h3>
                  <span style={{ fontStyle: "italic" }}>
                    &#8360; {product.price}/-
                  </span>
                  <button
                    className="float-right"
                    onClick={() => handleRemove(product)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="big-button">Proceed To Checkout</button>
        </div>
      </div>
    </>
  ) : (
    <div className="content-container">
      <div className="products-container">
        <h3 style={{ textAlign: "center" }}>No items in cart</h3>
        <NavLink to="/shop" className="link">
          <button className="big-button">Continue Shopping</button>
        </NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const activeUserid = state.users.currentUser;
  const cartList = getCartItems(state, activeUserid);
  return {
    activeUserid,
    cartList,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
