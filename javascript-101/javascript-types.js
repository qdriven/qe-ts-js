//javascript types: 
//值类型: String、Number、Boolean、Null、Undefined以及Symbol
//值类型是按值存储，数据存储在内存栈中，
//Number，String，Boolean,Symbol都对应了一个包装对象，例如：new Number(5)
//引用类型： Object、Array、Function
//引用类型按引用存储的，存储的不是值，而是一个地址，数据存储在内存堆中


console.log(typeof "string-type");
console.log(typeof true)
console.log(typeof 10)           // 'number'
console.log(typeof Symbol()  )    // 'symbol'
console.log(typeof null      )    // 'object' 无法判定是否为 null
console.log(typeof undefined )    // 'undefined'
console.log(typeof {}        )    // 'object'
console.log(typeof []        )    // 'object'
console.log(typeof(() => {}) )    // 'function'

//instance of
console.log([] instanceof Array)
console.log(({}) instanceof Object);// true
console.log((()=>{}) instanceof Function);// true

