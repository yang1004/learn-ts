/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 16:46:36
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 16:48:35
 * @FilePath: /learn-ts/05-练习项目/src/modules/ScorePanla.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 定义表示记分牌的类
 */
 class ScorePanel{

    //定义分数和等级元素属性
    scoreEle:HTMLElement
    levelEle:HTMLElement

    //定义分数、等级属性
    score:number
    level:number

    //最高等级和多少分升一级
    maxLevel:number
    scoreToUp:number


    constructor(scoreToUp:number=10,maxLevel:number=10){
        //初始化分数和等级
        this.score = 0
        this.level = 1
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!

        this.scoreToUp = scoreToUp
        this.maxLevel = maxLevel
    }

    //分数增加
    addScore(){
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if(this.score % 10 === 0){
            // 分数到10的倍数升级等级
            this.levelUp()
        }
    }

    //升级等级
    levelUp(){
        if(this.level < 10){
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }

}

export default ScorePanel

// let scorePanel = new ScorePanel()
// for(let i = 0; i<20 ; i++){
//     scorePanel.addScore()
// }