// Alle Elemente des Arrays an einen String anhängen
// per Komma trennen und String in Konsole ausgeben

let persons = [
  "Dimi",
  "Michele",
  "Steffen"
  ];
  
  let output = "In der Bib sitzen: ";
  
  for (let person of persons) {
    output = output + person + ", ";
  }
  
  console.log(output);