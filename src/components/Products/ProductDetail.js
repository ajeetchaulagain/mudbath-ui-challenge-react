import React, { useState } from "react";
import getPriceListBasedOnCurrency from "../../util/getPriceList";
import PropTypes from "prop-types";
import CurrencySelect from "../shared/CurrencySelect";

const ProductDetail = ({ product }) => {
  const { name, description, price } = product;

  //USD is assumed to be a default base.
  const [selectedCurrencyBase, setSelectedCurrencyBase] = useState("USD");
  const { base, amount } = product.price;

  const priceList = getPriceListBasedOnCurrency(base, amount);

  const onCurrencyChange = (e) => {
    setSelectedCurrencyBase(e.target.value);
  };

  const selectedAmount = priceList.find(
    (price) => price.base === selectedCurrencyBase
  ).amount;

  return (
    <div className="flex flex-row -mx-2">
      <div className="lg:w-1/4 image-holder  h-64 p-4">
        <div className="image-section bg-gray-200 rounded p-4 -mx-2 mb-2 h-32 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-black text-gray-500">{name}</h2>
        </div>
      </div>
      <div className="lg:w-3/4 bg-purple-800content p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <h3 className="mb-4">
          <span className="font-bold">Price: </span>
          {selectedAmount}
          <CurrencySelect
            onCurrencyChange={onCurrencyChange}
            priceList={priceList}
          />
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
