/**
 * 类的定义
 *    属性
 *    方法
 */

class Person {
    
    // 定义属性
    name:string = '张三'
    readonly age:number = 18 //表示只读属性不可修改
    //定义静态属性
    static sex:string = '男'
    static readonly hobies = ['篮球','羽毛球']

    // 定义方法
    sayHello(){
        console.log('Hello 大家好！')
    }
    //静态方法
    static sayHi(){
        console.log('Hi 大家好！')
    }

}

let p = new Person()

console.log(p.name,p.age)
p.name = '李四'
console.log(p.name)
console.log(Person.sex)
console.log(Person.hobies)

p.sayHello()
Person.sayHi()