  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
}, 10);  //starting value 10
// .reduce((acc, curr) => a + b, 0)

// Summing an array of numbers:


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsExperience: 10
    }
  ];
  
// Totaling a specific object property   !! ALLWAYS specify the initial value for the accumulator
// SUM the total of a specific object property using < curr.yrsExperience >
const totalYrsExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYrsExperience);


// Grouping by a property, and totaling it too
// First {} is boundary of the callback function, sendary {} is an initial value
// {Developer: 12, Designer: 4}  <-- this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;  // The property want to sum
    if (!acc[key]) {            // If there is not - first time - add the profession value
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;  // 
    }
    return acc;
}, {});

console.log(experienceByProfession);

// TO aim this
// {
//     Developer: [ 'Andrew', 'Ariel'],
//     Designer: [ 'Micheal', 'Kelly'],
//     Manager: [ 'Mark']
// }
let roleMember = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [curr.name];
    } else {
        acc[key].push(curr.name);
    }
    return acc;
}, {});
console.log(roleMember);