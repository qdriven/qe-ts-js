let autoType1=10;
function sumOf({ a, b }: { a: number; b: number; }):number{
    return a+b;
}

autoType1 = sumOf({ a: 1, b: 2 });
console.log("autotype1's type is ",typeof(autoType1))