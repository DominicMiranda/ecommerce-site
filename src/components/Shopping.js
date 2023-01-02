import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Pagination from "./Pagination";
import { getProductListByQuery } from "../redux/selectors";

function Shopping({ productList, searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="content-container">
        <h3 style={{ textAlign: "center" }}>Store</h3>
        {searchQuery ? <h5>Showing results for "{searchQuery}"</h5> : ""}
        <ul className="products-container">
          {currentProducts.map((product) => {
            return (
              <li
                className="list-item clearfix clickable"
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                <img
                  className="float-left"
                  src={product.image}
                  alt={`${product.name} image`}
                  width="300"
                  height="300"
                />
                <h3 style={{ marginTop: "2em" }}>
                  {product.brand} {product.name}
                </h3>
                <br />
                <h2 style={{ fontStyle: "italic" }}>
                  &#8377; {product.price}/-
                </h2>
              </li>
            );
          })}
        </ul>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productList.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { searchQuery } = state;
  const productList = getProductListByQuery(state, searchQuery);
  return { productList, searchQuery };
};

export default connect(mapStateToProps)(Shopping);
