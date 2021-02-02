import React from "react";
import PropTypes from "prop-types";
import ProductInfo from "./ProductInfo";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap align-items justify-start lg:container lg:mx-auto">
      {products.map((product) => (
        <ProductInfo product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
