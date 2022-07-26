//字面量类型，定义后不可改变
let a :'hello';
// a = 'world' //a类型为字面量不可改变值

//使用 | 表示‘或’，定义变量b可选值为'man'和'woman'
let b :'man' | 'woman'
b = 'man'
b = 'woman'

//变量c的类型可选number或string
let c :number | string;
c = 100
c = 'hello'

//变量d为any类型，类似JS可赋值任意类型的值，不限制
// let d :any;
//定义变量不定义类型时默认为any类型
let d;

d = true
d = 'hello'
d = 123

//变量d为any类型，类似JS可赋值任意类型的值，不限制（当不确定变量类型时建议使用unknown类型）
let e :unknown;
e = true
e = 'hello'
e = 123

let f = 'hello world'

//any类型可赋值给任意类型的变量,将f变为123(number类型)
f = d
// unknown类型不可赋值给其他类型的变量
// f = e
if(typeof e === 'string'){
    f = e
}

/**
 * 限制e为string类型，因f为string，所以才可以赋值
 * 1. 变量 as 类型
 * 2. <类型> 变量
 */
f = e as string;
f = <string> e


console.log(typeof f)


function fn() :void{
    //定义函数为void类型时标识该函数没有返回值或者返回undefined或者null
    return null
}

// function fn2() :never (){
//     //函数类型为never限制没有返回值，只能进行报错
//     throw new Error('报错了!!')
// }
