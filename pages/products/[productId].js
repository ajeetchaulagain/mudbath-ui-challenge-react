import React, { useContext } from "react";
import { useRouter } from "next/router";
import MasterLayout from "../../src/components/MasterLayout";
import ProductDetail from "../../src/components/Products/ProductDetail";
import Spinner from "../../src/components/shared/Spinner";
import BackButton from "../../src/components/shared/BackButton";
import { ProductDataContext } from "../../src/context/ProductContext";

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { products, isFetching } = useContext(ProductDataContext);

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <MasterLayout>
      <div className="lg:container mx-auto py-10">
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <h1 className="text-gray-900 font-bold text-2xl mb-6">
              Product Detail
            </h1>
            {product && <ProductDetail product={product} />}
            <BackButton />
          </>
        )}
      </div>
    </MasterLayout>
  );
};

export default ProductDetailPage;
