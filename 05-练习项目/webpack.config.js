/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 11:15:34
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 17:16:23
 * @FilePath: /learn-ts/05-练习项目/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: wenzeyang 8146659@qq.com
 * @Date: 2022-07-28 11:15:34
 * @LastEditors: wenzeyang 8146659@qq.com
 * @LastEditTime: 2022-07-28 11:30:04
 * @FilePath: /learn-ts/05-练习项目/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//引入一个包
const path = require('path')

module.exports = {
    mode:"development",
    //入口文件
    entry: './src/index.ts',
    resolve:{
        extensions:['.ts','.js']
    },
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
                test:/\.ts$/,
                use:[
                    'ts-loader'
                ],
                exclude:/node-modules/
            },
            //设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugin:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    }
}