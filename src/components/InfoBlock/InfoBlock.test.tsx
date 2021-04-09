import { render as r } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import InfoBlock from "./index";

// Fetch mock if fetching from external API

describe("InfoBlock", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <InfoBlock icon="/test-icon.png" title="Sam" />,
      </Provider>,
    );
  };

  it("renders component with the correct values", () => {
    const { getByText, container } = render();

    expect(getByText("Sam")).toBeInTheDocument();
    expect(container.querySelector("img").src).toContain("/test-icon.png");
  });
});
