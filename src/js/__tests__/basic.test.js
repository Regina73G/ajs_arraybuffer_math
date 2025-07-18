import MathCharacter from "../MathCharacter.js";
import { Magician } from "../Magician.js";
import { Daemon } from "../Daemon.js";

test("testing the correctness of creating Character heroes with the correct values", () => {
  const hero = new Magician("Merlin");
  const expectedResult = {
    name: "Merlin",
    type: "Magician",
    health: 100,
    level: 1,
    baseAttack: 100,
    defence: 40,
    range: 1,
    _stoned: false
  };

  expect(hero).toEqual(expectedResult);
});

test("testing attack without debuff", () => {
  const hero = new Magician("Merlin");
  hero.attack = 1;
  expect(hero.attack).toBe(100);
});

test("testing attack with distance debuff", () => {
  const hero = new Daemon("Leo");
  hero.attack = 3;
  expect(hero.attack).toBe(64);
});

test("testing attack with distance debuff + stoned debuff", () => {
  const hero = new Daemon("Leo");
  hero.stoned = true;
  hero.attack = 2;
  expect(hero.attack).toBe(67);
});

test("testing attack with result below zero", () => {
  const hero = new Magician("Merlin");
  hero.stoned = true;
  hero.attack = 20;
  expect(hero.attack).toBe(0);
});

test("testing non-boolean value for stoned", () => {
  expect(() => {
    const hero = new Magician("Merlin");
    hero.stoned = "no";
  }).toThrow("Stoned must be a boolean value");
});

test("testing stoned check", () => {
  const hero = new Magician("Merlin");
  hero.stoned = true;
  expect(hero.stoned).toBe(true);
});