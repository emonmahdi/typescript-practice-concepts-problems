/* 
interface হলো অবজেক্ট বা ক্লাসের শেপ/কন্ট্রাক্ট ডিফাইন করার জন্য ব্যবহার করা হয়।
এটা অবজেক্ট, ক্লাস, ফাংশন এর জন্য ব্যবহার করা যায়।


✅ Type Alias → যখন union, tuple, primitive বা function টাইপ করতে হবে।
✅ Interface → যখন অবজেক্ট বা ক্লাসের শেপ ডিফাইন করতে হবে, এবং extend/merge দরকার হবে।


👉 তাহলে সংক্ষেপে বললে: 
    type বেশি flexible 
    interface বেশি powerful object/class structure এর জন্য

*/

interface IHeroInterface {
    name: string,
    age: number
}

type HeroType = {
    name:string,
    age: number
}

const heros1: IHeroInterface = {
    name:"kabir",
    age: 23
}
const heros2: HeroType = {
    name:"kabir",
    age: 23
}

/* 
🔹 Problem 3: Object Shape (Interface)

👉 একটি Student ইন্টারফেস বানান যেখানে থাকবে:

name: string 
roll: number 
isPassed: boolean

এরপর একটি s1 অবজেক্ট তৈরি করুন।
*/

interface Student {
    name: string,
    roll: number,
    isPassed: boolean
}

const s1: Student={
    name:'Saiful',
    roll: 32,
    isPassed: true
}