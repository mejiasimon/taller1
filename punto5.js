var licenses = 3;
let calculate = (quantity) => {
  var imspuestos = 1500000 * quantity * 0.05;
  var subtotal = 3500000 + 1500000 * quantity - imspuestos;
  return subtotal;
};
console.log(calculate(licenses));
