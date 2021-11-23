// splice会改变原始数组
array.splice(startIndex , deleteCount , item1,item2, ...)  // 一般用于删除元素（也可替换(插入)元素）

// slice返回一个新数组
array.slice(startIndex , endIndex)  // 截取的数组值放入一个新的数组中（不包括endIndex位置的元素）

// includes:ES7中的，判断该数组中是否包含指定的值
array.includes(elem,[startIndex]) 
// 和indexOf的区别是includes可以发现NaN，而indexOf不能
[NaN].includes(NaN) // true
[NaN].indexOf(NaN) // -1

array.concat(array1 , array2 )  // 组合返回新数组
array.push( item )  // 插入数组最后位置，返回数组新的长度
array.pop()  // 删除数组最后一个元素，返回删除的这个元素值
array.shift()  // 删除数组的第一个元素，返回删除的这个元素值
array.unshift( item )  // 在数组第一个元素之前插入新元素，返回新数组的长度
array.join('-')  // 以-将数组每一项拼成一个字符串，返回拼凑好的字符串
// array.join()  array.toString()
array.reverse()  // 反转数组并返回
array.sort(function(a, b) { return a-b;})  // 排序(升序)

// 循环遍历
array.forEach(function(value){})
array.forEach(function(value,index,newArray){})

// Map遍历数组的每一项，把执行后的结果全部插入一个新的数组中并返回
array.map(function(value){
  return value*2;
})  

// Filter返回符合条件的值组成的新数组
array.filter(function(value){
  return value>3;
})

// Every返回true/false（只有数组每一项都符合条件才会返回true）【确定了结果就会停止遍历】
array.every(function(value){
  return value>0;
})

// Some返回true/false（只要数组中有一项满足条件就会返回true）【确定了结果就会停止遍历】
array.some(function(value){
  return value>0;
})

// indexOf()返回查找元素从前往后的第一个元素位置索引
var index = ['tang','fu','qiang','fu'].indexOf('fu'); // index为1；
// lastIndexOf()返回查找元素从后往前的第一个元素位置索引
var lastIndex = ['tang','fu','qiang','fu'].lastIndexOf('fu'); // lastIndex为3

// Array.from方法将俩类对象转化为真正的数组。
// 类似于数组的对象 和 可遍历(Iterable)的对象(包括ES6中的数据结构Set和Map)
Array.from(new FormData(from))