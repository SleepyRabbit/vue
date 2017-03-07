# demo1

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


这是一个用于演示如何在vue中使用peity图表工具的demo。

peity是一个jQuery库，为了能在vue中使用peity，首先需要导入juery：
1. sudo npm i jquery --save，
2. 然后在webpack.dev.conf.js中加入如下内容：
// jquery plugin
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
3. 接下来在main.js中导入peity.js就可以了：import './assets/jquery.peity'
