//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let quadradoDeAsteriscos;
let n = 5;
for (let i = 1; i <= n; i += 1){
    quadradoDeAsteriscos += " ";
 for (let i2 = 1; i2 <= i; i += 1){
    quadradoDeAsteriscos += "*";  
  }
};
console.log(quadradoDeAsteriscos);
