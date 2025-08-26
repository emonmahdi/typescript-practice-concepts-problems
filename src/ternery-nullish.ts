const age: number = 20

const message: string = age >= 18 ? "You are a Adult" : "Your are a Minor"
console.log(message)

const isLoggedIn: boolean = false;
const loginMessage: string = isLoggedIn ? "User login" : "No access"

console.log(loginMessage)





/* 
The nullish coalescing operator (??) in TypeScript is used to provide a default value when a variable is null or undefined. It is different from the logical OR (||) operator because || treats falsy values (like 0, '', false) as "empty", whereas ?? only checks for null and undefined.

*/
let userInput: unknown = undefined;
let defaultText = "Default Value";

let text = userInput ?? defaultText;
console.log(text); // Output: "Default Value"


function greet(name?: string) {
    return `Hello, ${name ?? "Guest"}`;
  }
  
  console.log(greet());       // Hello, Guest
  console.log(greet("Emon")); // Hello, Emon