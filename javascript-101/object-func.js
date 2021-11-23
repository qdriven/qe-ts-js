Object.keys(obj)  // 方法会返回由一个给定对象的自身【可枚举属性】组成的数组
    var arr = ['a', 'b', 'c'];
  console.log(Object.keys(arr));       --- ['0', '1', '2']

  var obj = { 0: 'a', 1: 'b', 2: 'c' };
  console.log(Object.keys(obj));  // console: ['0', '1', '2']

    var anObj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.keys(anObj));  // console: ['2', '7', '100']

Object.assign()  // 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。eg: Object.assign(target, ...sources)

Object.getPrototypeOf(obj)  // 返回指定对象的原型（内部[[Prototype]]属性的值）
obj.hasOwnProperty(prop)  // 返回一个布尔值，指示对象自身属性中是否具有指定的属性。
Object.create(创建对象的原型 , {对象自身可枚举属性(可选)} ) // eg: Object.create(Array.prototype)
Object.defineProperty(Obj, prop, descriptor) // 返回被修改的对象
//   descriptor：
//           value：默认undefined，该属性对应的值，可以是任何有限的JavaScript值，(函数、数字、对象等)
//             writable：默认false，设置为true时value才能够被赋值运算符改变
//           configurable：默认为false不可修改，设置为true可以修改，也能删除该属性
//       enumerable：默认为false,设置为true该属性才能够出现在对象的枚举属性中
            
//循环遍历：
// for in: 遍历时候不仅能读取对象自身的成员属性，还可以读取原型链上对象的原型属性，所以可以使用hasOwnProperty判断一个属性是不是自身上的属性,返回true表示这个属性是对象的成员属性，不是原型属性
for(key in obj){
  if(obj.hasOwnProperty(key)){
    object[key] = 1;
  }   
}

// for of:遍历所有数据机构的统一方法
// 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of来遍历它的成员,也就是说,for...of循环内部调用的是数据结构的Symbol.iterator方法