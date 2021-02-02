const getPriceListBasedOnCurrency = (baseType, value) => {
  if (baseType === "USD") {
    return [
      {
        base: "USD",
        amount: value,
      },
      {
        base: "CNY",
        amount: (parseFloat(value) * 6.46).toFixed(0),
      },
      {
        base: "AUD",
        amount: (parseFloat(value) * 1.31).toFixed(0),
      },
    ];
  }

  if (baseType === "CNY") {
    return [
      {
        base: "USD",
        amount: (parseFloat(value) * 0.15).toFixed(0),
      },
      {
        base: "CNY",
        amount: value,
      },
      {
        base: "AUD",
        amount: (parseFloat(value) * 0.2).toFixed(0),
      },
    ];
  }
  if (baseType === "AUD") {
    return [
      {
        base: "USD",
        amount: (parseFloat(value) * 0.76).toFixed(0),
      },
      {
        base: "CNY",
        amount: (parseFloat(value) * 4.92).toFixed(0),
      },
      {
        base: "AUD",
        amount: value,
      },
    ];
  }
  return null;
};

export default getPriceListBasedOnCurrency;
