const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
  };

const skillslist = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}: ${student[arrayOfSkills[index]]}`);
    }
}

skillslist(student1);
console.log('------');
skillslist(student2);
console.log('-------');



const skillslist2 = (student) => {
    const pairOfKeysValues = Object.entries(student);
    for (let index in pairOfKeysValues) {
        console.log(`${pairOfKeysValues[index][0]}: ${pairOfKeysValues[index][1]}.`);
    }
}

skillslist2(student1);
console.log('------');
skillslist2(student2);
