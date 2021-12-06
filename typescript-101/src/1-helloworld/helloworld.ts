function greeter(person:any){
    return "Hello "+person
}

function greeterWithType(person:string){
    return "Hello "+person
}

let user="World";
console.log(greeter(user))

let notStr=[0,1,2]
console.log(greeter(notStr))

//see the error
// console.log(greeterWithType(notStr))

interface PersonType{
    firstName:string
    lastName:string
}

class Student{
    fullName:string;
    constructor(
       public firstName:string,
       public lastName:string
    ){
        this.fullName=`${firstName} ${lastName}`;
    }
}

function greeterWithInterface(person:PersonType): string{
    return "Hello "+ person
}

console.log(greeterWithInterface({
    firstName: "firstName",
    lastName:"lastName"
}))
let student = new Student("Simon","Patrick");
console.log(greeterWithInterface(student))