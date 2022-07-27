
class Dog {
    
    //定义属性
    name:string
    age:number

    constructor(name:string,age:number){

        this.name = name
        this.age = age

    }

    speak(){
        console.log('汪汪汪！',this)
    }

}

let dog1 = new Dog('旺财',4)
let dog2 = new Dog('小黑',5)

console.log(dog1)
console.log(dog2)

dog1.speak()