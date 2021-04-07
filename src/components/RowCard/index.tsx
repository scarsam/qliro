import styles from "./RowCard.module.scss";
import { countryIcons, paymentIcons } from "../../utils/iconsMapper";
import { maskCardNumber } from "../../utils/maskCardNumber";
import RightArrow from "../../assets/icons/RightArrow.svg";
import UpsellIcon from "../../assets/icons/Upsell.svg";
import { IOrder } from "../../api/ordersAPI";

const concatStr = (str: string | undefined) =>
  str ? str.split(" ").join("") : "";

const RowCard: React.VFC<Partial<IOrder>> = ({
  label,
  orderNumber,
  created,
  country,
  cardNumber,
  store,
  paymentMethod,
  paymentProvider,
  status,
  amount,
  upsell,
}) => {
  return (
    <tr className={styles.rowCard}>
      <td className={`${styles.label} ${label}`}>
        {label}{" "}
        {upsell ? (
          <span className={styles.upsell}>
            <img src={UpsellIcon} alt="upsell icon" />
          </span>
        ) : null}
      </td>
      <td className={styles.orderNumber}>
        {orderNumber} <img src={RightArrow} alt={orderNumber} />
      </td>
      <td>{created}</td>
      <td className={styles.store}>
        <img src={countryIcons(country)} alt={orderNumber} /> {store}
      </td>
      <td className={styles.paymentMethod}>
        <div className={styles.paymentMethodCard}>
          <div className={styles.paymentMethodWrapper}>
            <img src={paymentIcons(paymentProvider)} alt={orderNumber} />
          </div>
        </div>{" "}
        {paymentMethod}
        {cardNumber ? `, ${maskCardNumber(cardNumber)}` : ""}
      </td>
      <td>
        <span className={concatStr(status)}></span>
        {status}
      </td>
      <td>{amount}</td>
    </tr>
  );
};

export default RowCard;
