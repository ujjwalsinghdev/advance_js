let dragon = {
    name: "Tanya",
    fire: true,
    fight() {
      return 5;
    },
  
    sing() {
      if (this.fire) {
        return `I am ${this.name} the breather of fire`;
      }
    },
  };
  
  let lizard = {
    name: "Kitty",
    fight() {
      return 1;
    },
  };
  
  // lizard.__proto__ = dragon;
  
  lizard.__proto__ = dragon;
  
  for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
      // console.log(prop);
    }
  }
  

  // let human = {
  //   mortal: true,
  // };
  
  // let plato = Object.create(human);
  
  // plato.age = 45;
  // console.log(plato.age);
  