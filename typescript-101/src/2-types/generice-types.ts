interface KeyPair<K,V>{
    key: K,
    value:V
}

let obj1:KeyPair<number,string> ={
    key:10,value:"ty"
}
let obj2:KeyPair<string,number>={
    key:"hj",
    value: 67
}

function withInputOutputGenericType<T>(arr:T[]):T[]{
    console.log(arr.length)
    return arr
}

const arrResult = withInputOutputGenericType(["test"])

interface IWithLength{
    length: number
}

function getLength<T extends IWithLength>(arg:T){
    console.log(arg.length)
    return arg
}

// 包含length方法,，可以是多个类型
const arr1R = getLength('hsdf')
const objR = getLength({length: 10, hj: 89})
const arr2R = getLength([4,6,6])