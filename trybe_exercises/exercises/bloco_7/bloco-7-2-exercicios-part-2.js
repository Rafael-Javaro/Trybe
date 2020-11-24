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
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
}

skillslist(student1);
console.log('------');
skillslist(student2);
