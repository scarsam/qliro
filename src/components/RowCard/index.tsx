import styles from "./RowCard.module.scss";
import { countryIcons, paymentIcons } from "../../utils/iconsMapper";
import { maskCardNumber } from "../../utils/maskCardNumber";
import RightArrow from "../../assets/icons/RightArrow.svg";
interface IRowCard {
  label: string;
  orderNumber: string; // Number
  created: string; // Date
  country: string;
  cardNumber: number | null;
  store: string;
  paymentMethod: string;
  paymentProvider: string;
  status: string;
  amount: string; // Number
}

const concatStr = (str: string) => (str ? str.split(" ").join("") : "");

const RowCard: React.VFC<IRowCard> = ({
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
}) => {
  return (
    <tr className={styles.rowCard}>
      <td className={`${styles.label} ${label}`}>{label}</td>
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
