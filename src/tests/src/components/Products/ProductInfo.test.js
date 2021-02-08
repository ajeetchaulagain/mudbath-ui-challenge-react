import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import products from "../../../../data/products.json";
import ProductInfo from "../../../../components/Products/ProductInfo";

describe("<ProductInfo/> Component", () => {
  const props = {
    product: products[0],
  };

  it("should render a <ProductInfo/> ", () => {
    const { getAllByText } = render(<ProductInfo {...props} />);
    const productTitle = getAllByText(/Brown/i);
    expect(productTitle[0]).toBeInTheDocument();
  });

  it("should allow to change the currency select input", () => {
    const { getByTestId, getByText } = render(<ProductInfo {...props} />);
    const select = getByTestId("currency-select");
    fireEvent.change(select, {
      value: "AUD",
    });
    //asserting currency base is changed
    expect(getByText(/AUD/i)).toBeInTheDocument();
  });
});
