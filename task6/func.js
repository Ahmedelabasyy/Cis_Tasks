let myObject = { foo: 33, bar: 45, baz: 67 } ;

let toArray = (obj) => {
    let newArray = Object.entries(obj);
    console.log(newArray);
}

toArray(myObject);