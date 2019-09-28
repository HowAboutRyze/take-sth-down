---
tags:
- js
- ts
abstract: TypeScript 入门学习笔记
---

# TypeScript 入门学习笔记

<TagGroup/>

::: tip
[TypeScript](http://www.typescriptlang.org/) 是 JavaScript 的一个超集，主要提供了**类型系统**和对 **ES6** 的支持，它由 Microsoft 开发，代码开源于 [GitHub](https://github.com/Microsoft/TypeScript) 上。
:::

参考书籍：[TypeScript 入门教程](https://ts.xcatliu.com/)

## [在线compiler](http://www.typescriptlang.org/play/index.html)

## 安装 TypeScript

TypeScript 的命令行工具安装方法如下：

``` sh
npm install -g typescript
```
以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。
编译一个 TypeScript 文件很简单：

``` sh
tsc hello.ts
```

我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀。

## 数据类型

JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。

### 布尔值、数值、字符串

前四种类型就是在参数名称后面使用冒号来指定参数的类型。

``` ts
let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

### 空值

JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：

``` ts
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null：`

``` ts
let unusable: void = undefined;
```

与 `void` 不同，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 number 类型的变量，但 void 类型的变量不能赋值给 `number` 类型的变量。

### 任意值类型

`any` 类型，允许被赋值为任意类型。

``` ts
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

::: warning
注意：

- 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
- 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。
- 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
:::

### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。使用 | 分隔每个类型。

``` ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

::: warning
注意：只能访问此联合类型的所有类型里共有的属性或方法。
:::

### 对象的类型--接口（Interfaces）

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

简单的例子

``` ts
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。

接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。

::: warning
注意：赋值的时候，变量的形状必须和接口的形状保持一致。定义的变量比接口多了或少了一些属性是不允许的。
:::

#### 可选属性、任意属性、只读属性

``` ts
// ?表示属性是可选的，可选属性的含义是该属性可以不存在。仍然不允许添加未定义的属性。
// [propName: string]: any 表示允许 obj[xxx] 这样的动态属性
// readonly 表示只读，不能对其属性进行重新赋值
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any; // 使用 [propName: string] 定义了任意属性取 string 类型的值。
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// 不允许对只读属性 id 重新赋值，如：tom.id = 9527
```

### 数组类型

``` ts
// 最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组的项中不允许出现其他的类型：
let fibonacci: number[] = [1, '1', 2, 3, 5];

// 也可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

// 一个比较常见的做法是，用 `any` 表示数组中允许出现任意类型
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

类数组（Array-like Object）不是数组类型，比如 `arguments`。

类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

``` ts
function sum() {
    let args: IArguments = arguments;
}
```

### 函数类型

在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）。

一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到。

``` ts
// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}

// 函数表达式
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 用接口定义函数的形状，可添加参数默认值，可选参数用 ? 表示
interface SearchFunc {
    (source: string, key: string = 'Tom', subString?: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, key: string = 'Tom', subString?: string) {
    return source.search(subString) !== -1;
}

// 剩余参数用数组的类型来定义
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
```

::: warning
注意：
    - 输入多余的（或者少于要求的）参数，是不被允许的。
    - 可选参数后面不允许再出现必需参数了。
:::

### 类型断言

语法：`<类型>值` 或 `值 as 类型`。

> 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。

``` ts
// 将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number): number {
    if ((<string>something).length) {  // number 类型无 .length 属性，所以需要断言 something 为 string 属性，否则会报错
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

::: warning
注意： 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的。
:::

## 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

### 新语法索引

- `declare var` 声明全局变量
- `declare function` 声明全局方法
- `declare class` 声明全局类
- `declare enum` 声明全局枚举类型
- `declare namespace` 声明（含有子属性的）全局对象
- `interface` 和 `type` 声明全局类型
- `export` 导出变量
- `export namespace` 导出（含有子属性的）对象
- `export default ES6` 默认导出
- `export = commonjs` 导出模块
- `export as namespace` UMD 库声明全局变量
- `declare global` 扩展全局变量
- `declare module` 扩展模块
- `/// <reference />` 三斜线指令

### 什么是声明文件

通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件

> 声明文件必需以 .d.ts 为后缀。

> 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。

```
目录
/path/to/project
├── src
|  ├── index.ts
|  └── jQuery.d.ts
└── tsconfig.json
```

``` ts
// src/jQuery.d.ts
declare var jQuery: (selector: string) => any;

// src/index.ts
jQuery('#foo');
```

> 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件。



<Gitalk/>