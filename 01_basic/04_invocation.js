// function expression

var canada = function () {
    console.log("cold");
  };
  
  // function declaration
  
  function india() {
    
    console.log("warm");
  }
  
  // ...args is already array
  
  function marry(...args) {
    console.log(args);
  
    console.log(Array.from(arguments));
  
    return `${args[0]} is now married to ${args[1]}`;
  }
  
  marry("Tim", "Tina");
  
  // Function Invocation/Call/Execution
  
  canada();
  india();
  