
(function(){

    /**
     * 抽象类 以abstract开头的类方法
     * 抽象类不能创建对象
     */
    abstract class Person{
        name:string
        age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        //以abstract开头的方法定义为抽象方法，不用写函数体，子类中必须重写该方法，否则报错
        abstract sayHello():void;
    }

    class Student extends Person{
        sayHello(){
            console.log('Hello')
        }
    }

    let s1 = new Student('张三',18)
    console.log(s1)
    s1.sayHello()
    

})()