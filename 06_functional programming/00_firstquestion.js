


// const user = {
//   name:'Kim',
//   active:true,
//   cart:[],
//   purchase:[]
// }

class User{
    constructor(name,active,cart,purchase){
      this.name=name;
      this.active=active;
      this.cart=cart;
      this.purchase=purchase;
    }
  
    AddItem(){
      return `Hello ${this.name}, You ${this.active} purchase ,Item is ${this.cart} and purchase is ${this.purchase}`
    }  
  }
  
  const john = new User('Ujjwal','true','2 items','yes')
  
  console.log(john.AddItem());
  