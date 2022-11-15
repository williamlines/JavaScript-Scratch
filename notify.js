const notifyByEmail = (email) => {
  return `Email sent to : ${email}`;
};

const notifyByText = (number) => {
  return `Text sent to : ${number}`;
};

const notify = (contact, notifyFunction) => {
  return notifyFunction(contact);
};

console.log(notify("hello@makers.tech", notifyByEmail));
console.log(notify("0123854435", notifyByText));
