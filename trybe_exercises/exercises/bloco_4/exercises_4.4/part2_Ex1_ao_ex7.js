/**1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: 

verificaPalindrome("arara");
Retorno esperado: true

verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/


function verificaPalindrome(palavra){

let string = "";
let newString = "";

    for (let i = 0; i < palavra.length; i += 1) {
        string += palavra[i];
    }

    for (let i2 = palavra.length - 1; i2 >= 0; i2 -= 1) {
        newString += palavra[i2];
    }
    if(string === newString){
       console.log(true);
    } else {
        console.log(false);
    }
};


verificaPalindrome("arara");
verificaPalindrome("desenvolvimento");

console.log("-------------------------");

/**2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

function biggestValuePosition(par){
let biggestValue = 0;
for (let i = 0; i < par.length; i += 1){
    if(par[i] > biggestValue){
        biggestValue = par[i];
        biggestValuePosition = i;
    }
}
console.log(biggestValuePosition);
};

let array = [2, 3, 6, 7, 10, 1];
biggestValuePosition(array);

console.log("-------------------------");

/**3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
 */


function smallestValuePosition(par){
    let smallestValue = 0;
    for (let i = 0; i < par.length; i += 1){
        if(par[i] < smallestValue){
            smallestValue = par[i];
            smallestValuePosition = i;
        }
    }
    console.log(smallestValuePosition);
    };
    
    let arr = [2, 4, 6, 7, 10, 0, -3];
    smallestValuePosition(arr);
    
    console.log("-------------------------");

/**4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];