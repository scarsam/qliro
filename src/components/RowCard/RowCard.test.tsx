import { render as r } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import RowCard from "./index";

describe("RowCard", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <RowCard
          id={1}
          label={"Online"}
          orderNumber={"1234567890"}
          created={"05 maj, 12:33"}
          country={"UK"}
          store={"Butik X"}
          paymentMethod={"Invoice"}
          cardNumber={null}
          paymentProvider={"Qliro"}
          status={"Paid"}
          amount={"2160 kr"}
          userId={1}
          upsell={false}
        />
      </Provider>,
    );
  };

  it("renders component with correct length", () => {
    const { container } = render();

    expect(container.querySelectorAll("img")[0].src).toContain(
      "/RightArrow.svg",
    );
    expect(container.querySelectorAll("img")[1].src).toContain("/UK.svg");
    expect(container.querySelectorAll("img")[2].src).toContain("/Qliro.svg");
  });
});
