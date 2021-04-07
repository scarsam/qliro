import { IUser } from "../../api/userAPI"; // Move into types folder
import { IOrder } from "../../api/ordersAPI"; // Move into types folder
import styles from "./OrdersTable.module.scss";
import Table from "../../components/Table";
import RowCard from "../../components/RowCard";
import Pagination from "../../components/Pagination";
import Tooltip from "../../components/Tooltip";

const OrdersTable: React.VFC<{ user: IUser | null; orders: IOrder[] }> = ({
  user,
  orders,
}) => {
  if (!user) return null;

  const { firstName } = user;
  return (
    <section className={styles.container}>
      <div className={styles.userBar}>
        <h2>{firstName}'s orders</h2>
        <Tooltip label="Help" />
      </div>
      <div className={styles.overflowScroll}>
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
                upsell={order.upsell}
              />
            );
          })}
        </Table>
      </div>
      <Pagination totalPages={2} />
    </section>
  );
};

export default OrdersTable;
