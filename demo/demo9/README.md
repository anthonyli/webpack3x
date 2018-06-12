# 增加CSS loader相关

- css-loader

 我们需要在js文件里，通过require的方式来引入css，我们来看具体的方法，首先需要安装css-loader

- style-loader

安装style-loader的目的是为了在html中以style的方式嵌入css

- less-loader

同样的，如果我们需要在js中，require，.less文件，那么我们需要增加包less-loader和less包


- webpack打包时终端参数各代表什么

```
Time: 2086ms
  Asset    Size  Chunks                    Chunk Names
main.js  891 kB       0  [emitted]  [big]  main
  [54] ./src/main.js 1.44 kB {0} [built]
 [113] ./src/index.less 1.2 kB {0} [built]
 [114] ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/index.less 843 bytes {0} [built]
```

## 顶部的那部分，表示构建输出结果

- asset列 - 指构建后输出的资源文件，名称由filename的配置决定，如可能是[name].[hash].js这样子
- size列 - 指构建后输出的资源文件的大小
- emitted列 - 指文件被输出
- Chunk Names列 - 指这个构建块的名称，即各个chunk块输出期间chunk块名称，比如entry配置项里定义的入口名称、CommonsChunkPlugin里定义的名称等等
- Chunks列 - 表示有每个入口chunk中有哪些模块也被当成了入口chunk处理

底部的部分，表示构建输出过程

构建过程如下：
因为没有使用详细的日志输出，所以解释上会少了一些细节，我做适当的补充。

最左边的数字表示构建过程处理每个模块顺序（每次构建都会因为你代码中模块引入的顺序随时改变）
黄色数字那块表示当前资源chunk块里被用到过，如果被多个chunk用到，那么这里就会是多个数字
绿色built表示它是构建过程的一部分
