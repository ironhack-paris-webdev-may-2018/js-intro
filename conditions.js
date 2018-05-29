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
