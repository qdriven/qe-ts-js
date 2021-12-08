interface DemoUserAnother{
    age: number,
    name: string
}

let u1: Partial<DemoUserAnother>;

u1={
    age:11
}

let ue:Exclude<"A"|"B"|"C"|"D", "B"|"C"> // 剔除B C 类型

let uex:Extract<"A"|"B"|"C"|"D", "B"|"C"|"E"|"F"> // 提取