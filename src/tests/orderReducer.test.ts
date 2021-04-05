import orderReducer from "../store/reducers/orderReducer";

describe("order reducer", () => {
  it("should handle initial state", () => {
    expect(orderReducer(undefined, { type: "unknown" })).toEqual({
      orders: [],
      status: "idle",
    });
  });
});
