
type genericType<T>  = Array<T>

const namesArr: genericType<string> = ['abri', 'kabir', 'sakib'];


const numbArray: genericType<number> = [10,20,30]


const bolArray: genericType<boolean> = [true, false, true];


// function generic

function genericFun<T>(value: T): T{
    return value
}
const result1 = genericFun<string>('Emon')
const result2 = genericFun<number>(152)
const result3 = genericFun<boolean>(false)



// Array of object with generics

const user: genericType<{name: string, age: number, role?: string}> = [
    {
        name: 'Masum',
        age: 23
    },
    {
        name: 'Habib',
        age: 32,
        role: 'admin'
    }
]

console.log(user)

// generic in tuple

type GenericTuple<X, Y> = [X, Y]

const person: GenericTuple<string, string>  = ['Mr Hari', 'Mr, Wahi']

console.log(person)

// object tuple
const UserWithId: GenericTuple<number, {name: string, age: number}> = [123, {name: 'Habib', age: 23}];
console.log(UserWithId)


// Generic with interface

interface Developer<T, U = null> {
    role: string,
    salary: number,
    computer: {
        model: string,
        price: number,
        year: number
    },
    isOwnCompany: T,
    isBike?: U
}

const juniorDev: Developer<boolean> = {
    role: 'Junior',
    salary: 20000,
    computer: {
        model: '2024',
        price: 34000,
        year: 2023
    },
    isOwnCompany: false
}   
const seniorDev: Developer<boolean, string> = {
    role: 'Junior',
    salary: 20000,
    computer: {
        model: '2024',
        price: 34000,
        year: 2023
    },
    isOwnCompany: false,
    isBike: 'Yamaha'
}   
console.log(juniorDev)



/* 


🔥 ঠিক আছে, আজকে আমরা শিখব TypeScript-এর একদম **Advanced & Interview Favorite Topic — Generics** 💪
Generics হচ্ছে এমন একটা concept যেটা **type কে dynamic এবং reusable করে**।
এটা TypeScript-এর “power feature” যা তোমার code কে flexible কিন্তু type-safe রাখে।

চলো ধাপে ধাপে শিখি 👇

---

## 📘 1. Generics কী?

**Generics** হলো এমন একটা Type Placeholder —
যেটা আমরা কোনো **function, class, বা interface** এ ব্যবহার করি যাতে সেটা যেকোনো type এর সাথে কাজ করতে পারে।

👉 সহজভাবে বললে —

> Generics মানে হলো “type কে parameter হিসেবে পাঠানো।”

---

### 🔹 Without Generics

```ts
function identity(value: any): any {
  return value;
}

const result = identity("Emon");
```

👉 এখানে সমস্যা হলো — TypeScript জানে না `result` এর type কী।
তুমি number, string, object যেকোনো কিছু পাঠাতে পারো, কিন্তু TS type check করতে পারবে না।

---

### 🔹 With Generics ✅

```ts
function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("Emon");
const result2 = identity<number>(100);

console.log(result1, result2);
```

👉 এখানে `<T>` একটা “Type Parameter”
তুমি পরে বলে দিচ্ছো `T` মানে `string` বা `number`
এভাবে function টি dynamic ভাবে যেকোনো type এর সাথে কাজ করছে।

---

## 🧩 2. TypeScript Generics Syntax

```ts
function functionName<T>(param: T): T {
  return param;
}
```

> এখানে `T` মানে Type Variable — যেটা যেকোনো নাম হতে পারে যেমন `<T>`, `<U>`, `<Type>`, `<Value>` ইত্যাদি।

---

## ⚙️ 3. Generics Function Example

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<string>(["apple", "banana"])); // "apple"
console.log(getFirstElement<number>([10, 20, 30])); // 10
```

👉 এখানে একই function **string[]**, **number[]**, **boolean[]** — যেকোনো array এর জন্য কাজ করছে।

---

## 🧱 4. Multiple Type Parameters

```ts
function combine<T, U>(a: T, b: U) {
  return { a, b };
}

const result = combine<string, number>("Age", 22);
console.log(result); // { a: 'Age', b: 22 }
```

---

## 🧠 5. Generics with Constraints (extends)

কখনও আমরা চাই কোনো generic type যেন নির্দিষ্ট ধরনের type থেকে আসুক।

```ts
interface Person {
  name: string;
}

function greet<T extends Person>(obj: T) {
  console.log(`Hello, ${obj.name}`);
}

greet({ name: "Emon", age: 22 }); // valid
// greet({ age: 22 }); ❌ Error - must have name
```

👉 `T extends Person` মানে — `T` type হবে এমন কিছু যার মধ্যে অন্তত `name` থাকবে।

---

## 🧩 6. Generics with Interface

```ts
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 123 };
```

---

## ⚙️ 7. Generics with Class

```ts
class DataStore<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const store1 = new DataStore<string>();
store1.add("Emon");
store1.add("Mahdi");

const store2 = new DataStore<number>();
store2.add(10);
store2.add(20);

console.log(store1.getAll());
console.log(store2.getAll());
```

👉 এখানে একই class **string**, **number**, এমনকি **object** type নিয়েও কাজ করতে পারে।

---

## 🧩 8. Generics with Arrow Function

```ts
const printValue = <T>(value: T): void => {
  console.log(value);
};

printValue("Hello");
printValue(123);
```

---

## 🧠 9. Default Type for Generic

```ts
function createList<T = string>(value: T): T[] {
  return [value];
}

console.log(createList("Emon")); // string[]
console.log(createList(10)); // number[]
```

👉 যদি type না দাও, তাহলে ডিফল্ট `string` নেয়।

---

## ⚔️ 10. Generics vs any

| বিষয়                 | **Generics**        | **any**   |
| -------------------- | ------------------- | --------- |
| Type-safe            | ✅ হ্যাঁ             | ❌ না      |
| IntelliSense Support | ✅ হ্যাঁ             | ❌ না      |
| Reusable             | ✅ হ্যাঁ             | ✅ হ্যাঁ   |
| Best Practice        | Always use Generics | Avoid any |

👉 `any` ব্যবহার করলে TypeScript এর সুবিধা হারাও,
কিন্তু Generics তোমাকে flexibility + safety দুটোই দেয়।

---

## 🧮 11. Real-Life Example: API Response Type

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Emon", age: 22 },
};

console.log(userResponse);
```

---

## 💬 12. Interview Questions

**Q1:** TypeScript generics কী?
👉 এমন feature যেটা type কে dynamic ভাবে function, class বা interface এ ব্যবহার করতে দেয়।

**Q2:** Generics এর সুবিধা কী?
👉 Reusability, Type Safety, Auto Suggestion (IntelliSense), Error Reduction।

**Q3:** Generics আর any এর মধ্যে পার্থক্য কী?
👉 `any` সব কিছু নেয় কিন্তু type check করে না।
`generic` type check করে এবং maintainable code দেয়।

**Q4:** Generic constraint কেন দরকার?
👉 যখন কোনো generic type কে সীমিত করতে হয় যেন নির্দিষ্ট property থাকে।

**Q5:** নিচের কোডের output কী?

```ts
function echo<T>(value: T): T {
  return value;
}

console.log(echo("Emon"));
console.log(echo(100));
```

✅ Output:

```
Emon
100
```

---

## 🧠 13. Practice Tasks

1️⃣ **Basic Function Generic:**
`getLast<T>(arr: T[])` লিখো যেটা array এর last element রিটার্ন করবে।

2️⃣ **Generic Interface:**
`Response<T>` interface বানাও যাতে `data` আর `message` থাকবে।

3️⃣ **Generic Class:**
`Stack<T>` class বানাও যার মধ্যে `push`, `pop` এবং `getItems` থাকবে।

4️⃣ **Generic Constraint:**
`getFullName<T extends { firstName: string; lastName: string }>(person: T)` function লেখো যেটা full name রিটার্ন করে।

5️⃣ **Generic Default Type:**
`wrapValue<T = string>(value: T)` function বানাও যেটা `[value]` array রিটার্ন করে।

---

## 🎯 Bonus Real-life Example (React)

```tsx
interface SelectOption<T> {
  label: string;
  value: T;
}

const options: SelectOption<number>[] = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
];

function Select<T>({ options }: { options: SelectOption<T>[] }) {
  return (
    <select>
      {options.map((opt, i) => (
        <option key={i} value={String(opt.value)}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
```

---

চাও কি আমি পরের ক্লাসে **Type Narrowing & Type Guards in TypeScript** নিয়ে এইভাবে উদাহরণ, ইন্টারভিউ প্রশ্ন ও টাস্কসহ শিখিয়ে দিই? 🔥


*/