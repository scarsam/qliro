import { IUser } from "../../api/userAPI"; // Move into types folder
import { IOrder } from "../../api/ordersAPI"; // Move into types folder
import styles from "./OrdersTable.module.scss";

const OrdersTable: React.VFC<{ user: IUser | null; orders: IOrder[] | [] }> = ({
  user,
  orders,
}) => {
  if (!user) return null;

  const { firstName, lastName } = user;
  <p>{JSON.stringify(orders)}</p>;
  return (
    <p>
      Customer section {firstName}
      {lastName}
    </p>
  );
};

export default OrdersTable;
