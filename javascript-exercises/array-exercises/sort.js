// Sort in decreasing order
console.log("******** SORT DECREASING ORDER ********");
const arrDecrease = [27, 93, 14, 62, 86, 5, 41, 70, 99, 18, 35, 24, 58, 3, 76, 12, 88, 45, 67, 81];

function sortDecreasing(arrDecrease){ 
    return arrDecrease.sort((a, b) => b - a);
}
console.log(arrDecrease);
console.log(sortDecreasing(arrDecrease));



// Copy and sort array
console.log("******** COPY AND SORT ARRAY ********");
const arrSort = ["Orange", "Grape", "Strawberry", "Blueberry", "Apple", "Cherry", "Watermelon", "Banana"];

function copySorted(arrSort){ 
    const sorted = arrSort.slice();
    sorted.sort();
    return sorted;
}
console.log(arrSort);
console.log(copySorted(arrSort));
