// const name = 'hello';

// console.log(typeof name);

// function reverse(str) {
//     // check input
  
//     if (!str || str.length < 2 || typeof str !== "string") {
//       return `hmm thats not input we want`;
//     }
  
//     const backwards = [];
  
//     const totalItems = str.length - 1;
  
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }

//     console.log(backwards);
    
  
//     return backwards.join('');
//   }
  
//   reverse('hello');
  

function reverse(str){
    return str.split('').reverse().join('');
}

// ARROW FUNCTION

const reversenow = str => str.split('').reverse().join('');

console.log(reversenow('the quick brown fox'));



// console.log(reverse('hello you are great person'));
