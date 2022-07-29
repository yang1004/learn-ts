"use strict";
/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 10:19:16
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 10:33:41
 * @FilePath: /learn-ts/04-面向对象/src/07-属性的封装.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function () {
    /**
     *
     * 设置属性
     * public (默认值)公共属性可任意访问(修改)
     * private 私有属性，只能在类中访问(修改)
     * protected 只能在本类和子类中访问(修改)
     *
     */
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
        //设置方法，用来外部访问内部属性
        getName(){
            return this._name
        }

        //设置方法，用来外部修改内部属性
        setName(value:string){
            this._name = value
        }

        //设置方法，用来外部访问内部属性
        getAge(){
            return this._age
        }

        //设置方法，用来外部修改内部属性
        setAge(value:number){
            if(value >= 0){
                this._age = value
            }
        }
        */
        /**
         * getter 访问内部属性
         * setter 修改内部属性
         */
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const p = new Person('张三', 18);
    // p.setName('李四')
    // p.setAge(20)
    p.name = '王五';
    p.age = 30;
    console.log(p);
    class A {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class B extends A {
    }
    const b1 = new B('B1', 1);
    console.log(b1);
    /*
    //下方类C为此写法的简写方式
    class C{
        protected name:string
        protected age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
    }
    */
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
    }
    const c1 = new C('C1', 4);
    console.log(c1);
})();
