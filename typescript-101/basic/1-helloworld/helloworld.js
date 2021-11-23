function greeter(person) {
    return "Hello " + person;
}
function greeterWithType(person) {
    return "Hello " + person;
}
var user = "World";
console.log(greeter(user));
var notStr = [0, 1, 2];
console.log(greeter(notStr));
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeterWithInterface(person) {
    return "Hello " + person;
}
console.log(greeterWithInterface({
    firstName: "firstName",
    lastName: "lastName"
}));
var student = new Student("Simon", "Patrick");
console.log(greeterWithInterface(student));
