# TypeScript環境構築手順
1. コンテナ起動
```
docker compose up -d
```
2. コンテナ内に入る
```
docker compose exec -it node-dev sh   
```
3. TypeScriptをインストール
```
npm install --save-dev typescript @types/node
```
- git cloneした場合は、
```
npm install
```

4. tsconfig.jsonの作成（3でTypeScriptのインストールを実行したディレクトリで行う)
```
npx tsc --init
```


# tsファイルのコンパイルとjsファイルの実行
1. tsファイルを作成後、以下のコマンドを実行(tsファイルのコンパイルが実行される)
```
npx tsc
```
1. distに作成されたjsを実行する場合は以下のコマンドを実行
```
node jsファイルの保存先のパス（例：node dist/index.js)
```

# メモ
- 以下のコマンドを実行しておくと,tsファイルが更新されるたびにjsファイルへのコンパイルが実行される
```
npx tsc --watch
```


# ReactとReactDOMのインストール
```
npm install react@latest react-dom@latest
```

# BabelとWebpackのインストール
- Reactの開発に必要な「Babel」と「Webpack」というパッケージをインストール
```
npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev @babel/preset-react babel-loader
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev html-webpack-plugin
```

# .babelrcの作成
- ルートディレクトリに「.babelrc」を作成、下記の内容を記述
```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
# webpack.config.jsの作成
- Webpackの設定情報ファイルを作成
- プロジェクトからWebアプリケーションのファイルを生成するのに必要
- 下記の内容を記述
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules :[
            {
                test: /¥.(jsjsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /¥.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve :{
        extensions: ['.js','.jsx']
    },
    plugins :[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname,'dist')
            },
            {
                directory: path.join(__dirname, 'public'),
                publicPath: '/'
            }
        ],
        compress: true,
        port: 3000
    }
};
```