import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "next/router";

import IndexPage from "../../../pages/index";

//Mocking nextjs router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
    };
  },
}));

describe("<IndexPage/> Component", () => {
  it("should render a index page with button", () => {
    const { getByText } = render(<IndexPage />);
    const viewButton = getByText(/view/i);
    expect(viewButton).toBeInTheDocument();
    fireEvent.click(viewButton);
  });
});
