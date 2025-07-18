import Character from "./Character.js";

export default class MathCharacter extends Character {
  constructor(name, type, attack) {
    super(name, type);

    this.baseAttack = attack;
    this._stoned = false;
    this.range = 1;
  }

  set stoned(value) {
    if (typeof value !== "boolean") {
      throw new Error("Stoned must be a boolean value");
    }
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(distance) {
    this.range = distance;
  } 

  get attack() {
    let attack = this.baseAttack;
    if (this.range > 1) {
      const debuff = (this.range - 1) / 10;
      attack *= (1 - debuff);
      if (attack <= 0) {
        attack = 0;
      }
    }

    if (this._stoned) {
      attack = attack - Math.log2(this.range) * 5;
      if (attack <= 0) {
        attack = 0;
      }
    }
    return Math.round(attack); 
  }
}