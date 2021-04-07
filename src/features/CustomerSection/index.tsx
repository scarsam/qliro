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
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
        </InfoBlock>
        <InfoBlock icon={ShippingIcon} title="Shipping address">
          <address>
            {shippingAddress.street} {shippingAddress.streetNumber},
          </address>
          <address>
            {shippingAddress.zipCode} {shippingAddress.city}{" "}
            {shippingAddress.country}
          </address>
        </InfoBlock>
        <InfoBlock icon={InvoiceIcon} title="Invoice address">
          <address>
            {invoiceAddress.street} {invoiceAddress.streetNumber},
          </address>
          <address>
            {invoiceAddress.zipCode} {invoiceAddress.city}{" "}
            {invoiceAddress.country}
          </address>
        </InfoBlock>
      </div>
    </section>
  );
};

export default CustomerSection;
