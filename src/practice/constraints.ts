interface validData {
  id: number;
  name: string;
  email: string;
}

function addCourseToStudent<
  T extends validData
>(student: T) {
  const course = "Web Development b13";
  return {
    ...student,
    course,
  };
}

const student1 = addCourseToStudent<validData>({
  id: 12,
  name: "Abul hasan",
  email: "abul@gmail.com",
  // type: 'Junior'
});

console.log(student1);


// Constraints Key Of

type Car = {
    name:string,
    model: number,
    year: number
}

type owner  = "name" | "model" | "year"

type owner2   = keyof Car
 
const va :owner2 =  "model" 

const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key]
}

const  user = {
    name: 'abul',
    age: 22
}
const result  = getPropertyValue(user, 'name')