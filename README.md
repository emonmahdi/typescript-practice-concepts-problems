# TypeScript Project Setup Guide 🚀

## 📌 What is TypeScript?
[TypeScript](https://www.typescriptlang.org/) is an **open-source programming language** developed and maintained by Microsoft.  
It is a **superset of JavaScript** that adds **static typing** and other powerful features to make JavaScript development more reliable and scalable.  

TypeScript code compiles to plain JavaScript, which means it works anywhere JavaScript runs (browsers, Node.js, etc.).

---

## ✅ Why Use TypeScript?
Here are some key benefits of using TypeScript:

- **Type Safety** → Catch errors at compile time instead of runtime.
- **Better IDE Support** → Autocompletion, IntelliSense, and error highlighting.
- **Code Readability & Maintainability** → Enforces clean and structured code.
- **Scalability** → Perfect for large-scale enterprise projects.
- **Compatibility** → Works with existing JavaScript code and libraries.
- **Future-proof** → Supports modern JavaScript features and compiles to older versions.

---

## 🔍 JavaScript vs TypeScript

| Feature                  | JavaScript (JS) | TypeScript (TS) |
|--------------------------|-----------------|-----------------|
| Typing                   | Dynamic         | Static + Dynamic |
| Compile-time Checking    | ❌ No           | ✅ Yes |
| OOP Support              | Limited         | Strong (Classes, Interfaces, Generics) |
| Code Autocomplete        | Basic           | Advanced (Type Hints, IntelliSense) |
| Scalability              | Hard in large apps | Easy to scale |
| File Extension           | `.js`           | `.ts` |

👉 In short: **TypeScript = JavaScript + Types + Better Tooling**

---

## ⚡ Project Setup (Step by Step)

### 1. Initialize Project
```bash
mkdir my-typescript-project
cd my-typescript-project
npm init -y
```
### 2. Install TypeScript
```bash 
npm install --save-dev typescript @types/node

```

### 3. Create a Config File

```bash 
npx tsc --init
```
Recommended `tsconfig.json` settings:
```bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}

 ```

 ### 4. Create Project Structure
 ```tsc
 my-typescript-project/
 ┣ src/
 ┃ ┗ index.ts
 ┣ dist/
 ┣ package.json
 ┣ tsconfig.json

 ```
### 5. Compile & Run

```tsc 
npx tsc
node dist/index.js
```

### 6. Add Scripts in `package.json`

```tsc 
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc --watch"
}

```
Run:

```tsc 

npm run build
npm run start
npm run dev

```