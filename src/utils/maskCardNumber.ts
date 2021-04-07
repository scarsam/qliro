export const maskCardNumber = (cardNumber: number) => {
  const cardNumberStr = cardNumber.toString();
  const lastFour = cardNumberStr.slice(0, 4);

  return `•••• ${lastFour}`;
};
