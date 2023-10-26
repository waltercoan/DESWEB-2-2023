//variavel hoisting (elevação/içamento)
void function(){
    console.log(mensagem);
}();
var mensagem = "zezinho";

var exibemensagem = function(){
    if(true){
        var escopofuncao = 'Caelum';
        let escopobloco = 'Alura';
        console.log(escopobloco);
    }

    console.log(escopofuncao);
    console.log(escopobloco);
}
exibemensagem();

void function(){
    const mensagem = "alura";
    console.log(mensagem);
    mensagem = "Caelum";
}();

function soma(x, y){
    return x + y;
}
console.log(soma(2,2))
console.debug()
console.info()
console.trace()
console.warn()
console.error()



