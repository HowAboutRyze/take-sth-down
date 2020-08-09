---
tags:
- vscode
abstract: vscode 的一些使用小技巧记录
---

# vscode 小技巧

<TagGroup/>

## 好用的插件

### Draw.io Integration

一个让你可以在 vscode 上使用 Draw.io 的能力画图的插件。

## 自带功能

### 代码片段

官方介绍：https://code.visualstudio.com/docs/editor/userdefinedsnippets

vscode 的代码片段功能支持我们定义一些能够复用的代码片段。

这里记录一份 react 类组件代码片段，在仓库目录下的 .vscode 文件夹下创建 react.code-snippets 文件。

```javascript
{
	"react class component": {
    "scope": "javascript,javascriptreact", // 代码片段作用域，表示代码片段作用的文件类型，javascriptreact 代表 .jsx 文件
		"prefix": "rcc", // 触发代码片段的字段
		"body": [
			"import React, { Component } from 'react';",
			"",
      "export default class ${1:${TM_FILENAME_BASE/^\\w/${0:/upcase}/}} extends Component {",
      // ${1:${TM_FILENAME_BASE/^\\w/${0:/upcase}/}} 将文件名作为 react 类名，并将第一个字母转为大写
      // ${1} 代表光标第一个指到位置，TM_FILENAME_BASE 代表文件名
			"\trender() {",
			"\t\treturn (",
    	"\t\t\t<div className=\"$2\">$3</div>", // $2和$3代表光标到的第二第三个位置
			"\t\t);",
			"\t}",
			"}",
			""
		],
		"description": "A react function component."
	}
}
```


<Gitalk/>