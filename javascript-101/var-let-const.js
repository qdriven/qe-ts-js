var globalVar = "global"

function useVar(){
    let globalVar = "within function"
    let newVar = "newVar"
    return globalVar+newVar
}

console.log(globalVar)
console.log(useVar())
// console.log(newVar);//undefined error

const misc="misc";
// misc = "newMisc"; //TypeError: Assignment to constant variable.
console.log(misc)



