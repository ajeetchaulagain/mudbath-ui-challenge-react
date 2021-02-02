import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import MasterLayout from "../../src/components/MasterLayout";
import ProductDetail from "../../src/components/Products/ProductDetail";

const ProductDetailPage = ({ products, error, isFetching }) => {
  const router = useRouter();
  console.log("products:ProductDetailpage", products);
  const { productId } = router.query;

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <MasterLayout>
      <div className="lg:container mx-auto py-10">
        <h1 className="text-gray-900 font-bold text-2xl mb-6">
          Product Detail
        </h1>
        {product && <ProductDetail product={product} />}
      </div>
    </MasterLayout>
  );
};

ProductDetailPage.propTypes = {
  products: PropTypes.array.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
};

export default ProductDetailPage;
