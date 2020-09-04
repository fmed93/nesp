function f() {
    console.log('hello from f()');
}

function g(a, b) {
    return a + b;
}

console.log('calling function f()');
f();

let result = g(3, 5);
console.log('g(3, 5)', result);

let fa = function () {
    console.log('hello from an anonymous function');
}

console.log('calling the anonymous function stored in fa');
fa();

let ga = function(a, b) {
    return a + b;
}

let ga_bis = function(a, b) {
    if ((typeof a == "number")&&(typeof b== "number")) {
        return a + b;    
    }
    return('I wanted two numbers');
}

console.log('passing numbers to the anonymous function stored in ga ...', ga(2, 3));
console.log('passing strings to the anonymous function stored in ga ...', ga('Hello', 'World'));
console.log("add a number to undefined and you get Not a Number ...", ga(42));

console.log('passing numbers to the anonymous function stored in ga ...', ga_bis(2, 3));
console.log('passing strings to the anonymous function stored in ga ...', ga_bis('Hello', 'World'));
console.log("add a number to undefined and you get Not a Number ...", ga_bis(42));

