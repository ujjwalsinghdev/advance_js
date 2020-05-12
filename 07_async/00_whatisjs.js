const a = 1;
const b = 2;
const c = 3;

console.log(a);
console.log(b);
console.log(c);

console.log("1");
console.log("12");
console.log("123");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

// STACK OVER FLOW

function foo(){
    foo()
}

foo()

// CALL STACK
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");