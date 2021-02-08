import React, { useContext } from "react";
import ProductInfo from "./ProductInfo";
import { ProductDataContext } from "../../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductDataContext);
  return (
    <div className="flex flex-wrap align-items justify-start lg:container lg:mx-auto">
      {products.map((product) => (
        <ProductInfo product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
