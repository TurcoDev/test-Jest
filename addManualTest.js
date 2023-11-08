const addInt = require("./add.js");

/**
 * Test de la funcion
 */
console.log(addInt(2, 3));
console.log(addInt(5, -8));
console.log(addInt(-3, 7));
console.log(addInt('2', 3));
console.log(addInt(2, null));
console.log(addInt(null, null));
console.log(addInt(undefined, null));
console.log(addInt(2, undefined));
console.log(addInt(null, '3'));
console.log(addInt(null, 'fgxzdcb'));
console.log(addInt(5.5, 8.8));