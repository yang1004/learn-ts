"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('Hello 我是' + this.name);
        }
    }
    class Student extends Person {
    }
    class Teacher extends Person {
        //重写sayHello方法
        sayHello() {
            console.log('重写方法->Hello 我是' + this.name);
        }
    }
    let s1 = new Student('张三', 18);
    console.log(s1);
    s1.sayHello();
    let t1 = new Teacher('李四', 30);
    console.log(t1);
    t1.sayHello();
})();
