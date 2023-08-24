let day1={
    min:10,
    max:22
}
let day2={
    min:10,
    max:22
}
let day3={
    min:10,
    max:22
}
let day4={
    min:10,
    max:22
}
let day5={
    min:10,
    max:22
}
let day6={
    min:10,
    max:22
}
let day7={
    min:10,
    max:22
}
let data=[day1,day2,day3,day4,day5,day6,day7]
calculate(data)
 function calculate(temperatures){
    let iterador=0
    let average=0
temperatures.map(({min,max})=>{
iterador=iterador+(min+max)
average=iterador/(temperatures.length*2)
})
console.log(average)
 }
