function add(x:number,y:number,z?:number){
    if (typeof z === 'number') {
        return x + y + z;
    } else {
        return x + y;
    }
}

let result = add(1,3)
console.log(result)

const add12 = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return x + y + z;
    } else {
        return x + y;
    }
}


interface Isu {
    (x: number, y: number, z?: number): number //定义一个函数接口， 返回类型为number
}

// let add2:string = add12; 错误赋值
// => number 返回类型
let add2: (x: number, y: number, z?: number) => number = add12;
// 或者
let add3: Isu = add12;

console.log(typeof(add2))