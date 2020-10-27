//Posição da Rainha
let posicaoRainhaX = 4;
let posicaoRainhaY = 4;

//Posição da Peça    
let posicaoPecaX = 8;
let posicaoPecaY = 4;

//Verifica se o ataque pode ocorrer
let ataqueBemSucedido = false;

if(posicaoRainhaX == posicaoPecaX || posicaoRainhaY == posicaoPecaY){
    ataqueBemSucedido = true;
}
//Diagonal Superior Direita
for(let supDir = 1; supDir < 8; supDir += 1){
    let rainhaLinha = posicaoRainhaX + supDir;
    let rainhaColuna = posicaoRainhaY + supDir;

    //Se o tabuleiro acabou, parar o Looping
    if (rainhaLinha > 8 || rainhaColuna > 8){
        break;
    }

    if ((posicaoPecaX == rainhaLinha) && (posicaoPecaY == rainhaColuna)){
        ataqueBemSucedido = true;
    }
}

//Diagonal Superior Esquerdo
for(let supEsq = 1; supEsq < 8; supEsq += 1){
    let rainhaLinha = posicaoRainhaX + supEsq;
    let rainhaColuna = posicaoRainhaY - supEsq;

    //Se o tabuleiro acabou, parar o Looping
    if (rainhaLinha > 8 || rainhaColuna < 1){
        break;
    }

    if ((posicaoPecaX == rainhaLinha) && (posicaoPecaY == rainhaColuna)){
        ataqueBemSucedido = true;
    }
}

//Diagonal Inferior Esquerdo
for(let infEsq = 1; infEsq < 8; infEsq += 1){
    let rainhaLinha = posicaoRainhaX - infEsq;
    let rainhaColuna = posicaoRainhaY - infEsq;

    //Se o tabuleiro acabou, parar o Looping
    if (rainhaLinha < 1 || rainhaColuna < 1){
        break;
    }

    if ((posicaoPecaX == rainhaLinha) && (posicaoPecaY == rainhaColuna)){
        ataqueBemSucedido = true;
    }
}

//Diagonal Inferior Dir
for(let infDir = 1; infDir < 8; infDir += 1){
    let rainhaLinha = posicaoRainhaX - infDir;
    let rainhaColuna = posicaoRainhaY + infDir;

    //Se o tabuleiro acabou, parar o Looping
    if (rainhaLinha < 1 || rainhaColuna > 8){
        break;
    }

    if ((posicaoPecaX == rainhaLinha) && (posicaoPecaY == rainhaColuna)){
        ataqueBemSucedido = true;
    }
}

if ((posicaoPecaX > 8 || posicaoPecaY > 8) || (posicaoPecaX < 1 || posicaoPecaY < 1)){
    console.log("Peça fora do Tabuleiro");
    ataqueBemSucedido = false;
}

if ((posicaoRainhaX > 8 || posicaoRainhaY > 8) || (posicaoRainhaX < 1 || posicaoRainhaY < 1)){
    console.log("Peça fora do Tabuleiro");
    ataqueBemSucedido = false;
}

console.log(ataqueBemSucedido);