/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 16:45:30
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 16:45:55
 * @FilePath: /learn-ts/05-练习项目/src/modules/Food.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 定义食物类
 */
 class Food{
    //element为食物元素
    elelment:HTMLElement

    constructor(){
        //给element赋值id为food的元素，ts语法会预报错，因为不一定能找到该元素，加!告诉编译器该元素不为空
        this.elelment = document.getElementById('food')!;
    }

    //设置访问变量获取食物元素的X和Y值
    get X(){
        return this.elelment.offsetLeft
    }
    get Y(){
        return this.elelment.offsetTop
    }

    changePoint(){
        //生成随机数，top和left的值都为0-290之间
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        //将食物定位改变
        this.elelment.style.top = top + 'px'
        this.elelment.style.left = left + 'px'
    }
}


export default Food