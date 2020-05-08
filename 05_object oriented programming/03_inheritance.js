// INHERITANCE
class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
  
    attack() {
      return `attack with ${this.weapon}`;
    }
  }
  
  class Elf extends Character {
    constructor(name, weapon, type) {
      super(name, weapon);
      this.type = type;
      // console.log(this);
    }
  }
  
  class Orge extends Character {
    constructor(name, weapon, color) {
      super(name, weapon);
      this.color = color;
    }
  
    makeFort() {
      return `strongest fort in the world made`;
    }
  }
  
  const dolby = new Elf("Dolby", "cloth", "house");
  
  const shrek = new Orge("Shrek", "club", "green");
  
  // console.log(Orge.prototype.isPrototypeOf(shrek));
  // console.log(Character.prototype.isPrototypeOf(shrek));
  
  console.log(dolby instanceof Orge);
  