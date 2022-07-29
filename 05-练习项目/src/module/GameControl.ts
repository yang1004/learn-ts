/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-29 10:23:44
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-29 16:31:24
 * @FilePath: /learn-ts/05-练习项目/src/module/GameControl.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"
class GameControl{

    // 引入创建类
    snake:Snake
    food:Food
    scorePanel:ScorePanel

    //蛇移动方向
    direction:string

    //是否游戏结束 true结束 false没结束
    isDel:boolean

    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.direction = ''

        this.isDel = false

        //初始化监听键盘事件
        this.init()
    }

    init(){
        document.addEventListener('keydown',this.keydownHandle.bind(this))

        //蛇移动
        this.run()
    }

    /**
     * ArrowUp
     * ArrowDown
     * ArrowLeft
     * ArrowRight
     */
    keydownHandle(event:KeyboardEvent){
        //判断按键，防止按其他按键停止
        if(event.key!='ArrowUp' && event.key!='ArrowDown' && event.key!='ArrowLeft' && event.key!='ArrowRight'){
            return false
        }
        this.direction = event.key        
    }

    //移动蛇
    run(){
        //拿到当前蛇头的坐标
        let X = this.snake.X
        let Y = this.snake.Y
        
        switch(this.direction){
            case "ArrowUp":
                // 按键👆，top值减10
                Y -= 10
                break;
            case "ArrowDown":
                // 按键👇，top值加10
                Y += 10
                break;
            case "ArrowLeft":
                // 按键👈，left值减10
                X -= 10
                break;
            case "ArrowRight":
                // 按键👉，left值加10
                X += 10
                break;
        }

        try{
            this.snake.X = X
            this.snake.Y = Y

            this.snake.collisionBody()
        }catch(e:any){
            alert(e.message)
            //设置游戏结束
            this.isDel = true
        }

        //检测蛇吃到食物
        this.checkEat(X,Y)

        //设置定时器循环调用run
        !this.isDel && setTimeout(()=>{
            this.run()
        },300-((this.scorePanel.level-1)*30))
    }

    //检测蛇吃到食物，蛇身体加长，食物变化，分数+1
    checkEat(X:number,Y:number){
        if(X===this.food.X && Y===this.food.Y){
            // 蛇身体加长
            this.snake.addBody()
            // 食物变化
            this.food.changePoint()
            // 分数+1
            this.scorePanel.addScore()
        }
    }

}

export default GameControl