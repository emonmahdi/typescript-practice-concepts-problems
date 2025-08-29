// OOP

//  Create Class

class Person {
    name: string;
    age: number;

    constructor(name1: string, age1: number){
        this.name=name1,
        this.age =age1
    }
}

const p1 = new Person('Md Mahdi', 28);

// Inheritance

class Person1 {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age=age
    }
    show(){
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Person2 extends Person1 { 
    salary: number;
    position:string;

    constructor(name: string, age: number, salary: number, position: string){
        super(name, age)
        this.salary = salary;
        this.position='developer'
    }
    show(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Position: ${this.position}`)
    }
}

const p2 = new Person1('Jalil', 29);
const p3 = new Person2('Jalil', 29, 30000, 'Admin Officer');
 