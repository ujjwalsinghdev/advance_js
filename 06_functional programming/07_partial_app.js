// Partial Application

const multiply = (a, b, c) => a * b * c;

const curryMultiply = (a) => (b) => (c) => a * b * c;

const partialmultiply5 = multiply.bind(null,5)

console.log(curryMultiply(3)(4)(10));

console.log(partialmultiply5(4,10));
