
const someValue: unknown = 'Hello typescript';

const strLength: number = (someValue as string).length;
console.log(strLength)

const strLength2: number = (<string>someValue).length;


type User ={
    name: string,
    age?:number
}

let user = {} as User;

user.name= 'Emon';
user.age=29

console.log(user)


function kgToGm(value: number | string) : number | string | undefined{
    if(typeof value  === 'string'){
        return parseFloat(value) * 1000
    }
    if(typeof value === 'number'){
        return value * 1000
    }
}

const result1 = kgToGm(100) as number
const result2 = kgToGm('100') as string

console.log(result1)

// Task 1

/* 
একটা ভেরিয়েবল বানাও let value: unknown = "Hello World"
→ এটাকে Type Assertion দিয়ে string এ কনভার্ট করো
→ তারপর length প্রিন্ট করো
*/

let value: unknown = "Hello World"

const valueString = value as string;
console.log(valueString.length)


/* 
চল আজকে TypeScript-এর **Type Assertion** নিয়ে একদম বিস্তারিত জানি 🔥
(এটা ইন্টারভিউতেও অনেকবার প্রশ্ন আসে)

---

## 📘 ১. Type Assertion কী?

👉 **Type Assertion** মানে হলো — তুমি TypeScript-কে বলছো:

> “আমি জানি, এই ভেরিয়েবলের টাইপ তুমি যতটা বুঝছো তার চেয়ে আমি ভালো জানি।”

অর্থাৎ, যখন TypeScript কোনো ভেরিয়েবলের টাইপ নির্ধারণ করতে পারছে না বা ভুল বুঝছে, তখন আমরা **নিজে থেকে তাকে টাইপ বলে দিই।**

---

## 🧩 ২. কখন ব্যবহার করা হয়?

✅ যখন TypeScript কোনো value এর টাইপ নির্ধারণ করতে পারে না
✅ যখন তুমি জানো যে value এর টাইপ আসলে কী
✅ যখন তুমি external data (যেমন API response, JSON file, DOM element ইত্যাদি) নিয়ে কাজ করো
✅ যখন তুমি type narrowing নিশ্চিত করতে চাও

---

## ⚙️ ৩. Type Assertion এর Syntax

দুইভাবে Type Assertion করা যায় 👇

### (1) `as` সিনট্যাক্স (সবচেয়ে বেশি ব্যবহার হয়)

```ts
let someValue: unknown = "Hello TypeScript";

let strLength: number = (someValue as string).length;

console.log(strLength); // 15
```

---

### (2) Angle Bracket Syntax (`<string>`)

```ts
let someValue: unknown = "Hello TypeScript";

let strLength: number = (<string>someValue).length;

console.log(strLength); // 15
```

> ⚠️ **Note:** React JSX এ Angle Bracket সিনট্যাক্স ব্যবহার কোরো না। কারণ JSX `<` কে HTML ট্যাগ মনে করে error দেয়। তাই React প্রজেক্টে সবসময় `as` সিনট্যাক্স ব্যবহার করো।

---

## 🧠 ৪. Real-life Example (DOM থেকে ডেটা নেওয়া)

```ts
const input = document.getElementById("username") as HTMLInputElement;

input.value = "Emon Mahdi"; // TypeScript বুঝবে input এর মধ্যে value আছে
```

🔍 এখানে TypeScript জানে না `getElementById` কী টাইপ রিটার্ন করবে (এটা `HTMLElement | null` হতে পারে)।
তুমি জানো এটা একটা `HTMLInputElement`, তাই `as HTMLInputElement` ব্যবহার করেছো।

---

## 💡 ৫. Optional Type Assertion Example

```ts
type User = {
  name: string;
  age?: number; // optional
};

let user = {} as User; // asserting empty object to type User

user.name = "Emon";
user.age = 21;

console.log(user);
```

এখানে তুমি **একটা খালি object** কে **User টাইপে রূপান্তর** করেছো।

---

## 🚀 ৬. Type Assertion vs Type Casting

| বিষয়      | Type Assertion                             | Type Casting                |
| --------- | ------------------------------------------ | --------------------------- |
| কাজ করে   | Compile time এ                             | Runtime এ                   |
| কাজের ধরণ | শুধু TypeScript বুঝায়, JS এ প্রভাব ফেলে না | Value কে সত্যিই কনভার্ট করে |
| উদাহরণ    | `value as string`                          | `Number("123")`             |

---

## 💬 ৭. Interview Questions & Answers

**Q1: Type Assertion আর Type Casting এর মধ্যে পার্থক্য কী?**
👉 Type Assertion শুধু কম্পাইল টাইমে TypeScript কে বলে দেয়, কোনো বাস্তব রূপান্তর হয় না।
Type Casting (যেমন `Number("5")`) রানটাইমে ভ্যালু সত্যিই পরিবর্তন করে।

---

**Q2: কখন Type Assertion ব্যবহার করা উচিত নয়?**
👉 যখন তুমি নিশ্চিত না value এর টাইপ কী। ভুল টাইপ অ্যাসার্ট করলে runtime error হতে পারে।

---

**Q3: নিচের কোডের আউটপুট কী হবে?**

```ts
let value: unknown = 123;
let str = value as string;
console.log(typeof str);
```

👉 Output: `"number"`
কারণ Type Assertion আসলে value পরিবর্তন করে না — শুধু TypeScript কে “ভুল” বুঝায়।

---

**Q4: নিচের উদাহরণে ভুলটা কোথায়?**

```ts
let num = "123" as number;
```

👉 ❌ এটা TypeScript error দেবে, কারণ সরাসরি incompatible টাইপ assert করা যায় না।
তুমি করতে পারো:

```ts
let num = ("123" as unknown) as number;
```

এটাকে বলে **double assertion** (কিন্তু avoid করা ভালো)।

---

## 🧭 ৮. Practice Tasks (নিজে Try করো)

1️⃣ একটা ভেরিয়েবল বানাও `let value: unknown = "Hello World"`
→ এটাকে Type Assertion দিয়ে string এ কনভার্ট করো
→ তারপর `length` প্রিন্ট করো

2️⃣ নিচের মতো object কে Type Assertion ব্যবহার করে TypeScript type দাও:

```ts
type Product = { name: string; price: number };

let item = {} // এখানে assert করো Product হিসেবে
```

3️⃣ DOM থেকে `<input id="email" />` element নিয়ে তার value set করো Type Assertion ব্যবহার করে।

4️⃣ একটা API response simulate করো:

```ts
let response: any = '{"name":"Emon","age":22}';
```

→ এটাকে JSON parse করে Type Assertion ব্যবহার করে `User` টাইপে কনভার্ট করো।

---

## 🧱 Bonus Example: JSON থেকে Type Assertion

```ts
type User = { name: string; age: number };

const json = '{"name":"Emon Mahdi","age":22}';

const user = JSON.parse(json) as User;

console.log(user.name.toUpperCase());
```

---

তুমি চাইলে আমি পরের ক্লাসে **Type Narrowing & Type Guards** নিয়ে একইভাবে ব্যাখ্যা + প্রশ্ন + টাস্কসহ বুঝিয়ে দিতে পারি।
চাও কি আমি পরের ক্লাসে ওটা দিই? 🔥



*/