function soma(a, b, fun_avisa){
    setTimeout(function(){
        fun_avisa(a + b);
    }, 500);
    // return undefied; // (implicito)
}

let resultado = soma(2,2, function(outroresultado){
    console.log(outroresultado);
});
