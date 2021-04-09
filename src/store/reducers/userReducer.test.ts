import userReducer, { searchUsers, changeUser } from "./userReducer";

describe("user reducer", () => {
  const initialState = {
    user: null,
    users: [
      {
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
      },
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
    ],
    searchResult: [],
    loading: false,
  };

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      user: null,
      users: [],
      searchResult: [],
      loading: false,
    });
  });

  it("should searching for the user", () => {
    const actual = userReducer(initialState, searchUsers("Sam"));
    expect(actual.searchResult).toEqual([{ ...initialState.users[1] }]);
  });

  it("should change the user", () => {
    const actual = userReducer(initialState, changeUser(1));
    expect(actual.user).toEqual(actual.users[0]);
  });
});
