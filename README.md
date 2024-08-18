# ts 学习

### 一、 环境初始化
#### 1. 环境安装
* 初始化 npm ini -y
* 安装 Typescript
  > npm i typescript -D
* 生成 tsconfig.json 文件, 终端执行 tsc
#### 2. ts 自动运行
* 安装 ts-node 
  > npm install ts-node -D
* 安装 nodemon
  > npm install nodemon -D
  "start": "nodemon --watch src/ -e ts --exec ts-node src/index.ts"
#### 3. Parcel 自动打包
* 安装 Parcel 浏览器自动运行 ts
  > npm install parcel-bundler -D
* 新建 index.html
```html
// index.html 直接引入 ts
<script src="./src/index.ts"></script>
```
* package.json 添加指令
> "startparcel": "parcel ./index.html",


