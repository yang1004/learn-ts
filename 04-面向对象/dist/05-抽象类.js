"use strict";
(function () {
    /**
     * 抽象类 以abstract开头的类方法
     * 抽象类不能创建对象
     */
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Student extends Person {
        sayHello() {
            console.log('Hello');
        }
    }
    let s1 = new Student('张三', 18);
    console.log(s1);
    s1.sayHello();
})();
