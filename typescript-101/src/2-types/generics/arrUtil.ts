export class ArrayUtils<T>{
    constructor (private arr: T[]) {
    };

    take(n:number){
        if(n>=this.arr.length) return this.arr;
        const newArr: T[]=[];
        for (let index = 0; index < n; index++) {
            newArr.push(this.arr[index]);            
        }
        return newArr;
    }

    shuffle():T[]{
        return this.arr.sort(() => Math.random() - 0.5)
    }

}