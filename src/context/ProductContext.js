import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductDataContext = React.createContext();

const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  //USD is assumed to be a default base.
  const [selectedCurrencyBase, setSelectedCurrencyBase] = useState("USD");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
      setIsFetching(false);
    };

    fetchProducts();
  }, []);

  const stateValue = {
    products,
    error,
    isFetching,
    selectedCurrencyBase,
    setSelectedCurrencyBase,
  };
  return (
    <ProductDataContext.Provider value={stateValue}>
      {children}
    </ProductDataContext.Provider>
  );
};

export { ProductDataContext, ProductDataProvider };
