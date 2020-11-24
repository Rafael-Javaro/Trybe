const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

/* const listSkillsWithFor = (student) => {
  const skillsHability = [];
  for(skill in student) {
    skillsHability.push(student[skill]);
  }

  return skillsHability;
}; */

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
//console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));