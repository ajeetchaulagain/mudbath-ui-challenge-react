import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import getPriceListBasedOnCurrency from "../../util/getPriceList";
import { ProductDataContext } from "../../context/ProductContext";

const ProductInfo = ({ product }) => {
  const { base, amount } = product.price;

  const { selectedCurrencyBase, setSelectedCurrencyBase } = useContext(
    ProductDataContext
  );
  //USD is assumed to be a default base.
  // const [selectedCurrencyBase, setSelectedCurrencyBase] = useState("USD");
  const router = useRouter();

  const priceList = getPriceListBasedOnCurrency(base, amount);

  const onCurrencyChange = (e) => {
    setSelectedCurrencyBase(e.target.value);
  };

  const selectedAmount = priceList.find(
    (price) => price.base === selectedCurrencyBase
  ).amount;

  return (
    <div className="w-full lg:w-1/4 px-3 mb-3">
      <div className="py-4 px-4 border shadow rounded">
        <div className="image-section bg-gray-200 rounded p-2 -mx-2 mb-2 h-32 flex flex-col justify-center ">
          <h2 className="text-3xl font-black text-gray-500">{product.name}</h2>
        </div>
        <h2 className="text-xl font-medium mt-4 mb-4">{product.name}</h2>
        <h3 className="mb-4">
          <span className="font-bold">Price: </span>
          {selectedAmount}
          <select
            onChange={onCurrencyChange}
            className="border ml-3 rounded border-purple-500"
          >
            {priceList.map((price) => {
              return (
                <option key={price.base} value={price.base}>
                  {price.base}
                </option>
              );
            })}
          </select>
        </h3>
        <button
          onClick={() => router.push(`/products/${product.id}`)}
          className="rounded bg-purple-500 text-white px-4 py-2 mt-2 font-medium"
        >
          View Detail
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
