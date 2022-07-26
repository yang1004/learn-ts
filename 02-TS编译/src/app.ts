console.log('src/app.ts')
//app.ts


//a,b都为隐式any数据
function sum(a:number,b:number){
    return a+b
}


//当配置noImplicitThis开启时需指定this类型，否则报错
function fn(this:Window){
    alert(this)
}

let box = document.getElementById('box')
//当配置项strictNullChecks为true时会检测到box有可能为null，则会报错
// box.addEventListener('click',function(){
//     console.log(123)
// })

// 可以先判断box的类型
if(box !== null){
    box.addEventListener('click',function(){
        console.log(123)
    })
}

//或者
box?.addEventListener('click',function(){
    console.log(123)
})