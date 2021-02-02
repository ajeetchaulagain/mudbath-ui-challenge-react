import React from "react";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
