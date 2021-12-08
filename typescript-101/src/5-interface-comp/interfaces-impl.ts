import { IBalanceShow, IFireShow, IWisdonShow } from "./interfaces-all"

export abstract class Animal {
    [x: string]: any
    
    abstract type: string
    constructor (
        public name: string,
        public age: number,
    ){}
    say(){
        console.log(`Hello ${this.name}, you are
         ${age} old now`)
    }
}

export class Lion extends Animal implements IFireShow {
    type:string = "狮子"

    singFile(): void{
        console.log(`${this.name} is ${this.age}`)
    }

    doubleFile():void{
        console.log(`${this.name} is now ${this.age}`)
    }
}

export class Tiger extends Animal implements IFireShow {
     type: string ="老虎"
    
    singFile(){
        console.log(`${this.name} is  ${this.age}`)
    }
    doubleFile(){
        console.log(`${this.name} is double ${this.age}`)
    }
}


export class Monkey extends Animal implements IBalanceShow{
    type: string = "猴子";
  
    dumuqiao() {
        console.log(`${this.name} is single ${this.age}`)
    }
    zougangsi() {
        console.log(`${this.name} is double ${this.age}`)
    }
  }

  /**
 * 狗类
 */
export class Dog extends Animal implements IWisdonShow {
    type: string = "狗";
  
    suanshuiti() {
        console.log(`${this.name} is  ${this.age}`)
    }
    dance() {
        console.log(`${this.name} is double ${this.age}`)
    }
  }