  /**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
const oldEnough = people.filter(person => person.age>=21);
console.log(oldEnough)

const paul = people.filter(obj => obj.name == 'Paul');
console.log(paul);



  
// Complex Filtering
const students = [
{
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
    { name: 'javascript', yrsExperience: 1 },
    { name: 'html', yrsExperience: 5 },
    { name: 'css', yrsExperience: 3 },
    ]
},
{
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
    { name: 'javascript', yrsExperience: 0 },
    { name: 'html', yrsExperience: 4 },
    { name: 'css', yrsExperience: 2 },
    ]
},
{
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
    { name: 'javascript', yrsExperience: 1 },
    { name: 'html', yrsExperience: 1 },
    { name: 'css', yrsExperience: 5 },
    ]
},
];

// Filter with one code
const candidates = students.filter(student => {
let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
return strongSkills.length > 0;
})
console.log(candidates);

// Devide StrongSkills filter from the const candidate0 filter
const hasStrongSkills = student => {
let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
return strongSkills.length > 0;
}
const candidates0 = students.filter(hasStrongSkills);
console.log(candidates0);

// Devide yrsExperience filter AND StrongSkills filter
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills1 = student => student.skills.filter(has5yearsExp).length > 0;
const candidate1 = students.filter(hasStrongSkills);
console.log(candidate1);
