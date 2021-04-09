import { render as r, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

// Fetch mock if fetching from external API

describe("Dashboard", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  };

  it("renders with the default values", async () => {
    const { getByText, container } = render();

    await waitForElementToBeRemoved(() => container.querySelector(".loading"));

    expect(getByText("Contact Anna")).toBeInTheDocument();
    expect(getByText("annaanne@qliro.com")).toBeInTheDocument();
  });
});
