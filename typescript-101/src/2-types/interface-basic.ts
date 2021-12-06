interface Person { // 定义一个对象接口
    readonly id: number, //只读属性
    name: string,
    age: number,
    sex?: string //可选属性
}

let leo: Person = {
    id: 1,
    name: 'leo',
    age: 20,
    sex: 'male'
}

// leo.id = 78  不被允许

leo.age = 56

console.log(leo)