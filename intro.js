// Expresions
// -----------------------------------------------------------------------------

var expressionOne = ((2 * 2) + 5) * 6;
// ((2 * 2) + 5) * 6
//    (4    + 5) * 6
//         9     * 6
//             54
console.log(expressionOne);

var expressionTwo = ((2* 2) + (5 * 3)) - 5;
// ((2* 2) + (5 * 3)) - 5
//   (4    + (5 * 3)) - 5
//   (4    +   15)    - 5
//        19          - 5
//                14
console.log(expressionTwo);

var expressionThree = (5 * 5) / (5 * 5);
// (5 * 5) / (5 * 5)
//    25   / (5 * 5)
//    25   / 25
//        1
console.log(expressionThree);

var expressionFour = 5 * 5 - 5 * 4;
// 5 * 5 - 5 * 4
//  25   - 5 * 4
//  25   - 20
//       5
console.log(expressionFour);



// Conditions
// -----------------------------------------------------------------------------
var lang = prompt("What is your preferred language?");

// force lowercase letters
lang = lang.toLowerCase();

// if (lang === "french") {
//   console.log("Bonjour tout le monde");
// }
// else if (lang === "spanish") {
//   console.log("Hola mundo");
// }
// else {
//   console.log("Hello world");
// }

switch (lang) {
  default:
    console.log("Hello world");
    break;

  case "french":
    console.log("Bonjour tout le monde");
    break;

  case "spanish":
    console.log("Hola mundo");
    break;
}
