
// Currying

const multiply = (a,b)=>a*b;


const curryMultiply = (a)=>(b)=>a*b;


const curryMultiplyBY5 = curryMultiply(5);


console.log(curryMultiplyBY5(5));


// console.log(curryMultiply(5)(3));

// console.log(multiply(3,4));
