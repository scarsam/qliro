import orderReducer from "./orderReducer";

describe("order reducer", () => {
  it("should handle initial state", () => {
    expect(orderReducer(undefined, { type: "unknown" })).toEqual({
      orders: [],
      loading: false,
    });
  });
});
