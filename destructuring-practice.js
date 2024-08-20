let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 80, art: 95 },
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 93, maths: 77, art: 95 },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 87, art: 95 },
    }
];





const makeList = (arr, student) => {
    const studentObj = arr.find(studentObj => studentObj.name === student);
    return studentObj.subjects;
}

let [ first, second, ...rest] = makeList(students, 'John');

console.log(first, second, rest);

// LMS Correct answer
// const makeList = (arr, student) => {
//     for(let itm of arr) {
//         if(itm.name == student) {
//           return itm.subjects;
//         }
//     }
// };



// Function to get subjects of a specific student by name
const getSubjectsByName = (name) => {
    const student = students.find(student => student.name === name);
    return student ? student.subjects : null; // Return subjects or null if not found
};
// Example usage
const emilySubjects = getSubjectsByName('Emily');
console.log(emilySubjects); // Output: ['science', 'english', 'art']

const johnSubjects = getSubjectsByName('John');
console.log(johnSubjects); // Output: ['art', 'cad', 'english', 'maths', 'science']

const unknownSubjects = getSubjectsByName('Unknown');
console.log(unknownSubjects); // Output: null