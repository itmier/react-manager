## 项目创建

`yarn create vite`

## EditConfig

```js
# https://editorconfig.org
root = tue

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

> root=true是对所有文件生效
>
> end_of_line=lf  不同的OS 换行符是不同的
>
> ```js
> lf: Linux | MacOS
> cr: 老版MacOS
> crlf: Windows
> 这个要特别注意下,  不同OS格式化时会因为这个在IDE里一直爆红, 而格式化插件好像不起作用, 就是因为这个行尾序列的问题,出现这个问题, 只需要在IDE的状态栏里改一下行尾序列就好了
> ```
>
> insert_final_newline=true 代码最后新增一行
>
> trim_trailing_whitespace: 修剪尾随空格