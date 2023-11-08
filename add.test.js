// import {expect, test} from 'jest';
const addInt = require("./add.js");

test('la suma de 2 y 3 debe dar 5', () => {
  expect(addInt(2, 3)).toBe(5)
})

test('la suma de 5.5 y 8.8 debe dar 13', () => {
  expect(addInt(5.5, 8.8)).toBe(13)
})

test('la suma de 4.3 y 3.1 debe dar 13', () => {
  expect(addInt(4.3, 3.1)).toBe(7)
})

// test('la suma de un string y un numero debe dar un error', () => {
//   expect(addInt('', 3)).toBe() // TODO error!!!
// })