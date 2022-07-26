//定义变量a并指定类型为number
let a:number

a = 111
//赋值非number类型会报错(Type 'string' is not assignable to type 'number'.)
// a = 'aaa'

//当定义变量时赋值自动指定类型，  let b=456 === let b:number=456
let b = 456
//b为number类型，将b赋值为非数字则报错
// b = 'bbb'

//指定a,b参数类型为number，函数返回值number类型
function sum(a:number,b:number) :number{
    return a+b
}

//因为sum的返回值类型为number，所以result的类型为number
let result = sum(1,2)

console.log(result)