const taOf='aaa'
class DemoUserNew{
    account:string | undefined
    pwd:string | undefined
    name: string | undefined
}

function createDemoUser(cls: typeof DemoUserNew):DemoUserNew{
    return new cls()
}

createDemoUser(DemoUserNew);