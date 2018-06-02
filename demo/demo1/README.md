# webpack3x

## webpack命令

```sh

webpack --watch   //监听变动并自动打包

webpack -p    //压缩混淆脚本，这个非常非常重要！

webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了

```

## 使用npm scrtpt 执行webpack 打包

```sh

npm run build

```

## npm scripts

npm scripts 不是简简单单地执行 shell 语句而已，在执行之前它会将 node_modules/.bin/ 加入到环境变量 PATH 中，
所以在 npm scripts 中可以直接使用那些存在于 node_modules/.bin/ 中的可执行文件。
