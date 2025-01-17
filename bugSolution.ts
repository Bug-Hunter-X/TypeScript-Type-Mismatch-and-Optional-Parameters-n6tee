function greet(person: string): string {
  return `Hello, ${person}!`;
}

function printName(name?: string): void {
  if (name) {
    console.log(`My name is ${name}`);
  } else {
    console.log('I am anonymous!');
  }
}

greet("123"); //Corrected: Now passing a string
printName();
printName("John Doe");