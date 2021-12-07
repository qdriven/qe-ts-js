import { ArrayUtils } from "./2-types/generics/arrUtil";

function take<T>(arr:T[],n:number):T[]{
    if (n >= arr.length) return arr
    const newArr: T[] = []
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}

const newArr = take<number>([1, 3, 5, 2, 5, 9, 5, 7, 8, 6], 5)

interface callback<T>{
    (n:T,i:number):boolean
}

function filter<T>({arr,callback}: { arr: T[]; callback: callback<T> }){
    const newArr: T[] = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

const arr = filter<string>({
    arr: ['12', '456', '2', '6'], callback: (n) => {
        return n.length > 1
    }
});

//ES2021, without console
console.log(arr);

const arrhelp = new ArrayUtils<number>([56, 48, 2, 38, 5, 78, 54, 8, 9, 66])

arrhelp.shuffle()

interface hasNameProperty {
    name: string
}

function mixinArray<T, T2>(arr1: T[], arr2: T2[]):(T|T2)[] | never {
    if(arr1.length != arr2.length){
        throw new Error('2个数组长度不一致')
    }
    const newArr:(T|T2)[] = []
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i])
        newArr.push(arr2[i])
    }
    return newArr
}
// const res = mixinArray<number,string>([1,3,4],['a','b','c'])
const res = mixinArray([1,3,4],['a','b','c'])
console.log('res',res) //  [ 1, 'a', 3, 'b', 4, 'c' ]


