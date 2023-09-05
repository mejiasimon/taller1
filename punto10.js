function alimentos(nombre, tipo, nivelEnergia) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.nivelEnergia = nivelEnergia;
}

function crearAlimentos() {
  let comidas = [];
  let tipo = ["vegetal", "animal", "insecto"];
  for (let index = 1; index <= 300; index++) {
    let randomTipo = Math.floor(Math.random() * tipo.length);
    let randomEnergy = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    var a = new alimentos(`nombre${index}`, tipo[randomTipo], randomEnergy);
    comidas.push(a);
  }
  return comidas;
}
function seleccionarDieta(totalEnergia) {
  var comidas = crearAlimentos();
  var filtro = comidas.filter((alimento) => {
    return alimento.nivelEnergia > 200 && alimento.tipo === "vegetal";
  });
  setTimeout(() => {
    filtro.forEach((alimento) => {
      console.log(
        "la dieta puede estar compuesta por: ",
        alimento.nombre,
        " que esta compuesto por: ",
        alimento.tipo,
        " y tiene una energia de :",
        alimento.nivelEnergia,
        " puntos"
      );
    });
    console.log(
      `el total de energua consumida por grogu en alimento vegetal es : ${totalEnergia(
        filtro
      )}`
    );
  }, 5000);
}

seleccionarDieta((filtro) => {
  let total = 0;
  filtro.forEach((alimento) => {
    total = total + alimento.nivelEnergia;
  });
  return total;
});
