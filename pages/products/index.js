import React, { useContext } from "react";
import MasterLayout from "../../src/components/MasterLayout";
import ProductList from "../../src/components/Products/ProductList";
import Spinner from "../../src/components/shared/Spinner";
import { ProductDataContext } from "../../src/context/ProductContext";

const ProductListingPage = () => {
  const { products, isFetching } = useContext(ProductDataContext);
  return (
    <MasterLayout>
      <div className="lg:container mx-auto py-20">
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <h1 className="text-gray-900 font-bold text-2xl mb-6 ml-2">
              List of Products
            </h1>
            <ProductList products={products} />
          </>
        )}
      </div>
    </MasterLayout>
  );
};

export default ProductListingPage;
