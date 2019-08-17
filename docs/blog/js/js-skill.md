---
tags:
- js
abstract: 记载js的一些实用小技巧，帮助日常开发提高效率
---

# js实用小技巧

<TagGroup/>

::: tip
这里记录的小技巧都是一些js函数，希望能够帮助自己，以及帮助大家提高开发效率。
:::

## 原则

### 多个条件的判断实用 Array.includes

``` js
// 判断目标是否是指定的动物
function isTargetAnimal(animal) {
    if (animal === 'monkey' || animal === 'dog') {
        return true;
    }
}

// 使用Array.includes改写
function isTargetAnimal(animal) {
    const targetAnimal = ['monkey', 'dog'];
    return targetAnimal.includes(animal);
}
```

### 更少的嵌套，尽早返回

> 对无效条件提前返回；对多层嵌套可反转条件提前返回。

``` js
// 多重嵌套
function isTargetAnimal(animal, age) {
    const targetAnimal = ['monkey', 'dog'];

    // 判断变量是否存在
    if (animal) {
        // 判断是否为目标动物
        if (targetAnimal.includes(animal)) {
            console.log('is target animal');
            // 判断年龄是否大于10
            if (age > 10) {
                console.log('old target animal');
            }
        }
    } else {
        throw new Error('Require animal!');
    }
}

// 改造函数
function isTargetAnimal(animal, age) {
    const targetAnimal = ['monkey', 'dog'];

    // 无效条件提前抛出错误
    if (!animal) throw new Error('Require animal!');

    // 反转条件提前返回
    if (!targetAnimal.includes(animal)) return;

    if (age > 10) console.log('old target animal');
}
```

### 使用 Map 或对象字面量代替 Switch 语句

`Map` 和对象字面量都能简洁地做到 `Switch` 返回对应数据的效果。

::: tip
`Map` 是 ES2015 以后可用的对象类型，允许您存储键值对
:::

``` js
// 使用switch语句返回statu的含义
function getStatusDesciption(statu) {
    switch (statu) {
        case '401':
            return '未登录';
        case '403':
            return '无权限';
        case '404':
            return '找不到服务器';
        default:
            return '请求超时';
    }
}

// 使用对象字面量
function getStatusDesciption(statu) {
    const status = {
        '401': '未登录',
        '403': '无权限',
        '404': '找不到服务器'
    }

    return status[statu] || '请求超时';
}

// 使用 Map
function getStatusDesciption(statu) {
    const status = new Map()
    .set('401', '未登录')
    .set('403', '无权限')
    .set('404', '找不到服务器');

    return status.get(statu) || '请求超时';
}
```

<Gitalk/>