## yarn的使用

> 中文地址 https://yarn.bootcss.com

`
快速、可靠、安全的依赖管理工具。
`
1. 安装

```
npm install -g yarn

查看版本 yarn  --version
```

2. 使用

初始化一个新项目
> yarn init

添加依赖包
```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```
将依赖项添加到不同依赖项类别中

> 分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：
```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```
升级依赖包
```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
移除依赖包

`
yarn remove [package]
`

安装项目的全部依赖
```
yarn
或者
yarn install
```