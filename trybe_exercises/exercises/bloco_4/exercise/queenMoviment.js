//Posição da Rainha
let posicaoRainhaX = 4;
let posicaoRainhaY = 4;

//Posição da Peça    
let posicaoPecaX = 4;
let posicaoPecaY = 7;

//Verifica se o ataque pode ocorrer
let ataqueBemSucedido = false;

if(posicaoRainhaX === posicaoPecaX || posicaoRainhaY === posicaoPecaY){
    ataqueBemSucedido = true;
}
console.log(ataqueBemSucedido);