/**
 * command node map.js in the terminal
 */

// using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2});
console.log(simplified);

// Simplified w/ map() + arrow function
const simpliArrow = nums.map(num => num *2);
console.log(simpliArrow);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  const studentWithIds = students.map(obj => [obj.name, obj.id]);
  console.log(studentWithIds);

  // return object with id and name property intact
  const objIdName = students.map(obj => this.name, this.id);

  console.log(objIdName);


