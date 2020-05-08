const wizard = {
    name: "Merlin",
    health: 100,
    heal(num1, num2) {
      return (this.health += num1 + num2);
    },
  };
  
  const archer = {
    name: "Robin Hood",
    health: 30,
  };
  
  console.log(archer);
  
  console.log(wizard.heal.bind(archer, 100,22));
  
  // console.log(archer.heal());
  