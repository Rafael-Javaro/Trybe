function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  /* Ex . #1
  /O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li> */

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const monthDay = dezDaysList[i];
        const monthDayListItem = document.createElement('li');
        monthDayListItem.innerHTML = monthDay;
        monthDayListItem.className = 'Day';
        if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
            monthDayListItem.classList.add('holiday');
        }
        if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25 ) {
            monthDayListItem.classList.add('friday');
        }

        monthDaysList.appendChild(monthDayListItem);
    };
  };

  createDaysOfTheMonth();

  /* Ex . #2
   Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

function criaBotaoFeriado() {
    const button = document.createElement('button');
    button.innerHTML = 'Feriados';
    button.id = '#btn-holiday';
    const buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(button);
};
criaBotaoFeriado();
    
