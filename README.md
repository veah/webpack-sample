# webpack-sample
 webpack-sample
 refer to http://www.jianshu.com/p/42e11515c10f

 Will be more conclusion later here
 ***

## sass设置

 * sass支持需要安装loaders先，命令如下

    `npm install sass-loader node-sass --save-dev`
 * 然后webpack中配置modules
    ```
    module.exports = {
        ...
        module: {
            loaders: [
            {
                test: /\.scss$/,
                loader:'style!css!sass'
            }
            ]
        }
    };
    ```

 * 最后只要在需要css文件引入的地方引入`fileName.scss`就好

        import './main.scss'/
 * 还可以使用node-sass配置更多选项设置，具体参照[node-sass](https://github.com/sass/node-sass)