function soma(a, b){
    setTimeout(function(){
            return a + b;
    }, 500);
    // return undefied; // (implicito)
}

let resultado = soma(2,2);
console.log(resultado);