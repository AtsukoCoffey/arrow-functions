let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [ ...students[0].subjects];
// This modifies the original array item and returns the new length of the array, 
// not the array itself. the return value of push is the new length of the array (a number), not the array itself. 
// const update = (item, val) => item.push(val);
// Therefore should modify the update function to return the item array after pushing the value:
const update = (item, val) => {
    item.push(val);
    return item
}
let updatedSubjects = update(subjects, "Electronics");
console.log(updatedSubjects);
console.log(students[0]);


// LMS Correct answer was Using SPREAD OPERATOR !!
const update0 = (item, val) => [ ...item, val];