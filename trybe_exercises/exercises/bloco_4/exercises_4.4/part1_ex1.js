let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  /*1.Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida*/

console.log("Bem-vinda, " + info.personagem + "!");

console.log("---------------------");

/*2.Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
Valor Esperado:
                       {
 personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
}
*/

info.recorrente = "Sim";

console.log(info);

console.log("---------------------");

/* 3.Faça um for/in que mostre todas as chaves do objeto.

Valor Esperado:
 personagem
  origem
  nota
  recorrente

*/

for (key in info){
    console.log(key);
};

console.log("------------------------");

/* 4.Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
Valor Esperado:
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
*/

for (key in info){
    console.log(info[key]);
}
console.log("------------------------");