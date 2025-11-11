// Interface Syntax

interface User {
  readonly name: string;
  age: number;
  isActive: boolean;
  isMarried?: boolean
}

let user1: User = {
  name: "Emon Mahdi",
  age: 29,
  isActive: true,
};

//  user1.name = 'Mahdi Emon' not re assign because readonly

// Interface with Functions

interface Add {
    (x:number, y: number): number
}
const add: Add = (a, b) => a + b;
console.log(add(2,4))

// Interface with Arrays (Index Signature)

interface StringArray {
    [index: number] : string
}

const arrayString: StringArray = ['Emon', 'Arif', 'Hasan']
console.log(arrayString)

// Interface with Objects (Nested Interface)

interface Address {
    city: string;
    country: string;
  }
  
  interface User3 {
    name: string;
    address: Address;
  }
  
  const user: User3 = {
    name: "Emon",
    address: { city: "Barisal", country: "Bangladesh" },
  };
  
// Interface Inheritance (Extend করা)
interface Person {
    name: string;
  }
  
  interface Employee extends Person {
    salary: number;
  }
  
  const emp: Employee = {
    name: "Emon",
    salary: 50000,
  };
/* 
🔥 ঠিক আছে, আজকে আমরা TypeScript-এর একদম গুরুত্বপূর্ণ টপিক **Interface** নিয়ে A to Z শিখব —
এটা **প্রতিটি TS প্রজেক্ট, React, Next.js, Node backend** এ খুবই দরকারি 💪

---

## 📘 ১. Interface কী?

**Interface** হলো TypeScript-এর একটা **structure বা contract**,
যেটা বলে দেয় — কোনো **object, class, বা function** কেমন হবে (তার মধ্যে কী কী property বা method থাকবে)।

👉 সহজভাবে বললে —

> Interface হচ্ছে **object বা structure-এর rule book**।

---

## 🧩 ২. কেন Interface ব্যবহার করব?

✅ কোডকে আরও readable ও maintainable করে
✅ বড় প্রজেক্টে object structure এক জায়গায় define করে reuse করা যায়
✅ Team project এ সবাই জানে object বা data structure কেমন হবে
✅ Class এর সাথে কাজ করতে সুবিধা হয়
✅ TypeScript এর auto-complete, IntelliSense, type checking কাজে দেয়

---

## ⚙️ ৩. Interface Syntax

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "Emon",
  age: 22,
  isAdmin: true,
};
```

---

## 🧠 ৪. Optional Property

```ts
interface User {
  name: string;
  age?: number; // optional
}

const user: User = { name: "Emon" }; // age না দিলেও error নেই
```

---

## 🧱 ৫. Readonly Property

```ts
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 101, name: "Emon" };

// user.id = 102; ❌ Error - readonly
```

---

## ⚙️ ৬. Interface with Functions

👉 Interface এর মাধ্যমে Function এর **parameter type এবং return type** define করা যায়।

```ts
interface Add {
  (x: number, y: number): number;
}

const add: Add = (a, b) => a + b;

console.log(add(10, 5)); // 15
```

---

## 🧩 ৭. Interface with Arrays (Index Signature)

👉 যখন কোনো array বা object এর dynamic key/value define করতে হয়।

```ts
interface StringArray {
  [index: number]: string;
}

const names: StringArray = ["Emon", "Mahdi", "Hasan"];
```

---

## ⚙️ ৮. Interface with Objects (Nested Interface)

```ts
interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  address: Address;
}

const user: User = {
  name: "Emon",
  address: { city: "Barisal", country: "Bangladesh" },
};
```

---

## 🧱 ৯. Interface with Class

👉 Class যখন কোনো Interface কে **implement** করে, তখন তাকে ওই interface এর সব property/method define করতেই হবে।

```ts
interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const s1 = new Student("Emon");
s1.greet(); // Hello, Emon
```

---

## 🧩 ১০. Interface Inheritance (Extend করা)

👉 একটা interface আরেকটা interface থেকে property নিতে পারে।

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = {
  name: "Emon",
  salary: 50000,
};
```

---

## ⚔️ ১১. Type vs Interface (সবচেয়ে গুরুত্বপূর্ণ Interview Topic)

| বিষয়                      | **Type**               | **Interface**                    |
| ------------------------- | ---------------------- | -------------------------------- |
| ডিফাইন করার সিনট্যাক্স    | `type User = {}`       | `interface User {}`              |
| Extend করা                | `&` ব্যবহার করে        | `extends` দিয়ে                   |
| Merge করা যায়             | না ❌                   | হ্যাঁ ✅ (same name হলে merge হয়) |
| Class implement করতে পারে | হ্যাঁ ✅                | হ্যাঁ ✅                          |
| Union / Intersection      | হ্যাঁ ✅                | না ❌                             |
| Recommendation            | ছোট বা mixed structure | Object / Class structure এর জন্য |

---

### 🔹 Example: Type vs Interface

```ts
// Using Type
type UserType = {
  name: string;
  age: number;
};

// Using Interface
interface UserInterface {
  name: string;
  age: number;
}
```

---

### 🔹 Interface Merge Example

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = { name: "Emon", age: 22 };
```

👉 দুইটা same-named interface একসাথে merge হয়ে যায়।

---

## 💡 ১২. Function Declaration using Type vs Interface

```ts
// Using Type
type Add = (a: number, b: number) => number;

// Using Interface
interface Add {
  (a: number, b: number): number;
}
```

দুইভাবেই একই কাজ করা যায়।

---

## 🧮 ১৩. Array Declare using Type vs Interface

```ts
// Using Type
type StringArray = string[];

// Using Interface
interface StringArray {
  [index: number]: string;
}
```

---

## 🧠 ১৪. When to Use Type vs Interface

✅ **Interface ব্যবহার করো**

* যখন object বা class structure define করো
* extend বা merge করতে হবে
* React props/state এ

✅ **Type ব্যবহার করো**

* যখন union/intersection দরকার
* যখন primitive বা function alias define করো

---

## 💬 ১৫. Common Interview Questions

**Q1:** Type vs Interface পার্থক্য কী?
👉 Interface extend ও merge করতে পারে, কিন্তু Type পারে না।
Type union/intersection করতে পারে, interface পারে না।

---

**Q2:** Interface কি class implement করতে পারে?
👉 হ্যাঁ, class এর structure কে enforce করতে পারে।

---

**Q3:** Interface merge হয় কেন?
👉 একই নামের multiple interface TypeScript internally merge করে একত্রে নেয়।

---

**Q4:** নিচের কোডের output কী হবে?

```ts
interface A { x: number; }
interface A { y: number; }

const obj: A = { x: 10, y: 20 };
console.log(obj);
```

👉 Output: `{ x: 10, y: 20 }` ✅ (merge হয়েছে)

---

## 🧠 ১৬. Practice Tasks

1️⃣ **Object Interface:**
`User` নামের একটা interface বানাও যার name, email, isAdmin থাকবে।
তারপর object তৈরি করো ওই interface ব্যবহার করে।

2️⃣ **Nested Interface:**
`Post` interface বানাও যার মধ্যে `author` নামে আরেকটা interface থাকবে (`name`, `email`)।

3️⃣ **Function Interface:**
একটা function interface তৈরি করো `Multiply` নামে, যেটা দুইটা number নেয় এবং multiply করে রিটার্ন দেয়।

4️⃣ **Interface Inheritance:**
`Animal` থেকে `Dog` interface extend করো।
Animal এ `name`, Dog এ `breed` property থাকবে।

5️⃣ **Class Implementation:**
একটা class বানাও `Car` নামে, যেটা `Vehicle` interface implement করবে।
Vehicle এ থাকবে `brand` এবং `start()` method।

---

## 🎯 Bonus Real-life React Example

```tsx
interface UserProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </div>
  );
};
```

---

চাও কি আমি পরের ক্লাসে **Type Narrowing & Type Guards** নিয়ে একইভাবে শিখিয়ে দিই (with examples, QnA, and tasks)? 🔥


*/