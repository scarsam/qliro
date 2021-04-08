import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { fetchOrders, IOrder } from "../../api/ordersAPI";

export interface OrderState {
  orders: IOrder[] | [];
  loading: boolean;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
};

export const fetchOrdersAsync = createAsyncThunk(
  "user/fetchOrders",
  async () => {
    const response = await fetchOrders();
    return response;
  },
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrdersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      });
  },
});

export const selectOrdersStore = (state: RootState) => state.orderState;

export default ordersSlice.reducer;
