## React多页面应用项目模版

包括Babel、热更新、PreCss、PostCss、静态资源打包、自动化生成多入口页面、
压缩js代码、图片转码、eslint、prop-types检查等

 index.html模板中整合了rem 默认比例：1rem = 16px 方便从Sketch直接查看元素

## 环境搭建
#### 1. 安装nodejs
```
官网下载：https://nodejs.org/en/
版本要求：8.9.x版本
```

#### 2. 下载当前项目到本地磁盘，解压后进入到ReactTemplate目录下，打开CMD命令窗口
执行`npm install`命令，将自动下载项目模块文件，等待完毕即可

#### 3. 环境搭建完毕，根据开发说明使用即可。

## 开发说明

#### 1. 添加页面
```
a. 在component目录下新建一个目录(例如：shop)

b. 在shop目录中开发新组件JSX

c. 在/config/entry/entry.js中添加新页面的描述信息
```

#### 2. 根目录下的index.html介绍
index.html为模板文件，如果需要对所有生成的页面作统一修改可以修改模板文件

#### 3. 开发模式运行

**当新增页面时需要运行devNew**
```
npm run devNew
```

**运行webpack服务器，支持热部署热更新**
```
npm run dev
```

#### 4. 生产模式运行
```
npm run prod
执行完毕后查看pc目录下
```