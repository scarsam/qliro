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
export function fetchUsers() {
  return new Promise<IUser[]>((resolve) =>
    setTimeout(() => {
      const users = [
        {
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
        },
        {
          id: 2,
          firstName: "Sam",
          lastName: "Öjling",
          email: "s.ojling@gmail.com ",
          dateOfBirth: "19900214-1234",
          phoneNumber: "+14153219307",
          shippingAddress: {
            street: "Dalagatan",
            streetNumber: 68,
            zipCode: "113 24",
            city: "Stockholm",
            country: "Sweden",
          },
          invoiceAddress: {
            street: "Mason Street",
            streetNumber: 1325,
            zipCode: "94133",
            city: "San Francisco",
            country: "United States",
          },
        },
      ];

      // const user =
      //   users.find((user) => user.firstName.includes(userName)) || users[0];
      // resolve(user);
      resolve(users);
    }, 500),
  );
}
