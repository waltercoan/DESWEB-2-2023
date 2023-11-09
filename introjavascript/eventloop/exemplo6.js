function soma(a,b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(a+b);
        },500);
    });
}

(async function(){
    let resultado = await soma(2,2);
    console.log(resultado);
})();