export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  shippingAddress: {
    street: string;
    streetNumber: number;
    zipCode: string;
    city: string;
    country: string;
  };
  invoiceAddress: {
    street: string;
    streetNumber: number;
    zipCode: string;
    city: string;
    country: string;
  };
}
export function fetchUser() {
  return new Promise<IUser>((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          firstName: "Anna",
          lastName: "Anne",
          email: "annaanne@qliro.com ",
          dateOfBirth: "19901230-4567",
          phoneNumber: "+46721234567",
          shippingAddress: {
            street: "Qlirovägen",
            streetNumber: 123,
            zipCode: "12345",
            city: "Stockholm",
            country: "Sweden",
          },
          invoiceAddress: {
            street: "Qlirovägen",
            streetNumber: 123,
            zipCode: "12345",
            city: "Stockholm",
            country: "Sweden",
          },
        }),
      500,
    ),
  );
}
