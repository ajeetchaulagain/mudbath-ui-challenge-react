import React from "react";
import { ProductDataProvider } from "../src/context/ProductContext";
import "../src/styles/globalStyles.css";

function App({ Component, pageProps }) {
  return (
    <ProductDataProvider>
      <Component {...pageProps} />
    </ProductDataProvider>
  );
}

export default App;
