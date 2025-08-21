/* 
type alias কাস্টম টাইপ বানাতে পারি, অবজেক্টের শেপ (shape), ফাংশনের সিগনেচার, ক্লাস কনট্রাক্ট ইত্যাদি ডিফাইন করতে পারি।
*/

type HeroSalaryType = number | string;

const heroSalary: HeroSalaryType = 2000;
console.log(heroSalary);

type HeroType = {
  name: string;
  age: number;
  isMarried: boolean;
};

const heroUser1: HeroType = {
  name: "Abir Mahmud",
  age: 32,
  isMarried: true,
};

const heroUser2: HeroType = {
  name: "Kabir Mahmud",
  age: 31,
  isMarried: false,
};

const heroUser3: HeroType = {
  name: "Akash Mahmud",
  age: 33,
  isMarried: false,
};

// Intersection type

type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone?: string; // optional
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: "Joe",
  age: 25,
  email: "joe@example.com",
  phone: "(408)-123-4567",
};

/* 
🔹 Problem 1: Primitive + Union (Type Alias)

👉 একটি UserID টাইপ বানান যেটা হয় string অথবা number হতে পারে।
এরপর id1 এবং id2 নামে ভ্যারিয়েবল বানান।


*/

type UserId = string | number;

const id1: UserId = 122;
const id2: UserId = "122";

/*  
🔹 Problem 2: Object Shape (Type Alias)

👉 একটি Product টাইপ বানান যেখানে থাকবে:

id: number 
name: string 
price: number 
inStock?: boolean (optional)
*/

type Product = {
  id: number;
  name: string;
  price: number;
  inStock?: boolean;
};


const p1: Product={
    id:21,
    name: 'Laptop',
    price:30000,
    inStock:true
}

