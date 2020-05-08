function boo(string) {
    return function (name) {
      return function (name2) {
        console.log(`${string} ${name} ${name2}`);
      };
    };
  }
  
  console.log(boo("hello")("ujjwal")("singh"));
  
  // with arrow function
  
  const woo = (string) => (name) => (name2) => `${string} ${name} ${name2}`;
  
  console.log(woo("hii")("susy")("marker"));
  