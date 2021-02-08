import React from "react";
import PropTypes from "prop-types";

const CurrencySelect = ({ onCurrencyChange, priceList }) => {
  return (
    <select
      data-testid="currency-select"
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
  );
};

CurrencySelect.propTypes = {};

export default CurrencySelect;
