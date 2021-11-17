function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
    } else {
    return b;
    }
    }
    findSmallest(52,66,2); // fix the spelling use VS code debugger