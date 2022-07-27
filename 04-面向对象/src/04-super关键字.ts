
(function(){

    class Person{
        name:string
        age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        sayHello(){
            console.log('Hello 我是'+this.name)
        }
    }

    class Student extends Person{
        sex:string
        constructor(name:string,age:number,sex:string){
            super(name,age)
            this.sex = sex
        }

        sayHi(){
            //super表示当前类的父类
            super.sayHello()
            console.log('Hi!!')
        }
    }

    let s1 = new Student('张三',18,'男')
    console.log(s1)
    s1.sayHello()
    s1.sayHi()
    


})()