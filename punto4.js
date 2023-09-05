let sabers = [2, 3, -5, -9, 10, 11, 13, -11];
let quantity = sabers.filter((energia) => {
  return energia < 0;
});
console.log(quantity);
console.log(quantity.length);
