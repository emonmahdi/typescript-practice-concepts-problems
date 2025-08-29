class Father {
    showInfo():void{
        console.log('Father')
    }
}

class Son1 extends Father{
    showInfo(): void {
        console.log('Son 1')
    }
}

class Son2 extends Father{
    showInfo(): void {
        console.log("Son 2")
    }
}

function show(params: Father){
    params.showInfo()
}

const x = new Father()
const y = new Son1()
const z = new Son2()

show(x)
show(y)
show(z)




/* 
ঠিক আছে! একদম সহজ বাংলায়, ছোট ছোট ধাপে বুঝি।

# পলিমরফিজম (Polymorphism) কী?

**একই টাইপ (parent/interface) ব্যবহার করে ভিন্ন ভিন্ন অবজেক্টকে একইভাবে ব্যবহার করা**—কিন্তু ফল ভিন্ন হয়।
মানে: **একটা ফাংশন/মেথড–ভিতরে আলাদা আলাদা ক্লাস কাজ করে**।

---

## ধাপে ধাপে বুঝি

1. একটা **Parent টাইপ** বা **Interface** বানাই
2. কয়েকটা **Child ক্লাস** সেটা **extend/implement** করে
3. সবার **একই নামের মেথড** থাকে (যেমন `draw()` বা `pay()`)
4. একটা **ফাংশন** বানাই যেটা **Parent টাইপ** নেয়
5. এখন ওই ফাংশনে যেকোনো **Child অবজেক্ট** দিলেই চলবে—**ফল আলাদা হবে**

---

## খুব ছোট উদাহরণ: Shape 🎨

```ts
class Shape {
  draw(): void { console.log("Drawing a shape"); }
}

class Circle extends Shape {
  draw(): void { console.log("Drawing a circle"); }
}

class Rectangle extends Shape {
  draw(): void { console.log("Drawing a rectangle"); }
}

function render(s: Shape) {
  s.draw();
}

render(new Circle());    // Drawing a circle
render(new Rectangle()); // Drawing a rectangle
```

**ব্যাখ্যা:** `render()` শুধু `Shape` চেনে, কিন্তু `Circle/Rectangle` দিলে নিজ নিজ `draw()` চলেছে—এটাই পলিমরফিজম।

---

## রিয়াল-লাইফ উদাহরণ: Payment 💳 (bKash, Card, PayPal)

```ts
interface Payment {
  pay(amount: number): void;
}

class BkashPayment implements Payment {
  pay(amount: number): void { console.log(`bKash: ${amount} টাকা পেমেন্ট হলো`); }
}

class CardPayment implements Payment {
  pay(amount: number): void { console.log(`Card: ${amount} টাকা পেমেন্ট হলো`); }
}

function checkout(p: Payment, amount: number) {
  p.pay(amount);
}

checkout(new BkashPayment(), 500); // bKash...
checkout(new CardPayment(), 800);  // Card...
```

**ব্যাখ্যা:** `checkout()` শুধু `Payment` ইন্টারফেস জানে—কিন্তু যেকোনো পেমেন্ট মেথড কাজ করে।

---

## আরেকটা রিয়াল-লাইফ ইউজ: Notification (Email/SMS) 📩

```ts
interface Notifier { send(msg: string): void; }

class EmailNotifier implements Notifier {
  send(msg: string): void { console.log(`Email: ${msg}`); }
}

class SMSNotifier implements Notifier {
  send(msg: string): void { console.log(`SMS: ${msg}`); }
}

function notify(n: Notifier, msg: string) {
  n.send(msg);
}

notify(new EmailNotifier(), "Order placed");
notify(new SMSNotifier(), "Order shipped");
```

---

## কোথায় ব্যবহার করবেন?

* **পেমেন্ট গেটওয়ে:** bKash/Card/PayPal → `pay()`
* **নোটিফিকেশন সিস্টেম:** Email/SMS/Push → `send()`
* **ফাইল হ্যান্ডলিং:** PDF/Image/Text → `open()/read()`
* **UI কম্পোনেন্ট:** Button/Input/Select → `render()`

---

## এক লাইনের মনে রাখার ট্রিক

**“একটা common টাইপ, অনেক রকম অবজেক্ট—ফাংশন একটাই, আচরণ ভিন্ন।”**

চাইলে আমি **React + TypeScript** দিয়ে ছোট একটা Notification ডেমোও বানিয়ে দেখাতে পারি।




*/