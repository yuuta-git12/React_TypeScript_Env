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
npx tsc --init
```
1. distに作成されたjsを実行する場合は以下のコマンドを実行
```
node jsファイルの保存先のパス（例：node dist/index.js)
```