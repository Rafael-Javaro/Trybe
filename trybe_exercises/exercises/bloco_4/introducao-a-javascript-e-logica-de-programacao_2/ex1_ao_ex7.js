let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*
1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/
for (let i = 0; i < numbers.length; i += 1){

    console.log("Resposta Ex1: "+ numbers[i]);
};

/*2.Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;*/
let sum = 0;
for (i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}
console.log("Resposta Ex2: " + sum);


/*3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/
sum = 0
for (i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}
console.log("Resposta Ex3: " + sum / numbers.length);

/*4.Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
sum = 0;
for (i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
} if (sum / numbers.length > 20){
    console.log("Resposta Ex4: " + "valor maior que 20");
} else {
    console.log("Resposta Ex4: " + "valor menor ou igual a 20");
};

/*5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/
let biggestNumber = Math.max(numbers);
console.log(biggestNumber);



/*6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

/*7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/