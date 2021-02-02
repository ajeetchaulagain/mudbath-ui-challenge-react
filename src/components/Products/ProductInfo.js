import React from "react";
import PropTypes from "prop-types";

const ProductInfo = ({ product }) => {
  const { base, amount } = product.price;
  return (
    <div className="w-full lg:w-1/4 px-3 mb-3">
      <div className="py-4 px-4 border shadow rounded">
        <div className="image-section bg-gray-200 rounded p-2 -mx-2 mb-2 h-32 flex flex-col justify-center ">
          <h2 className="text-3xl font-black text-gray-500">{product.name}</h2>
        </div>
        <h2 className="text-xl font-medium">{product.name}</h2>
        <h3>
          Price: {amount} {base}
        </h3>
        <button className="rounded bg-purple-500 text-white px-4 py-2 mt-2 font-medium">
          View Detail
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
