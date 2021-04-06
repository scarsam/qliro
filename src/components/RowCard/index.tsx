import styles from "./RowCard.module.scss";

interface IRowCard {
  label: string;
  orderNumber: string; // Number
  created: string; // Date
  store: string;
  paymentMethod: string;
  paymentProvider: string;
  status: string;
  amount: string; // Number
}

const RowCard: React.VFC<IRowCard> = ({
  label,
  orderNumber,
  created,
  store,
  paymentMethod,
  paymentProvider,
  status,
  amount,
}) => {
  return (
    <tr className={styles.rowCard}>
      <td>{label}</td>
      <td>{orderNumber}</td>
      <td>{created}</td>
      <td>{store}</td>
      <td>{paymentMethod}</td>
      {/* <td>{paymentProvider}</td> */}
      <td>{status}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default RowCard;
