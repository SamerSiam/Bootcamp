const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    "sbich"
];
const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

// sort string ascending
const ascStringSort = (strArr) => {
    return strArr.slice().sort();
}
console.log(ascStringSort(foods));

// sort string descending
const descStringSort = (strArr) => {
    return strArr.slice().sort((a, b) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    });
}
console.log(descStringSort(foods));

// sort array of string with upper case - Ascending order
const ascCaseStringSort = (strArr) => {
    return strArr.slice().sort((a, b) => {
        let aValue= a.toUpperCase();
        let bvalue= b.toUpperCase();
        if (aValue>bvalue) {
            return 1;
        }
        if (aValue<bvalue) {
            return -1;
        }
        return 0;
    });
}
console.log(ascCaseStringSort(foodsWithUpperCase));
// sort array of string with upper case - Descending order

const descCaseStringSort = (strArr) => {
    return strArr.slice().sort((a, b) => {
        let aValue= a.toUpperCase();
        let bvalue= b.toUpperCase();
        if (aValue<bvalue) {
            return 1;
        }
        if (aValue>bvalue) {
            return -1;
        }
        return 0;
    });
}
console.log(descCaseStringSort(foodsWithUpperCase));

// Longest word sorting
const longestWordSort = (strArr) => {
    return strArr.slice().sort((a, b) => {
        let aValue= a.length;
        let bvalue= b.length;

        if (aValue<bvalue) {
            return 1;
        }
        if (aValue>bvalue) {
            return -1;
        }
        return 0;
    });
}
console.log(longestWordSort(words));