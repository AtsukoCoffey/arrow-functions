let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon' },
        results: { science: 93, maths: 95, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 79, art: 95 },
    }
];

// practice code - my answer -

const averagePoints = (arr, subject) => {
    let allPoints = [];
    // Check if any object in the array has the specified subject
    if (arr.some(obj => obj.subjects.includes(subject))) {
        // Push the result for the subject into subjectArray
        arr.forEach(obj => {
            if (obj.results[subject] !== undefined) {
                allPoints.push(obj.results[subject]);
            }
        });
        let total = allPoints.reduce((a, b) => a + b, 0);
        let average = total / allPoints.length;
        return average;
    }
};

let averageMarks = averagePoints(students, 'english');

console.log(averageMarks);


// --------------------------------------------------------
// LMS Correct Answer -------------------------------------

// const averagePoints = (arr, subject) => {
//     let allPoints = 0;
//     let sum = 0;
//     for(let itm of arr) {
//       if(subject in itm.results) {
//         allPoints += itm.results[subject];
//         sum+=1;
//       }
//     }
//     return allPoints / sum;
// };

// let averageMarks = averagePoints(students, 'english');
// console.log(averageMarks);


// Checking if an Object Has a Specific Property
const obj = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const parameter = "age";

if (obj.hasOwnProperty(parameter)) {
    console.log(`${parameter} exists in the object.`);
} else {
    console.log(`${parameter} does not exist in the object.`);
}

// Alternatively using the 'in' operator
if (parameter in obj) {
    console.log(`${parameter} exists in the object.`);
}

// Checking if an Array Includes an Object with a Specific Property

const arrayOfObjects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, age: 30 }
];

const parameter1 = "age";

const exists = arrayOfObjects.some(obj => parameter1 in obj);

if (exists) {
    console.log(`At least one object includes the parameter '${parameter1}'.`);
} else {
    console.log(`No objects include the parameter '${parameter1}'.`);
}



// Use hasOwnProperty or the in operator to check for properties in a single object.
// using hasOwnProperty will not work in array as expected.
// Use the some method to check if any object in an array has a specific property.

//const array1 = [1, 2, 3, 4];

// Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// 0 + 1 + 2 + 3 + 4 The final result of running the reducer across all elements of 
// the array is a single value. Add all the numbers in the array.
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10
