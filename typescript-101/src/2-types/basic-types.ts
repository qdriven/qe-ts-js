//boolean
let isDone:boolean =false;
isDone = true;
// isDone=2 error

//number
let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制
console.log(a1,a2,a3,a4)
//string
let name1:string = 'tom'
name1 = 'jack'
// name = 12 // error
let age:number = 12
const info = `My name is ${name1}, I am ${age} years old!`

//undefine and null
let undefineValue: undefined = undefined
let n: null = null

//array
let list1: number[] = [1, 2, 3]
//generic
let list2: Array<number> = [1, 2, 3]
//tuple
let t3: [string, number]
t3 = ['hello', 10] // OK
// t3 = [10, 'hello'] // Error
console.log(t3[0].substring(1)) // OK

//enum
enum Color {
    Red=1,
    Green,
    Blue
  }
  
  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.Green  // 0
  console.log(myColor, Color.Red, Color.Blue)
  let colorName: string = Color[2]
console.log(colorName)

let o1 = {}
console.log(o1)
