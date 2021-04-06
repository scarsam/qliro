import InfoBlock from "../../components/InfoBlock";
import { IUser } from "../../api/userAPI"; // Move into types folder
import styles from "./CustomerSection.module.scss";
import EmailPhoneIcon from "../../assets/icons/EmailPhone.svg";
import ShippingIcon from "../../assets/icons/Shipping.svg";
import InvoiceIcon from "../../assets/icons/Invoice.svg";

const CustomerSection: React.VFC<{ user: IUser | null }> = ({ user }) => {
  if (!user) return null;

  const {
    firstName,
    email,
    phoneNumber,
    shippingAddress,
    invoiceAddress,
  } = user;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <InfoBlock icon={EmailPhoneIcon} title={`Contact ${firstName}`}>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </InfoBlock>
        <InfoBlock icon={ShippingIcon} title="Shipping address">
          <p>
            {shippingAddress.street} {shippingAddress.streetNumber},
          </p>
          <p>
            {shippingAddress.zipCode} {shippingAddress.city}{" "}
            {shippingAddress.country}
          </p>
        </InfoBlock>
        <InfoBlock icon={InvoiceIcon} title="Invoice address">
          <p>
            {invoiceAddress.street} {invoiceAddress.streetNumber},
          </p>
          <p>
            {invoiceAddress.zipCode} {invoiceAddress.city}{" "}
            {invoiceAddress.country}
          </p>
        </InfoBlock>
      </div>
    </section>
  );
};

export default CustomerSection;
