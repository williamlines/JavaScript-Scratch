const addToBatch = (array, number) => {
  if (array.length < 5) {
    return array.concat(number);
  } else {
    return array;
  }
};

console.log(addToBatch([3, 4], 5));
console.log(addToBatch([3, 4, 5, 6], 7));
console.log(addToBatch([3, 4, 5, 6, 7], 8));
