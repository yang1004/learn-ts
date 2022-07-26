
/**
 * 定义对象内的key-value，a的值只能为一个对象并里面只有name、age属性
 *  语法：{ key：类型，key：类型 }
 */
let a:{ name:string , age:number };
a = {
    name:'张三',
    age:18
}

/**
 * [keyName:string]:类型表示可以添加任何属性,尽量避免使用any
 */
let b:{ name:string , [keyName:string]:unknown }
b = {
    name:'张三',
    age:18,
    sex:'男'
}

/**
 * 定义变量类型为数组的写法,表示数组内的值都同样类型
 * 1.类型[]
 * 2.Array<类型>
 */
let c:string[] //变量c为一个数组，并且值都为string
c = ['a','b','c']

let d:number[] //变量d为一个数组，并且值都为number
d = [1,2,3,4]

let e:Array<string>
e = ['a','b','c']

let f:[string,number] //指定数组只有两个值，并第一个类型为string第二个为number
f = ['a',1]


/**
 * enum枚举属性
 * 类似性别选择(0男1女)可用枚举表示，更直观
 */
enum sexType{
    man = 0,
    woman = 1
}
let g:{ name:string , sex:sexType }
g = {
    name:'张三',
    sex:sexType.man
}
console.log(g.sex === sexType.man)


//类型别称，避免重复定义相同类型
type myType = 1 | 2 | 3 | 4;
let h:myType;
let i:myType;

h = 3
