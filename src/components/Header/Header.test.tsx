import { render as r, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Header from "./index";

// Fetch mock if fetching from external API

describe("Header", () => {
  const render = () => {
    return r(
      <Provider store={store}>
        <Header
          user={{
            id: 1,
            firstName: "Anna",
            lastName: "Anne",
            email: "annaanne@qliro.com ",
            dateOfBirth: "19901230-4567",
            phoneNumber: "+46721234567",
            shippingAddress: {
              street: "Qlirovägen",
              streetNumber: 123,
              zipCode: "12345",
              city: "Stockholm",
              country: "Sweden",
            },
            invoiceAddress: {
              street: "Qlirovägen",
              streetNumber: 123,
              zipCode: "12345",
              city: "Stockholm",
              country: "Sweden",
            },
          }}
          searchResult={[
            {
              id: 2,
              firstName: "Sam",
              lastName: "Öjling",
              email: "s.ojling@gmail.com ",
              dateOfBirth: "19900214-1234",
              phoneNumber: "+14153219307",
              shippingAddress: {
                street: "Dalagatan",
                streetNumber: 68,
                zipCode: "113 24",
                city: "Stockholm",
                country: "Sweden",
              },
              invoiceAddress: {
                street: "Mason Street",
                streetNumber: 1325,
                zipCode: "94133",
                city: "San Francisco",
                country: "United States",
              },
            },
          ]}
        />
        ,
      </Provider>,
    );
  };

  it("renders the input with the default value", () => {
    const { getByDisplayValue } = render();
    expect(getByDisplayValue("Anna Anne (19901230-4567)")).toBeInTheDocument();
  });

  it("displays the search results when searching", () => {
    const { getByTestId, getByText } = render();

    waitFor(() => {
      fireEvent.change(getByTestId("search"), {
        target: { value: "Sam" },
      });
    });

    expect(getByText("Sam Öjling (19900214-1234)")).toBeInTheDocument();
  });
});
