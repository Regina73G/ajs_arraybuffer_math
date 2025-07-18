import MathCharacter from "./MathCharacter.js";

export class Magician extends MathCharacter {
  constructor(name) {
    super(name, "Magician", 100);

    this.defence = 40;
  }
}