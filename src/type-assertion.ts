/* 
TypeScript-এ Type Assertion মানে হলো আপনি TypeScript কম্পাইলারকে বলছেন যে, “এই ভ্যালুর টাইপ আমি জানি এবং আমি নিশ্চিত”। এটা তখন ব্যবহার করা হয় যখন আপনি জানেন কোনো ভ্যালুর টাইপ কী, কিন্তু TypeScript সেটা সঠিকভাবে বুঝতে পারছে না।

*/

const greetings: unknown = "Good Morning!"

const resultGreetings: number =  (greetings as string).length

console.log(resultGreetings)


const myResult: unknown = 3.442342

const resultToFixed:string = (myResult as number).toFixed(2);
console.log(resultToFixed)
