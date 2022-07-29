/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 09:45:17
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 09:58:04
 * @FilePath: /learn-ts/04-面向对象/src/06-接口.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function(){

    type myType = {
        name:string,
        age:number
    }

    /*
     * 定义属性类型声明不能重复定义
    type myType = {
        sex:string
    }
    */
    
    /**
     * interface接口用于定义一个类的属性规则
     *      也可用于定义数据类型规则
     */
    interface myInterface{
        name:string,
        age:number
    }

    //interface可以重复定义，会自动合并
    interface myInterface{
        sex:string
    }

    let obj:myInterface = {
        name:'张三',
        age:18,
        sex:'男'
    }
    console.log(obj)

    /**
     * 使用interface定义一个类，需要使用implements继承
     */
    interface myInter{
        name:string
        age:number
        sayHello():void
    }

    class Person implements myInter{
        name: string
        age:number

        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }

        sayHello(){
            console.log('Hello !!');
        }
    }

    const p1 = new Person('李四',19)
    console.log(p1);
    
    
})()