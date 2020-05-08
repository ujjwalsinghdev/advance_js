function a() {
    let grand = "grand";
  
    return function b() {
      let father = "father";
      return function c() {
        let son = "son";
        return `${grand}> ${father}>${son}`;
      };
    };
  }
  
  const one = a();
  
  console.log(a()()());
  