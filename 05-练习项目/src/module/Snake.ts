/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-29 10:23:10
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-29 16:31:45
 * @FilePath: /learn-ts/05-练习项目/src/module/Snake.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Snake{

    //绑定蛇容器元素、蛇头和蛇身
    element:HTMLElement
    head:HTMLElement
    body:HTMLCollection//元素集合

    constructor(){
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div')!
        this.body = this.element.getElementsByTagName('div')
    }

    //获取蛇头的位置
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    //设置蛇头的位置
    set X(value:number){
        if(value===this.X) return

        //蛇头的位置应在0-290之间
        if(value<0 || value>290){
            throw new Error('Game Over!')
        }

        if(this.body.length > 1){
            let bd = this.body[1] as HTMLElement
            if(value===bd.offsetLeft && this.Y===bd.offsetTop){
                value = this.moveDirection(value,this.X)
            }
        }

        //移动蛇身
        this.moveBody()
        
        this.head.style.left = value + 'px'
    }
    set Y(value:number){
        if(value===this.Y) return

        //蛇头的位置应在0-290之间
        if(value<0 || value>290){
            throw new Error('Game Over!')
        }

        if(this.body.length > 1){
            let bd = this.body[1] as HTMLElement
            if(value===bd.offsetTop && this.X===bd.offsetLeft){
                value = this.moveDirection(value,this.Y)
            }
        }
        
        //移动蛇身
        this.moveBody()

        this.head.style.top = value + 'px'
    }

    //蛇吃到食物身体加加
    addBody(){
        let oDiv = document.createElement('div')
        oDiv.style.left = this.X + 'px'        
        oDiv.style.top = this.Y + 'px'        
        this.element.insertAdjacentElement('beforeend',oDiv)
    }

    //移动蛇身
    moveBody(){
        for(let i=this.body.length-1 ; i>0 ; i--){
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;
            // 修改身体坐标为上一位的坐标
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    moveDirection(value:number,point:number){
        if(value > point){
            //此时蛇向左移动，想向右掉头，应阻止
            return point-10
        }else{
            return point+10
        }
    }

    collisionBody(){
        for(let i=this.body.length-1 ; i>0 ; i--){
            let bd = this.body[i] as HTMLElement
            if(this.X===bd.offsetLeft && this.Y===bd.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }

}

export default Snake