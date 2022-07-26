"use strict";
/**
 * 类的定义
 *    属性
 *    方法
 */
class Person {
    constructor() {
        // 定义属性
        this.name = '张三';
        this.age = 18; //表示只读属性不可修改
    }
    // 定义方法
    sayHello() {
        console.log('Hello 大家好！');
    }
    //静态方法
    static sayHi() {
        console.log('Hi 大家好！');
    }
}
//定义静态属性
Person.sex = '男';
Person.hobies = ['篮球', '羽毛球'];
let p = new Person();
console.log(p.name, p.age);
p.name = '李四';
console.log(p.name);
console.log(Person.sex);
console.log(Person.hobies);
p.sayHello();
Person.sayHi();
