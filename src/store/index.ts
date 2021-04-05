import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userState from "./reducers/userReducer";
import orderState from "./reducers/orderReducer";

export const store = configureStore({
  reducer: { userState, orderState },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
