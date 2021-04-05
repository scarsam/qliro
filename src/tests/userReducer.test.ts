import userReducer from "../store/reducers/userReducer";

describe("user reducer", () => {
  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      user: null,
      status: "idle",
    });
  });
});
