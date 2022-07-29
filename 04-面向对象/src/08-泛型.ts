/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 10:48:16
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 11:03:53
 * @FilePath: /learn-ts/04-面向对象/src/08-泛型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function(){
    
    /**
     * 泛型可放置不确定属性的方法/类中
     */
    function fn<T>(a:T):T{
        return a
    }

    //调用泛型的方法
    //直接传值调用
    fn(123)
    //调用前定义泛型的类型
    fn<string>('hello')

    //可传多个泛型
    function fn1<T,S>(a:T,b:S):T{
        console.log(b);
        return a
    }
    fn1<number,string>(123,'hi')

    interface myInter{
        length:number
    }

    //T extends myInte表示泛型T是接口myInte的实现类(子类)
    function fn2<T extends myInter>(a:T):number{
        return a.length
    }
    fn2('123')//字符串具有length属性
    // fn2(123)//报错，number没有length属性
    fn2({length:2})//具有length属性

    // 类实现泛型
    class Person<T>{
        name:T
        constructor(name:T){
            this.name = name
        }
    }

    let p1 = new Person<string>('张三')
    console.log(p1)


})()