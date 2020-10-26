
let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let numerosJogados1 = [4, 8, 15, 16, 23, 42];
let numerosJogados2 = [5, 10, 20, 32, 45, 59];
let numerosJogados3 = [3, 7, 18, 25, 46, 57];
let jogosMegaSena = [numerosJogados1, numerosJogados2, numerosJogados3];

let numerosDeAcertos;

for (let game = 0; game < jogosMegaSena.length; game += 1) {
     numerosDeAcertos = 0;
    for (let iMega = 0; iMega < megaSenaNumbers.length; iMega += 1){
        for (let i = 0; i < jogosMegaSena[game].length; i += 1){
            if (megaSenaNumbers[iMega] === jogosMegaSena[game][i]){
                 numerosDeAcertos += 1;
            }
        }
    }
    console.log(`Resultado da Mega: ${megaSenaNumbers}`);
    console.log(`Jogo ${game + 1}: ${jogosMegaSena[game]}`)
    console.log('Numero de Acertos: ' + numerosDeAcertos);
    console.log("-------------------");
};
