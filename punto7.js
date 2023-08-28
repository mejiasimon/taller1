let numbers=[10,28,40,-1,-10,2,0.5,0.2,2.5,100]
function lowestnumber (numbers){
    let absolute=numbers.map((numb)=> {return(Math.abs(numb))});
    let organized=absolute.sort((a,b)=>a-b)
    return(console.log(`el numero mas pequeño de todo el array es:${organized[0]}`))
}
lowestnumber(numbers)


