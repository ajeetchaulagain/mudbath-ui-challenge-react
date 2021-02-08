import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import products from "../../../../data/products.json";
import { ProductDataContext } from "../../../../context/ProductContext";
import ProductList from "../../../../components/Products/ProductList";

describe("<ProductList/> Component", () => {
  const stateValue = {
    products: products,
  };

  it("should render a <ProductList/> Component", () => {
    const { getAllByText } = render(
      <ProductDataContext.Provider value={stateValue}>
        <ProductList />
      </ProductDataContext.Provider>
    );
    const productTitle = getAllByText(/Green/i);
    expect(productTitle[0]).toBeInTheDocument();
  });
});
