import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ product }) => {
  const { name, description, price } = product;
  return (
    <div className="flex flex-row -mx-2">
      <div className="lg:w-1/4 image-holder  h-64 p-4">
        <div className="image-section bg-gray-200 rounded p-4 -mx-2 mb-2 h-32 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-black text-gray-500">{name}</h2>
        </div>
      </div>
      <div className="lg:w-3/4 bg-purple-800content p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <h3>
          Price: {price.amount} {price.base}
        </h3>
        <h3 className="text-xl font-bold mt-4">Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
