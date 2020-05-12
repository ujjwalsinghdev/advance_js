let promise = new Promise((resolve, reject) => {
    if (true) {
      resolve("Stuff Worked");
    } else {
      reject("Error it broked");
    }
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hii");
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hello");
  });
  
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "From 4");
  });
  
  Promise.all([promise,promise2,promise3,promise4])
  .then(values=>{
    console.log(values);
    
  })
  
  
  promise
    .then((result) => result + "!")
    .then((result2) => {
      throw Error;
      console.log(result2);
    })
    .catch(() => console.log("error"));
  