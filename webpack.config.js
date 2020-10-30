const path = require('path')
//  productionが本番、developmentが開発用
const MODE = "development"

module.exports = {

    mode: MODE,
    //  エントリーポイントを./src/pages/index.tsxにする
    entry: path.resolve(__dirname, './src/pages/index.tsx'),
    output: {
        //  distディレクトリにmain.jsとしてバンドる
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            //  typescriptをts-loaderで変換
            {test: /\.tsx?$/, use: 'ts-loader'},
            //  css関係
            {test: /\.css$/, use: ''},
        ],
    },
    resolve: {
        extensions: [".ts", "tsx", "js", "json"]
    },
    target: ["web", "ES5"]
}
