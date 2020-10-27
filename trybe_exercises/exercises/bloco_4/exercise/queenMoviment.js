//Posição da Rainha
let posicaoRainhaX = 4;
let posicaoRainhaY = 4;

//Posição da Peça    
let posicaoPecaX = 4;
let posicaoPecaY = 8;

//Verifica se o ataque pode ocorrer
let ataqueBemSucedido = false;

if(posicaoRainhaX == posicaoPecaX || posicaoRainhaY == posicaoPecaY){
    ataqueBemSucedido = true;
}
//Diagonal Superior Direita
for(let supDir = 1; supDir < 8; supDir += 1){
    let rainhaLinha = posicaoRainhaX + supDir;
    let rainhaColuna = posicaoRainhaY + supDir;

    if (rainhaLinha > 8 || rainhaColuna > 8){
        break;
    }

    if ((posicaoPecaX == rainhaLinha) && (posicaoPecaY == rainhaColuna)){
        ataqueBemSucedido = true;
    }
}
console.log(ataqueBemSucedido);