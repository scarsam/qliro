import { IUser } from "../../api/userAPI"; // Move into types folder
import { IOrder } from "../../api/ordersAPI"; // Move into types folder
import styles from "./OrdersTable.module.scss";
import Table from "../../components/Table";
import RowCard from "../../components/RowCard";

const OrdersTable: React.VFC<{ user: IUser | null; orders: IOrder[] }> = ({
  user,
  orders,
}) => {
  if (!user) return null;

  console.log(orders);
  const { firstName } = user;
  return (
    <section className={styles.container}>
      <h2>{firstName}'s orders</h2>
      <div className={styles.content}>
        <Table
          columns={[
            "Order number",
            "Created",
            "Store",
            "Payment method",
            "Payment status",
            "Amount",
          ]}
        >
          {orders.map((order: IOrder) => {
            return (
              <RowCard
                key={order.id}
                label={order.label}
                orderNumber={order.orderNumber}
                country={order.country}
                created={order.created}
                cardNumber={order.cardNumber}
                store={order.store}
                paymentMethod={order.paymentMethod}
                paymentProvider={order.paymentProvider}
                status={order.status}
                amount={order.amount}
              />
            );
          })}
        </Table>
      </div>
    </section>
  );
};

export default OrdersTable;
