# zhaohu-ui

### 项目运行
```
项目demo运行时  需要注释vue.config.js中配置 然后 npm run serve 
```
// vue.config.js
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
    chainWebpack: config => {
      // packages和examples目录需要加入编译
      config.module
          .rule('js')
          .include.add(/packages/)
          .end()
          .include.add(/src/)
          .end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              // 修改它的选项...
              return options
          })
    }
}

### 项目打包插件模式 npm run lib
```
解除vue.config.js 文件中的注释 然后 npm run lib
```

### 项目上传npm共有包模式
```
package.json 文件中 name同层下增加入口文件配置    "main": ""main": "lib/zh.umd.min""
npm login  // 输入用户名 密码 邮箱 以及一次性验证码

npm publish // 提交lib包到npm中
```

### 安装依赖包
```
npm i dlkj-ui

main.js中  
import dlkjUI from dlkj-ui

app.use(dlkjUI)  or Vue.use(dlkjUI)
```

## 出现的问题
如果出现 dlkj-ui not found的情况
1. 在node_modules中查找  dlkj-ui文件夹是否存在
2. 如果存在 则查看package.json 文件中的main 入口文件配置是否配置了 如果没有配置则手动配置插件入口文件
3. 如果不存在 重新 install一下插件依赖