let codes = [];
let ages = [];
var count = {};
for (let index = 1; index <= 20; index++) {
  const genRanHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  let randomNumber = Math.floor(Math.random() * 100);
  ages.push(randomNumber);
  codes.push(genRanHex(6));
}
console.log(ages);
ages.sort((a, b) => {
  return a - b;
});
console.log(ages);
console.log(`el soldado mas viejo es: ${ages[ages.length - 1]}`);
ages.forEach((i) => {
  count[i] = (count[i] || 0) + 1;
});
console.log(count);
const filter = Object.entries(count)
  .filter(([clave, cantidad]) => {
    return cantidad > 1;
  })
  .reduce((Obj, [clave, cantidad]) => {
    Obj[clave] = cantidad;
    return Obj;
  }, {});
console.log(filter);
