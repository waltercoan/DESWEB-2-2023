function soma(a,b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(a+b);
        },500);
    });
}
soma(2,2).then(function(resultado){
    console.log(resultado);
})