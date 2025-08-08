// Filter range
console.log("******** FILTER RANGE ********");
const arr1 = [27, 93, 14, 62, 86, 5, 41, 70, 99, 18, 35, 24, 58, 3, 76, 12, 88, 45, 67, 81];

function filterRange(arr1, a, b){ 
    return arr1.filter(item => (item >= a && item <= b));
}

console.log(filterRange(arr1, 1, 100));
console.log(filterRange(arr1, 50, 70));
console.log(filterRange(arr1, 5, 15));
console.log(filterRange(arr1, 10, 35));


// Filter range in place
console.log("******** FILTER RANGE IN PLACE ********");
const arr2 = [27, 93, 14, 62, 86, 5, 41, 70, 99, 18, 35, 24, 58, 3, 76, 12, 88, 45, 67, 81];

function filterRangeInPlace(arr2, a, b){ 
    for(i = 0; i < arr2.length; i++) {
        if (arr2[i] < a || arr2[i] > b) {
            arr2.splice(i, 1);
            i--;
        }
    }
    return arr2;   
}

console.log(filterRangeInPlace(arr2, 2, 27));
console.log(filterRangeInPlace(arr2, 5, 15));
console.log(filterRangeInPlace(arr2, 10, 35));
console.log(filterRangeInPlace(arr2, 50, 70));