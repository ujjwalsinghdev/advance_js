
const obj ={
    name:"Dana"
  }
  
  function clone(obj){
    return{...obj}
  }
  
  function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2
  }
  
  
  console.log(updateName(obj));
  console.log(obj);
  
  