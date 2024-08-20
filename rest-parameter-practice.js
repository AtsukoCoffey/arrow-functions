let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [ ...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l' ];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let addLetters = [ ...arr];
    for (let i of letters) {
        addLetters.push(i);
    }
    let reverseLetters = [];
    addLetters.sort();
    while (addLetters.length > 0) {
        reverseLetters.push(addLetters.pop());
    }
    
    return reverseLetters;
}


let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);

// Sort numbers in ascending order:
// points.sort(function(a, b){return a-b});
// Sort numbers in descending order:
// points.sort(function(a, b){return b-a});
