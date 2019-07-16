---
tags:
- js
abstract: 本文介绍对 js 函数进行柯里化的过程，以及函数柯里化的作用。通过函数柯里化，我们可以体会到高阶函数的灵活多变，以及让使用者有更多发挥空间。
---

# js函数柯里化

<TagGroup/>

::: tip
在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。这个技术由 Christopher Strachey 以逻辑学家哈斯凯尔·加里命名的，尽管它是 Moses Schönfinkel 和 Gottlob Frege 发明的。
:::

## 什么是柯里化

柯里化函数的结果，就是将在传递给函数部分参数时，它持续地返回一个新函数直到所有的参数用尽为止。通过闭包将这些参数存储起来，然后当柯里化链中的最后一个函数被返回和执行时会全部被用来执行。
``` js
fn(a, b, c, d) => fn(a)(b)(c)(d)；

fn(a, b, c, d) => fn(a, b)(c)(d)；

fn(a, b, c, d) => fn(a)(b, c, d)；
```

举个例子，将下面的函数转化成柯里化函数
``` js
function sum(a, b, c) {
    return a + b + c;
}
```
我们会这样做：
``` js
function sum(a) {
    return b => {
        return c => {
            return a + b + c;
        }
    }
}

sum(1)(2)(3);  // 6
```

## 柯里化函数

可将柯里化通用方法抽离出来：
``` js {2,3,4,5,6}
// 柯里化函数
function currying(fn, ...args) {
    return args.length < fn.length 
        ? (...args2) => currying(fn, ...args, ...args2) 
        : fn(...args)
}

function sum(a, b, c) {
    return a + b + c;
}

// 将sum函数柯里化
let sum2 = currying(sum);

sum2(1)(2)(3);  // 6
```

## 柯里化的作用

### 1.提高适用性

能够提前绑定好部分参数，达到参数复用的效果。避免频繁调用具有相同的参数的函数。
如：我们的 `sum` 函数在某个场景中，第一个参数都是 `5`，如果每次使用都传入 `5` 这个参数，就会使得适用性减弱。这个时候我们可以利用柯里化，适当的缩小函数的适用范围，提高适用性。
``` js
let sumWith5 = currying(sum, 5);
sumWith5(2)(3);  // 10
sumWith5(5)(6);  // 16
```

### 2.延迟执行

按我们需求进行传参，并累积传入的参数，最后执行。
``` js {2,3,4,5,6,7,8,9,10,11}
// 延迟执行的柯里化函数
var currying = function(fn) {
    var _args = []
    return function cb() {
        if (arguments.length == 0) {
            return fn.apply(this, _args)
        }
        Array.prototype.push.apply(_args, arguments);
        return cb;
    }
}

// 例子：累加函数
function sum(...args) {
    let res = 0;
    args.forEach(item => {
        res += item;
    })
    return res;
}

let sumC = currying(sum);

sumC(1)(3)(5)();  // 9    最后的括号是执行函数的意思
sumC(1);         // function cb()
sumC(2)();       // 12    累计12
```

### 3.固定易变因素

柯里化可以提前把易变因素和传参固定下来，生成一个更明确的应用函数。最典型的代表就是 `bind` 函数的实现，即绑定 `this`
``` js
Function.prototype.bind = function(context) {       // context是第一个参数，需要绑定this的对象
    var _this = this,           // this是原函数对象
        _args = Array.prototype.slice.call(arguments, 1);       // 将除第一个参数以外的参数转成数组
    return function() {
        return _this.apply(context, _args.concat(Array.prototype.slice.call(arguments)))
        // _args为预传参数，arguments为函数真正运行时传入的参数，将_args和arguments合并起来后再执行
    }
}
```

<Gitalk/>