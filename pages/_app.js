import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/styles/globalStyles.css";

function App({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

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

  return (
    <Component
      {...pageProps}
      products={products}
      isFetching={isFetching}
      error={error}
    />
  );
}

export default App;
