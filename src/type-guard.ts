// of guard
type typeOfData = number | string;

const doSomething  = (a: typeOfData): typeOfData => {
    if(typeof a === "number"){
        return a;
    }else{
        return a
    }
}
console.log(doSomething(200)) 
console.log(doSomething("Hello Mahdi!"))

// in guard

type X = {
    name:string,
    phone: number
}

type Y = {
    name: string,
    salary: number,
    address: string
}
const getInfo = (info: X | Y)=> {
    if("phone" in info){
        return `Type A: Phone ${info.phone}`
    }
    else if('salary' in info){
        return `Type B: Salary ${info.salary}`
    }
}


// instance of guard

class P {
    position: string;
    salary: number;

    constructor(position: string, salary: number){
        this.position = position,
        this.salary = salary
    }
    showDetails(){
        console.log(`Show position: ${this.position}`)
    }

}

class Q extends P {
    constructor(position: string, salary: number){
        super(position, salary)
    }
    showSalary(){
        console.log(`Show salary: ${this.salary}`)
    }
}

class R extends P{
    constructor(position: string, salary: number){
        super(position, salary)
    }
    showSalaryWithPosition(){
        console.log(`Show salary: ${this.salary} and Position: ${this.position}`)
    }
}

const findInstance =(person: P) => {
    if(person instanceof Q){
        person.showSalary();
    }else if(person instanceof R){
        person.showSalaryWithPosition();
    }
}

const p4 = new Q('developer', 30000)
const p5 = new R('Engineer', 30000)