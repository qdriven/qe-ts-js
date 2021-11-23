//Obejct.prototype.toString.call
// Object.prototype.toString.call(obj) to get types
console.log(Object.prototype.toString.call({}))              // '[object Object]'
Object.prototype.toString.call([])              // '[object Array]'
Object.prototype.toString.call(() => {})        // '[object Function]'
console.log(Object.prototype.toString.call('seymoe'))   // '[object String]'
Object.prototype.toString.call(1)               // '[object Number]'
Object.prototype.toString.call(true)            // '[object Boolean]'
Object.prototype.toString.call(Symbol())        // '[object Symbol]'
Object.prototype.toString.call(null)            // '[object Null]'
Object.prototype.toString.call(undefined)       // '[object Undefined]'
Object.prototype.toString.call(new Date())      // '[object Date]'
var math = new Object()
math.E = 2.71
console.log(Object.prototype.toString.call(math))      // '[object Math]'
Object.prototype.toString.call(new Set())       // '[object Set]'
Object.prototype.toString.call(new WeakSet())   // '[object WeakSet]'
Object.prototype.toString.call(new Map())       // '[object Map]'
Object.prototype.toString.call(new WeakMap())   // '[object WeakMap]'