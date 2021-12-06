
function fun(): never { //never stop only error occurred
    while(true) { 
        console.log("like it")
    }
}

function throwError(msg:string): never {
    throw new Error(msg)
}

let arrAfterNever:[];
// throwError("msg")
fun()

