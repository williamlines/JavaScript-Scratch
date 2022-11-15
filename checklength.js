const isPhoneNumber = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (numberArray) => {
  return numberArray.filter(isPhoneNumber);
};

const generateSingleMessage = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
};

const generateMessages = (names, newFunction) => {
  return names.map(newFunction);
};

const generateSingleMessageDiscount = (name) => {
  return `Hi ${name.name}! ${name.discount}% off our best candies for you today!`;
};

const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

module.exports = {
  isPhoneNumber,
  filterLongNumbers,
  generateSingleMessage,
  generateMessages,
  generateSingleMessageDiscount,
  numbers,
  names,
  namesAndDiscounts,
};
