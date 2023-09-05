var accesCodes = [
  "ARQ2555: Sara bel-sun",
  "ARQ2556: nodin chavdi",
  "ARQ2557: finn",
];
var pilots = new pilot(accesCodes);
function pilot(accescodes) {
  let names = [];
  accescodes.forEach((element) => {
    let obtainName = element.split(":");
    names.push(obtainName[1]);
  });
  return names;
}
console.log(pilots);
