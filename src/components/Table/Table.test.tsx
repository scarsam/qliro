import { render as r } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Table from "./index";

describe("Table", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <Table columns={["hello", "this", "is", "sam"]} />
      </Provider>,
    );
  };

  it("renders the table with the correct table headers", () => {
    const { getByText } = render();

    expect(getByText("hello")).toBeInTheDocument();
    expect(getByText("this")).toBeInTheDocument();
    expect(getByText("is")).toBeInTheDocument();
    expect(getByText("sam")).toBeInTheDocument();
  });
});
