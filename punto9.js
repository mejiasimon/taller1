function padawan(nombre, planeta, edad, estatura) {
  this.nombre = nombre;
  this.planeta = planeta;
  this.edad = edad;
  this.estatura = estatura;
}

let generarPadawans = (verificarEdad) => {
  var padawans = [];
  for (let i = 1; i <= 1000; i++) {
    let randomEdad = Math.floor(Math.random() * 100);
    let randomEstatura = Math.floor(Math.random() * 200);
    var p = new padawan(
      `padawan${i}`,
      `planeta${i}`,
      randomEdad,
      randomEstatura
    );
    verificarEdad(p);
    padawans.push(p);
  }
};

generarPadawans((padawan) => {
  if (padawan.edad <= 15) {
    console.log(
      `el padawan ${padawan.nombre} del planeta ${padawan.planeta} con edad de ${padawan.edad} tiene que estudiar manejo de la fuerza `
    );
  } else if (padawan.edad > 15) {
    console.log(
      `el padawan ${padawan.nombre} del planeta ${padawan.planeta} con edad de ${padawan.edad} tiene que estudiar manejo del sable`
    );
  }
});
