function planeta(nombre, latitud, longitud, nivelOxigeno, volumenAgua) {
  this.nombre = nombre;
  this.latitud = latitud;
  this.longitud = longitud;
  this.nivelOxigeno = nivelOxigeno;
  this.volumenAgua = volumenAgua;
}
var planetas = [];
for (let i = 1; i <= 15; i++) {
  let randomNivelOxigeno = Math.floor(Math.random() * 100);
  let randomvolumenAgua = Math.floor(Math.random() * 10000);
  let randomNLatitud = Math.random();
  let randomNLongitud = Math.random();
  let p = new planeta(
    `planeta${i}`,
    randomNLatitud,
    randomNLongitud,
    randomNivelOxigeno,
    randomvolumenAgua
  );
  planetas.push(p);
}

let procesarPlanetas = (planetas) => {
  let datos = [];
  let cantidadAgua = 0;
  let cantidadOxigeno = 0;
  planetas.forEach((element) => {
    cantidadAgua = cantidadAgua + element.volumenAgua;
    cantidadOxigeno = cantidadOxigeno + element.nivelOxigeno;
  });
  datos.push(cantidadAgua);
  datos.push(cantidadOxigeno / planetas.length);
  return datos;
};

let nivelOxigeno = (planetas) => {
  let filtroOxigeno = planetas.filter(({ nivelOxigeno }) => {
    return nivelOxigeno < 15;
  });
  return filtroOxigeno;
};
let volumenAgua = (planetas) => {
  let filtroAgua = planetas.filter(({ volumenAgua }) => {
    volumenAgua < 1000;
  });
  console.log(filtroAgua);
  return filtroAgua;
};

let [cantidadAgua, cantidadOxigeno] = procesarPlanetas(planetas);
console.log(
  `la cantidad total de agua es: ${cantidadAgua} metros cubicos y el promedio de oxigeno es de ${cantidadOxigeno}%`
);
let contenido1 = nivelOxigeno(planetas);
let contenido2 = volumenAgua(planetas);
if (contenido1.length > 1) {
  console.log(`los planetas con el nivel de oxigeno inferior a 15% son: `);
  contenido1.map((element) => {
    console.log(
      `el ${element.nombre} con latitud ${element.latitud} con longitud ${element.longitud} con un nivel de oxigeno de ${element.nivelOxigeno}% y un volumen de agua de ${element.volumenAgua} metros cubicos`
    );
  });
} else {
  console.log("no hay planetas con un nivel de oxigeno menor a 15%");
}
if (contenido2.length > 1) {
  console.log(
    `los planetas con el nivel de agua inferior a 1000 metros cubicos son: `
  );
  contenido2.map((element) => {
    console.log(
      `el ${element.nombre} con latitud ${element.latitud} con longitud ${element.longitud} con un nivel de oxigeno de ${element.nivelOxigeno}% y un volumen de agua de ${element.volumenAgua} metros cubicos`
    );
  });
} else {
  console.log(
    "no hay planetas con un nivel de agua inferior a los 1000 metros cubicos"
  );
}
