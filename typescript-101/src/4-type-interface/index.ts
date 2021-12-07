interface User {
    name: string
    age: number
    sayHello: ()=>void
    sayHello2():void
}

let u:User = {
    name: '接口约束',
    age: 1,
    sayHello() { },
    sayHello2() { }
}
interface Condition {
    (n: number): boolean
}
function sum(numbers: number[], callback: Condition) {
    let s = 0
    numbers.forEach((n) => {
        if (callback(n)) {
            s += n
        }
    })
    return s
}
// 累加奇数
const res = sum([1, 2, 3, 4, 65, 6, 8, 6], n => n % 2 !== 0)
console.log(res); // 69


interface A {
    T1: string
}

interface B {
    T2: number
}

interface C extends A, B {
    T3: number
}

let us: C = {
    T1: '接口继承',
    T2: 1,
    T3: 1
}

// 类型别名

type A2 = {
    T1: string
}
type B2 = {
    T2: number
}
type C2 = {
    T3: boolean
} & A & B

let ut: C2 = {
    T1: '接口继承',
    T2: 1,
    T3: true
}


let d: number & boolean


interface Per {
    readonly id: string,
    name: string,
    age: number
}
let p: Per = {
    id: '123', // id 不能修改
    name: 'readonly',
    age: 33
}


// 修饰为一个只读数组
let arr: readonly number[] = [123]
// arr.push

const arr2: ReadonlyArray<number> = [1, 2, 3]



interface Duck {
    sound: "嘎嘎嘎",
    swin(): void
}

let per = {
    name: '伪装成鸭子的人',
    sound: "嘎嘎嘎" as "嘎嘎嘎", // 断言为类型 "嘎嘎嘎"
    swin() {

    }
}
// 可以赋值
let duck:Duck = per