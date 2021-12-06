# Types in Typescript

> ts是一个可选的静态的类型系统

## 类型约束

变量、函数的参数、返回值位置加上 `: 类型`

```ts
let name:string;
function sum(a:number,b:number):number{
    return a+b;
}
sum(12,12)
```

## Basic Types

* number
* string
* boolean
* array
* object: {}
* null/undefined: 可以给任何类型

把null和undefined 有会有问题

```ts
n.toLocaleLowerCase() // n 是 null,没有字符串方法
```

配置严格空类型检查

```json
{
  "compilerOptions": {
      "strictNullChecks": true // 更加严格的空类型检测 null和undefined 不能赋值给其他类型，只能赋值给自身
  }
```

## 其他常用类型

* 联合类型: 多种类型

```ts
let name:string|undefined;
if(typeof name == 'string'){
    console.log(name)
}
```

* void 类型：通常用于约束函数的返回值，没有任何返回值
```ts
function vv():void{
    console.log('void')
}
```
* never类型: 通常用于约束函数的返回，表示该函数永远不可能结束

如死循环，抛出错

```ts
function fun(): never {
    while (true) { }
}

function throwError(msg:string): never {
    throw new Error(msg)
}

let arr:[];
```

返回值是never的意志运行，知道有错误抛出

* 字面量类型: 表示使用一个值进行约束
```ts
let a: "A" = "A" // 只能赋值为字符串A
let b: 1 = 1

let gender: '男' | '女'; // 只能赋值为 '男' 或 '女'

let arr:[];  // 字面量约束，约束为一个空数组

let user:{
    name:string
    age:number
} // 约束对象 必须有 字符串name属性 数字类型age属性
```


* 元组类型（Tuple）：一个固定长度的数组，且数组中每一下类型确定

```ts
let tu: [string, number]; // 约束一个数组长度为2 第一项为字符串类型 第二项为number类型
let tu2: [string|number, number];
```

* any类型: 可以绕过类型检查，因此，any类型的数据可以赋值给任意类型

```ts
let dat:any = 'ggj'
let n:number = dat // 在运行过程中有隐患，不要随意使用
```

## 类型别名

对已知的一些类型定义名称

```ts
type 类型名
```

```ts
type sex = '男' | '女'
type user = {
    name: string
    age: number
    sex: sex
}

let u:user;
function getUser():user{
    return {name:'12', age:13, sex: '女'}
}
u = getUser()
```

## 函数的相关约束

函数重载: 在函数实现之前, 对函数调用的多种情况进行声明

```ts

/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a: number, b: number): number;
/**
 * 得到a+b的结果
 * @param a 
 * @param b 
 */
function combine(a: string, b: string): string;
// 保证2个参数类型一致
function combine(a: number | string, b: number | string): number | string {
    if(typeof a === 'number' && typeof b === 'number'){
        return a * b
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a + b
    }
}
combine(1, 2)
combine('1', '2')
```

可选参数: 可以在某些参数后面加上 `?` , 表示该参数可以不用传递

默认参数, 和js一样

```ts
function sum(a: number, b: number, c?: number, d:number=10): number {
    let result = a + b + d
    if (c !== undefined) {
        result += c
    }
    return result
}
sum(1, 2)
sum(1, 2, 3)
```

> 可选参数 必须在参数列表的末尾

# 总结

## 概念

TypeScript 是可选的、静态的类型系统

* 为什么需要类型系统？

要构建大型的应用，会涉及大量的函数和接口，如果没有类型检查，会产生大量的调试成本，类型系统可以降低调试成本，从而降低开发成本

* 可选的

TS是JS的超集，JS的所有功能都能在TS中使用，增加的部分是类型系统

* 静态的

类型检查在 编译的过程中，编译完成就没了

TS代码 -> 编译 -> JS代码

## 约束类型

变量、参数、函数的返回值

* 基本类型：boolean number string object Array void never null undefined

字面量类型 配合 联合类型使用，达到类似于枚举的效果

```ts
let sex:"男"|"女"
```

* 扩展类型: 类型别名 枚举 接口 类

类型别名，接口 不产生编译结果
枚举，类 产生编译结果  枚举->编译->对象  TS类->JS类

TS类：属性列表、修饰符（readonly, 访问修饰符：public pravite protected）

泛型：接触某个功能和类型的耦合

类型断言：开发者非常清楚某个东西的类型，但是TS难以分辨，可以通过类型断言，告诉TS类型

```ts
let a = 2 as number;
let b = <number>2;
```

## 类型兼容性

鸭子辩型法，子结构辩型法

- 基本类型：完全匹配
- 对象类型：鸭子辩型法，字面量对象直接传递时，会有更严格的类型检查
- 函数类型：参数数量数量可以少，不可以多，要求返回必须返回，不要去返回，你随意
