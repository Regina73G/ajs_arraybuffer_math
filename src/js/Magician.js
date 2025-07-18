import MathCharacter from "./MathCharacter.js";

export class Magician extends MathCharacter {
  constructor(name) {
    super(name, "Magician", 100);

    this.defence = 40;
  }
}

const hero = new Magician("Merlin");
hero.stoned = true;
hero.attack = 2;