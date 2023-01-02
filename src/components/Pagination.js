import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul>
        {pageNumbers.map((page) => (
          <li className="page-item" key={page}>
            <a className="page-link" href="#" onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
