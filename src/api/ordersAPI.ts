export type IOrder = {
  label: string;
  orderNumber: string;
  created: string;
  country: string;
  store: string;
  paymentMethod: string;
  cardNumber: number | null;
  paymentProvider: string;
  status: string;
  amount: string;
  userId: number;
};

export function fetchOrders() {
  return new Promise<IOrder[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            label: "Online",
            orderNumber: "1234567890",
            created: "05 maj, 12:33",
            country: "UK",
            store: "Butik X",
            paymentMethod: "Invoice",
            cardNumber: null,
            paymentProvider: "Qliro",
            status: "Paid",
            amount: "2160 kr",
            userId: 1,
          },
          {
            label: "Instore",
            orderNumber: "1234567890",
            created: "16 maj, 12:33",
            country: "SE",
            store: "Butik X",
            paymentMethod: "Card",
            cardNumber: 123456789,
            paymentProvider: "VISA",
            status: "In progress",
            amount: "3890 kr",
            userId: 1,
          },
          {
            label: "Manual",
            orderNumber: "1234567890",
            created: "20 maj, 12:33",
            country: "NO",
            store: "Butik X",
            paymentMethod: "Card",
            cardNumber: 123456789,
            paymentProvider: "AMEX",
            status: "Failed",
            amount: "1134 kr",
            userId: 1,
          },
          {
            label: "Online",
            orderNumber: "1234567890",
            created: "24 maj, 12:33",
            country: "SE",
            store: "Butik X",
            paymentMethod: "Paypal",
            cardNumber: null,
            paymentProvider: "Paypal",
            status: "In progress",
            amount: "567 kr",
            userId: 1,
          },
          {
            label: "Instore",
            orderNumber: "1234567890",
            created: "24 maj, 12:33",
            country: "NO",
            store: "Butik X",
            paymentMethod: "Trustly",
            cardNumber: null,
            paymentProvider: "Trustly",
            status: "Paid",
            amount: "8970 kr",
            userId: 1,
          },
        ]),
      500,
    ),
  );
}
