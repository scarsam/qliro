import { render as r } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Pagination from "./index";

describe("Pagination", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <Pagination totalPages={5} defaultPage={1} />,
      </Provider>,
    );
  };

  it("renders component with correct length", () => {
    const { getByText, queryByText } = render();

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(queryByText("6")).not.toBeInTheDocument();
  });
});
