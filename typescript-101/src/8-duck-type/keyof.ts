interface DemoUser {
    account:string
    pwd: string
    age:number
}

// interesting way
function printUserProperty(obj: DemoUser, prop: keyof DemoUser){
    console.log(obj[prop])
}