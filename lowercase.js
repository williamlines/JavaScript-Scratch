const lowerCase = (message) => {
  return message.toLowerCase();
};

const transform = (message, transformationFunction) => {
  return transformationFunction(message);
};

module.exports = { lowerCase, transform };
