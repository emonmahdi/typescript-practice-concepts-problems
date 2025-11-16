/* 


নীচে **TypeScript Type Guards** সম্পূর্ণভাবে, একদম সহজ ভাষায়, সব ধরনের type guard (typeof, instanceof, in, custom, interface-based, predicate function) —
**Definition + Coding Example + Real-life Use + Problem Solving + Interview Q&A** সহ ব্যাখ্যা করে দিচ্ছি।

---

# 🔵 **What is Type Guard? (Bangla Definition)**

Type Guard হলো সেই টেকনিক যার মাধ্যমে আমরা TypeScript-কে বুঝিয়ে দেই **কোডের ভেতরে কোন টাইপ ব্যবহার হচ্ছে**।

👉 মানে হলো Type Narrowing
👉 TS confuse হলে type guard দিয়ে বলে দেই:
“এটা number কিনা”, “এটা string কিনা”, “এটা Cat কিনা” ইত্যাদি।

---

# 🔵 **Why Type Guards?**

✔ Runtime এ টাইপ identify করা
✔ Errors কমানো
✔ Safe কোড লেখা
✔ Union types handle করা

---

# 🔥 **TypeScript Type Guards এর ৪টি প্রধান ধরন**

1. **typeof**
2. **instanceof**
3. **in operator**
4. **User-defined (custom) type guard**

এছাড়া:

* Interface-based narrowing
* Discriminated union
* Predicate functions

সবগুলোই নিচে উদাহরণসহ দেওয়া হয়েছে।

---

# 🔵 **1) typeof Type Guard**

`typeof` primitive value চেক করতে ব্যবহার হয়:

* string
* number
* boolean
* object
* undefined
* function

---

### Example 1 — Basic

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("This is a string:", value.toUpperCase());
  } else {
    console.log("This is a number:", value + 10);
  }
}

printValue("hello");
printValue(20);
```

---

### Real-Life Example: Dynamic Input Handling

```ts
function calculatePrice(price: number | string) {
  if (typeof price === "string") {
    return parseFloat(price);
  }
  return price;
}

console.log(calculatePrice("500")); // 500
console.log(calculatePrice(200));   // 200
```

---

# 🔵 **2) instanceof Type Guard**

Object কোন class থেকে বানানো তা check করে।

---

### Example:

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());
```

---

### Real-Life Example: Payment Gateway

```ts
class BkashPayment {
  pay() {
    console.log("Paying via Bkash...");
  }
}

class CardPayment {
  pay() {
    console.log("Paying via Credit Card...");
  }
}

function processPayment(method: BkashPayment | CardPayment) {
  if (method instanceof BkashPayment) {
    method.pay();
  } else {
    method.pay();
  }
}

processPayment(new CardPayment());
```

---

# 🔵 **3) in Operator Type Guard**

Object এর ভিতরে কোন property আছে কিনা তা চেক করে।

---

### Example:

```ts
interface User {
  name: string;
}

interface Admin {
  name: string;
  isAdmin: boolean;
}

function checkPerson(person: User | Admin) {
  if ("isAdmin" in person) {
    console.log("This is Admin");
  } else {
    console.log("This is normal User");
  }
}
```

---

### Real-Life Example: E-commerce User Role

```ts
interface Customer {
  name: string;
  cart: string[];
}

interface Seller {
  name: string;
  products: string[];
}

function getUserRole(u: Customer | Seller) {
  if ("cart" in u) {
    console.log("Customer");
  } else {
    console.log("Seller");
  }
}
```

---

# 🔵 **4) Custom Type Guard (User-Defined)**

এখানে আমরা নিজেরা type check করার একটি function বানাই যা return করে:

```ts
value is SomeType
```

---

### Example:

```ts
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function moveAnimal(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

---

# 🔵 **5) Discriminated Union Type Guard (Most Powerful)**

Interface-এ একটি common property রাখা হয়, যেমন `"type"`।

---

### Example:

```ts
interface Circle {
  type: "circle";
  radius: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape) {
  if (shape.type === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }
  return shape.width * shape.height;
}
```

---

# 🔵 **6) Interface-Based Type Guard**

interface-এ কোনো ইউনিক property থাকা মাত্রেই in operator বা custom guard দিয়ে narrow করা যায়।

---

### Example:

```ts
interface Car {
  wheels: number;
}

interface Boat {
  sail: boolean;
}

function checkVehicle(v: Car | Boat) {
  if ("wheels" in v) {
    console.log("This is a car");
  } else {
    console.log("This is a boat");
  }
}
```

---

# 🔵 **7) Predicate Return Type Guard**

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function show(x: number | string) {
  if (isNumber(x)) {
    console.log(x + 10); 
  } else {
    console.log(x.toUpperCase());
  }
}
```

---

# 🔵 **8) Real-Life Full Example: API Response Handling**

```ts
interface SuccessResponse {
  status: "success";
  data: string[];
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleApi(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else {
    console.log("Error:", res.message);
  }
}
```

---

# 🔵 **9) Problem Solving Tasks (Practice)**

### **Task 1:**

Car | Bike based type guard implement করো।

* Car has AC
* Bike has kickStart

### **Task 2:**

Payment: Bkash | Nagad | Card
→ type guard দিয়ে payment process করো।

### **Task 3:**

Shape: Triangle | Square | Circle
→ getArea() with discriminated union

👉 চাইলে আমি সব সমাধান করে দেবো।

---

# 🔵 **10) Interview Q&A (Bangla)**

### **Q1: Type Guard কী?**

→ টাইপ সেফটি নিশ্চিত করার টেকনিক যা TypeScript-এ union types কে narrow করে।

---

### **Q2: typeof guard কী কাজে লাগে?**

→ Primitive টাইপ string, number, boolean চেক করতে।

---

### **Q3: in operator কেন ব্যবহার করা হয়?**

→ object property আছে কিনা তা check করে type identify করতে।

---

### **Q4: instanceof কোথায় ব্যবহার হয়?**

→ class-based object type check করতে।

---

### **Q5: Custom type guard কী?**

→ আমরা নিজেরা “type is Something” return করি এমন function বানাই।

---

### **Q6: Discriminated union কেন powerful?**

→ common property দিয়ে exact type match করা যায়।
→ বড় software-এ API response handle করতে খুব effective।

---

### **Q7: Interface দিয়ে type guard করা যায়?**

→ হ্যাঁ, যদি interface-এর বিশেষ property ব্যবহার করা যায়।

---

# 👉 Next topic কী চান?

✔ Generics
✔ Interface vs Type
✔ Abstract Class
✔ Polymorphism
✔ Encapsulation
✔ OOP Full Project (TS)

বলুন কোনটা লিখে দেবো?


*/