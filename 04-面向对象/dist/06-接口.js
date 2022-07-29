"use strict";
/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 09:45:17
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 09:58:04
 * @FilePath: /learn-ts/04-面向对象/src/06-接口.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function () {
    let obj = {
        name: '张三',
        age: 18,
        sex: '男'
    };
    console.log(obj);
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('Hello !!');
        }
    }
    const p1 = new Person('李四', 19);
    console.log(p1);
})();
