import { render as r } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Tooltip from "./index";

describe("Tooltip", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <Tooltip label="sam's label" />
      </Provider>,
    );
  };

  it("renders the correct label for the tooltip", () => {
    const { getByText } = render();

    expect(getByText("i")).toBeInTheDocument();
    expect(getByText("sam's label")).toBeInTheDocument();
  });
});
