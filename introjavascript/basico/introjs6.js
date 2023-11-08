var x = 43;
console.log(x == 43);    //true
console.log(x == "43");  //true
console.log(x === 43);   //true
console.log(x === "43"); //false

var estado = "SP";
switch(estado){
    case "SC": case "SP":
        console.log("Santa Catarina");
    break;
    case "PR":
        console.log("Paraná");
    break;
    default:
        console.log("Nenhuma das opções");
}

//for(inicio ; cond cont ; inc/dec ){
for(var i=0; i<=10; i++){
    console.log("Rodando");
}
var cont = 0;
do{
    cont++;
}while(cont < 2);

var cont2 = 0;
console.log(cont2++);
console.log(++cont2);

var frutas = ['laranja','banana','maca']
for (let umafruta in frutas){
    console.log(frutas[umafruta]);
}