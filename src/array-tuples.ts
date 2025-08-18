/* 
👉 Array হলো এক ধরনের ডাটা স্ট্রাকচার যেখানে একই ধরনের একাধিক ভ্যালু (ডেটা) একসাথে রাখা যায়।
TypeScript এ array ডিফাইন করলে, সেই টাইপ অনুযায়ীই ভ্যালু রাখতে হবে।

*/
// string
const heros: string[] = ['nayeem', 'sayeem', 'nasir', 'habib']

// number
const nums:number[] = [12, 43, 5, 21]

//boolean
const isSalary: boolean[]= [true, false]

const herosAll:(string | number | boolean | string)[] = ["rahim", 200, true, 'IT']



/* 
📌 Tuple (টাপল) কী?

👉 Tuple হলো এক ধরনের array, কিন্তু এর মধ্যে ফিক্সড সংখ্যক এলিমেন্ট এবং প্রতিটি এলিমেন্টের টাইপ আলাদা হতে পারে।
অর্থাৎ, tuple এ কোন টাইপ কোন পজিশনে থাকবে সেটি নির্দিষ্ট করতে হয়।
*/

const skills: [number, string] = [201, 'Programming']


/* 
| বিষয়             | Array                   | Tuple                                |
| ---------------- | ----------------------- | ------------------------------------ |
| দৈর্ঘ্য (Length) | পরিবর্তনশীল (Flexible)  | নির্দিষ্ট (Fixed)                    |
| টাইপ             | একই টাইপ                | প্রতিটি পজিশনে ভিন্ন টাইপ থাকতে পারে |
| অর্ডার           | অর্ডার গুরুত্বপূর্ণ নয় | অর্ডার গুরুত্বপূর্ণ                  |
| উদাহরণ           | `number[] = [1,2,3]`    | `[string, number] = ["A", 1]`        |


*/