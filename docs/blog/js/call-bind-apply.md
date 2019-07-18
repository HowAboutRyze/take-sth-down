---
tags:
- js
abstract: 当我们需要改变一个函数的this指向时，会使用到call、apply、bind，那么这三者有什么样的区别，又都是如何实现的呢？本文带你来揭晓
---

# call、apply、bind的实现原理

<TagGroup/>

## 比较

- 相同之处：`call`、`apply`、`bind` 这三者都会改变函数执行的上下文，也就是都会改变函数内部this的指向。
- 不同之处：`call`和`apply`改变了函数的`this`之后传入参数返回执行函数后的结果，`call`在执行函数时传入第二个及其以后的参数，`apply`在执行函数时传入第二个参数（数组），`bind` 不会立即执行函数，而是改变函数的`this`之后返回了拷贝函数，并拥有初始参数。

## 实现原理

### `call` 的实现

``` js
/**
 * 实现call
 * @param thisArg   执行函数体的this
 * @param args      函数体执行时传入的参数
 */

Function.prototype.call = function(thisArg, ...args) {
    if (typeof this !== 'function') {     // 调用call的若不是函数则报错
        throw new TypeError('Error');
    }
    thisArg = thisArg || window;          // 这是调用call的函数的this指向对象
    thisArg.fn = this;                    // 这里的this为调用call的函数，将其添加到thisArg的fn属性中
    const result = thisArg.fn(...args);   // 传入参数执行该函数
    delete thisArg.fn;                    // 删除该属性
    return result;                        // 返回结果
}
```

### `apply` 的实现

`apply` 的实现和 `call` 一样，只有传参有区别

``` js
/**
 * 实现apply
 * @param thisArg   执行函数体的this
 * @param args      函数体执行时传入的参数（数组）
 */

Function.prototype.apply = function(thisArg, args) {
    if (typeof this !== 'function') { 
        throw new TypeError('Error');
    }
    thisArg = thisArg || window;
    thisArg.fn = this;
    let result;
    if(args) {
        result = thisArg.fn(...args);   // 将传入的第二个参数数组作为函数执行的参数传入
    } else {
        result = thisArg.fn();
    }
    delete thisArg.fn;
    return result;
}
```

### `bind` 的实现

`bind` 的简易实现在我的博客[《js函数柯里化》](./currying#_3-固定易变因素)一文中有提过，可做参考。

这里增加实现作为构造函数使用的绑定函数，可使用 `new` 操作符去构造一个由目标函数创建的新实例。

> 作为构造函数使用的绑定函数时，thisArg会被忽略，但是传入的参数仍然可用

``` js {18,19,20,21,22,28}
/**
 * 实现apply
 * @param thisArg   执行函数体的this
 * @returns {function}
 */

Function.prototype.bind = function(thisArg) {
    if(typeof this !== 'function'){
        throw new TypeError(this + 'must be a function');
    }

    // 存储函数本身
    const _this  = this;
    // 去除thisArg的其他参数 转成数组
    const args = [...arguments].slice(1);
    // 返回一个函数
    const bound = function() {
        // 可能返回了一个构造函数，我们可以 new F()，所以需要判断
        if (this instanceof bound) {
            // 将bound绑定给函数作为this
            return _this.apply(this, args.concat(...arguments));
        }
        // apply修改this指向，把两个函数的参数合并传给thisArg函数，并执行thisArg函数，返回执行结果
        return _this.apply(thisArg, args.concat(...arguments));
    }

    // 将bound的原型指向调用bind的函数的this指向对象
    bound.prototype = this.prototype;

    return bound;
}
```

测试绑定后的构造函数，是否能够正确实例化，并与原构造函数共享原型

``` js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() { 
  return this.x + ',' + this.y; 
};

// 正常new实例
var p = new Point(1, 2);
p.toString();  // '1,2'

// 通过bind使构造函数拥有初始值
var YPoint = Point.bind(null, 0);  // x的初始值设为0
var p2 = new YPoint(1);
p2.toString();  // '0,1'

// 判断Point和YPoint是否共享原型，若共享原型，则判断为true
p2 instanceof Point; // true
p2 instanceof YPoint; // true
new Point(17, 42) instanceof YPoint; // true
```

参考：[call, apply, bind的内部实现原理](https://www.cnblogs.com/renzhiwei2017/p/10364760.html)

<Gitalk/>