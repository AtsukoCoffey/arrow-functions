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
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// the object should be that of the student with the highest english score
// destructuring
//
// // Math.max and reduce method 
// Getting the maximum element of an array
// Array.prototype.reduce() can be used to find the maximum element in a numeric array, by comparing each value:

// const arr = [1, 2, 3];
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// The following function uses Function.prototype.apply() to get the maximum of an array. getMaxOfArray([1, 2, 3]) is equivalent to Math.max(1, 2, 3), but you can use getMaxOfArray() on programmatically constructed arrays. This should only be used for arrays with relatively few elements.



const biggest = students.reduce((acc, curr) => {
    let key = curr.name;
    if (!acc[key]) {
        acc[key] = curr.results.english;
    }

    return acc;
}, []);
 
// [ John: 75, Emily: 73, Adam: 88, Fran: 87 ]
console.log(biggest);

    // // Step 1: Extract the values from the object
    // const values = Object.values(acc);
    // // Step 2: Find the maximum value
    // const maxScore = Math.max(...values);



    // LMS correct answer

// const biggest = students.reduce((acc, cur) => {
//     acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
//     return acc;
//     }, {name: '', max: 0});
// console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/
