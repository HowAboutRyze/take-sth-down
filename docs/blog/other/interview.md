---
tags:
- 面试题
abstract: 收集记录面试过程中遇到的问题，以及在其他资料中遇到的面试题。
---

# 面试题记录

<TagGroup/>

## 代码执行类

### 1.写出以下代码输出结果

``` js
var a = 1;
if(true) {
	var b = 2;
}
function foo() {
	var c = 3;
}
foo()
console.log('a：', a)
console.log('b：', b)
console.log('c：', c)
```

<details><summary><b>查看答案</b></summary>
    <p><b>
        结果：
    </b></p>
    <ul>
        <li>a： 1</li>
        <li>b： 2</li>
        <li>
            <span style="color:red;">Uncaught ReferenceError: c is not defined</span>
            这是因为<code>foo()</code>函数内定义的<code>c</code>具有局部作用域，在其作用域外无法访问<code>c</code>，所以抛出<code>c</code>未定义的错误。
        </li>
    </ul>
</details>

### 2.请写出以下输出结果

``` js
function Foo(){
    getName = function(){alert(1+'1');};
    return this;
}
Foo.getName = function(){alert(typeof null);}; 
Foo.prototype.getName = function(){alert(NaN === NaN);};
var getName = function(){alert(parseInt('1234S'));};
function getName(){alert(4 && 5);};
//请写出一下输出结果
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

<details><summary><b>查看答案</b></summary>
    <p><b>
        结果：
    </b></p>
    <pre><code>
function Foo(){                                                    //构造函数
    getName = function(){alert(1+'1');};
    return this;
}
Foo.getName = function(){alert(typeof null);};                      //静态方法
Foo.prototype.getName = function(){alert(NaN === NaN);};            //原型方法
var getName = function(){alert(parseInt('1234S'));};                //全局方法
function getName(){alert(4 && 5);};                                 //全局方法
//请写出一下输出结果
Foo.getName();                                                     // object，弹出(typeof null)的结果
getName();                                                         // 1234，最后一个全局方法函数声明提前，被倒数第二个只是变量声明提前的全局方法覆盖
Foo().getName();                                                   // 11，无实例化地执行构造函数，构造函数内getName覆盖全局方法，并return了window，最后为：window.getName()，弹出11
getName();                                                         // 11，全局方法已被上一步的构造函数内的方法覆盖
new Foo.getName();                                                 // object，在这行执行代码中，'.'的优先级比'new'高，所以先执行Foo.getName()，弹出object，无返回值，new失效
new Foo().getName();                                               // false，有了()后，new Foo()就是调用构造函数了，比'.'优先级高，所以调用的是原型方法，结果应为 false
new new Foo().getName();                                           // false，先执行中间的new Foo()调用构造函数，然后执行 ' . ' 后的方法，即原型方法，然后再执行前面已经没有意义的new
    </code></pre>
</details>

### 3.下面代码输出什么

``` js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

<details><summary><b>查看答案</b></summary>
    <p><b>
        结果：B
    </b></p>
    <p>
        请注意，<code>diameter</code>是普通函数，而<code>perimeter</code>是箭头函数。
        对于箭头函数，<code>this</code>关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！ 这意味着当我们调用<code>perimeter</code>时，它不是指向<code>shape</code>对象，而是指其定义时的环境（<code>window</code>）。没有值<code>radius</code>属性，返回<code>undefined</code>。
    </p>
</details>

<style>
summary {
    cursor: pointer;
}
summary:focus {
    outline: none;
}
summary:after {
    content: "🙈";
    float: left;
    margin-right: 5px;
}
details[open] summary:after {
    content: "🐵";
}
</style>

<Gitalk/>