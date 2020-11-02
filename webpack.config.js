const path = require('path')
//  productionが本番、developmentが開発用(productionの時は利用しない)
MODE = "development"

module.exports = {
    //ソースマップを有効にする
    devtool: 'source-map',
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
            {test: /\.css$/,
                use: [
                    //  linkタグに出力する機能
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            //  CSS内のurl()メソッドの取り込みを禁止
                            url: false,
                        }
                    }
                ]
            },
            //  sass関係
            /* {test: /\.sass/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            //  css内のurl()メソッドの取り込みを禁止
                            url: false,
                            //  0 => no loaders (default);
                            //  1 => postcss-loader;
                            //  2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },*/
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    },
                    'sass-loader'
                ]
            },
            {
                //  対象となるファイルの拡張子
                test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
                //  画像をBase64として取り込む
                type: "asset/inline",
            },
        ],
    },
    resolve: {
        extensions: [".ts", "tsx", "js", "json"]
    },
    target: ["web"]
}
