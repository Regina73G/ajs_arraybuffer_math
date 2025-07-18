import Character from "../Character.js";

const value = [
  ["J", "Magician"],
  ["Apollinarius", "Daemon"]
];

test.each(value)("testing the correctness of creating heroes with an incorrect name value", (name, type) => {
  expect(() => {
    new Character(name, type)
  }).toThrow("Name must be a string with length between 2 and 10 character");
});

test("testing the correctness of creating heroes with an incorrect type value", () => {
  expect(() => {
    new Character("Alan", "Roga")
  }).toThrow("Invalid character type");
});