
function planeta(nombre,latitud,longitud,nivelOxigeno,volumenAgua){
    this.nombre=nombre
    this.latitud=latitud
    this.longitud=longitud
    this.nivelOxigeno=nivelOxigeno
    this.volumenAgua=volumenAgua
}
var planetas=[]
for (let i = 0; i <= 15; i++) {
    let randomNivelOxigeno=Math.floor(Math.random()*100)
    let randomvolumenAgua=Math.floor(Math.random()*10000)
    let randomNLatitud=Math.random()
    let randomNLongitud=Math.random()
 let p = new planeta("simon",randomNLatitud,randomNLongitud,randomNivelOxigeno,randomvolumenAgua)
    planetas.push(p)
}
console.log(planetas)