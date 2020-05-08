function one() {
    return 1;
  }
  
  one();
  
  const obj = {
    two: function () {
      return 2;
    },
  };
  obj.two();
  
  function three() {
    return 3;
  }
  
  console.log(three.call());
  
  //constructor function
  const four = new Function("num", "return num");
  
  console.log(four(4));
  