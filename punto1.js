var coordsX = 150;
var coordsY = 30;
var coordsX2 = 6;
var coordsY2 = 20;
var distancia = (x1, y1, x2, y2) => {
  return (resultado = Math.sqrt(
    Math.pow(x1, 2) - Math.pow(y1, 2) + (Math.pow(x2, 2) - Math.pow(y2, 2))
  ));
};
console.log(
  `${distancia(coordsX, coordsY, coordsX2, coordsY2)} metros de distancia`
);
