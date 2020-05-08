
function multiply(a,b){
    return a*b
  }
  
  let multiplybytwo = multiply.bind(this,2)
  
  console.log(multiplybytwo(4));
  
  let multen = multiply.bind(this,10);
  
  console.log(multen(2));
  