function baseNumber(num) {
    return function secNumber(num2) {
        return num + num2;
    }
}

let plusFive = baseNumber(5);
console.log(plusFive(5))

// IT'S CALLED CURRYING 