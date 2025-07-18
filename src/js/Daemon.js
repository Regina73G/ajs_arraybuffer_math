import MathCharacter from "./MathCharacter.js";

export class Daemon extends MathCharacter {
  constructor(name) {
    super(name, "Daemon", 80);

    this.defence = 40;
  }
}