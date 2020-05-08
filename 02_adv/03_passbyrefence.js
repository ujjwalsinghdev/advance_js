// var a = 5;

// var b = a;

// b++
// b++

// let obj1 = {
//   name:'Yao',
//   password:'123'
// }

// let obj2 = obj1;

// obj2.password = 'easypizzy'

// console.log(obj1);
// console.log(obj2);

var c = [1, 2, 3, 4, 5];

var d = [].concat(c);

d.push(1234455);

console.log(c);

console.log(d);

let obj = {
  a: "a",
  b: "b",
  c: "c",
};

let clone = Object.assign({}, obj);

let clone2 = { ...obj };

obj.c = 5;

console.log(clone);

console.log(obj);
