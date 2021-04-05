import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectOrders } from "../store/reducers/orderReducer";
import { selectUser } from "../store/reducers/userReducer";
import { fetchOrdersAsync } from "../store/reducers/orderReducer";
import { fetchUserAsync } from "../store/reducers/userReducer";

const Orders: React.VFC = () => {
  const user = useAppSelector(selectUser);
  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrdersAsync());
    dispatch(fetchUserAsync());
  }, [user, orders, dispatch]);

  return <p>Orders table goes here</p>;
};

export default Orders;
