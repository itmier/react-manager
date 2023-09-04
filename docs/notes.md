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

## Prettier

### PlayGround

[Prettier PlayGround](https://prettier.io/playground/)

### 部分配置

- `trailingComma` ：对象(不包含数组)的最后一个属性末尾也会添加 `,` ，比如 `{ a: 1, b: 2 }` 会格式为 `{ a: 1, b: 2, }`
- `tabWidth` ：缩进大小
- `semi` ：语句是否添加分号
- `jsxSingleQuote` ：jsx 语法下是否单引号。
- `endOfLine` ：同 `.editorconfig` 的同名字段
- `printWidth` ：单行代码最长字符长度，超过之后会自动格式化换行, 如80, 满80个字符后会自动换行
- `bracketSpacing` ：在对象中的括号之间打印空格， `{a: 5}` 格式化为 `{ a: 5 }`
- `arrowParens` ：箭头函数的参数无论有几个，都要括号包裹。比如 `(a) => {}` ，如果设为 `avoid` ，会自动格式化为 `a => {}`

### Common Prettier Config

```js
module.exports = {
  // 每行最大列，超过换行
  printWidth: 120,
  // 使用制表符而不是空格缩进
  useTabs: false,
  // 缩进
  tabWidth: 2,
  // 结尾不用分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 在JSX中使用单引号而不是双引号
  jsxSingleQuote: true,
  // 箭头函数里面，如果是一个参数的时候，去掉括号
  arrowParens: 'avoid',
  // 对象、数组括号与文字间添加空格
  bracketSpacing: true,
  // 对象尾随逗号
  trailingComma: 'none',
}
```

### Common VSCode WorkSPace Settings

```json
{
  "prettier.configPath": ".prettierrc.cjs",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



