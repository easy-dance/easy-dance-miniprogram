# easy-dance-miniprogram

重写easy dance 微信小程序。

## 起步

- ### 推荐开发工具
  
  - [vscode](https://code.visualstudio.com/)
  可以去自行搜索一些插件集成
  
  - Node版本号：v12.6.0 推荐使用nvm进行版本管理，[相关教程](https://zhuanlan.zhihu.com/p/36936107)

- ### 需要了解的
  
  - [Git命令行](https://www.git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

  - [React](https://www.reactjscn.com/)
  
  - [TypeScript](https://www.tslang.cn/) 
    
    [阮一峰教程](https://ts.xcatliu.com/)
  
  - [ES6](http://es6.ruanyifeng.com/)
  
  - [Taro](http://taro-docs.jd.com/taro/docs/README.html)

- ### 运行

> 需要安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html),[Node.js](https://nodejs.org/zh-cn/)

开发环境(热更新，修改代码时在微信开发者工具可以随时查看效果)

```bash
npm run dev:weapp
```

生产环境（打包发布版本）

```bash
npm run build:weapp
```

输入以上指令会生成一个dist目录，可以在微信开发者工具中打开预览

## 代码风格

为了代码(QIANG)风格(PO)统一(ZHENG),配置了代码检查工具tslint

```bash
npm i tslint -g
cd easydance-client/
tslint -c tslint.json './src/*'
```

在vscode中也可以搜索tslint插件，vscode对ts有很好的支持，代码漂红或漂黄的时候可以进行快速修复
