import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { selectOrdersStore } from "./store/reducers/orderReducer";
import { selectUserStore } from "./store/reducers/userReducer";
import { fetchOrdersAsync } from "./store/reducers/orderReducer";
import { fetchUsersAsync } from "./store/reducers/userReducer";
import Header from "./components/Header";
import CustomerSection from "./features/CustomerSection";
import OrdersTable from "./features/OrdersTable";

function App() {
  const userStore = useAppSelector(selectUserStore);
  const ordersStore = useAppSelector(selectOrdersStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrdersAsync());
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <Header user={userStore.user} searchResult={userStore.searchResult} />
      {userStore.loading || ordersStore.loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <CustomerSection user={userStore.user} />
          <OrdersTable user={userStore.user} orders={ordersStore.orders} />
        </>
      )}
    </div>
  );
}

export default App;
