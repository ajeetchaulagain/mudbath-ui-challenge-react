import React from "react";
import PropTypes from "prop-types";
import MasterLayout from "../../src/components/MasterLayout";
import ProductList from "../../src/components/Products/ProductList";
import Spinner from "../../src/components/shared/Spinner";

const ProductListingPage = ({ products, error, isFetching }) => {
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

ProductListingPage.propTypes = {
  products: PropTypes.array.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
};

export default ProductListingPage;
