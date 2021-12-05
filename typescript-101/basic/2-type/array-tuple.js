var arrOfNumber = [1, 2, 3];
arrOfNumber.push(4);
function test() {
    //arguments is a global variable
    console.log(arguments);
    console.log(arguments[0])
}
var arr = ['leo', 20];
arr.push('67');
console.log(arr);
test();
