import SE from "../assets/icons/countries/SE.svg";
import NO from "../assets/icons/countries/NO.svg";
import UK from "../assets/icons/countries/UK.svg";
import AMEX from "../assets/icons/payment/AMEX.png";
import PAYPAL from "../assets/icons/payment/Paypal.png";
import QLIRO from "../assets/icons/payment/Qliro.svg";
import TRUSTLY from "../assets/icons/payment/Trustly.svg";
import VISA from "../assets/icons/payment/VISA.png";

export const countryIcons = (country: string | undefined) => {
  const mapper = {
    SE: SE,
    NO: NO,
    UK: UK,
  };

  const countryIcon = mapper[country as keyof typeof mapper];

  return countryIcon ? countryIcon : "";
};

export const paymentIcons = (method: string | undefined) => {
  const mapper = {
    AMEX: AMEX,
    Paypal: PAYPAL,
    Qliro: QLIRO,
    Trustly: TRUSTLY,
    VISA: VISA,
  };

  const paymentIcon = mapper[method as keyof typeof mapper];

  return paymentIcon ? paymentIcon : "";
};
