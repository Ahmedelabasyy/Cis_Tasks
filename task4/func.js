let myArray = [true, true, false, false, false, false, true, false, true, true, false, true];

let truthyNumbers = (arr) => {
    let counter = 0;
    arr.map(item => {
        if(item === true) {
            counter++;
        }
    })
    console.log(counter);
}

truthyNumbers(myArray)