//引入一个包
const path = require('path')

module.exports = {
    mode:"development",
    //入口文件
    entry: './src/index.ts',
    // 出口
    output:{
        // 存放的目录
        path: path.join(__dirname, 'dist'),
        // 生成的文件名
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.ts/,
                use:'ts-loader',
                exclude:/node-modules/
            }
        ]
    }
}