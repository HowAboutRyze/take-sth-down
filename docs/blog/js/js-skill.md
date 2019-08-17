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

## 函数

### requestAnimationFrame：window动画

``` js
window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.setTimeout(callback, 1000 / 60);
    };
    
window.cancelAnimationFrame = window.cancelAnimationFrame ||
    Window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.clearTimeout(id);
    }
```

### random：返回一个lower - upper之间的随机数

``` js
function random(lower, upper){
    lower = +lower || 0
    upper = +upper || 0
    return Math.random() * (upper - lower) + lower;
}
```

### toFullScreen：全屏、exitFullscreen：退出全屏

``` js
function toFullScreen(){
    let elem = document.body;
    elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert("浏览器不支持全屏");
}

function exitFullscreen(){
    let elem = parent.document;
    elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert("切换失败,可尝试Esc退出");
}
```

### 生成随机UID

> 转自[提升开发幸福感的10条JS技巧](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651556917&idx=1&sn=aa7df70bf8069cc12f31623d10823d58&chksm=80255bf4b752d2e2754b600f38750cbc09a3db02f081d73491497a1cd23a0708449872174241&mpshare=1&scene=1&srcid=&sharer_sharetime=1566036967689&sharer_shareid=9e738250ad6247e9a347fe89bbf00ad1&key=851d4ebacadb36f7b22ed66c44063c73760eec0653974bbf4c06e5c0011c14c4dbaebf569f288f204b3c44e02a312325c2ad230bf4f55b7a7200af4e6dd2c2067032a3e05290bf42a5fdd03bf65af5ba&ascene=1&uin=MjYyMjg4Mzk0NA%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=a3CuwwKNK48bNR6qPE5ZxtCaXgBfGeNI8I9v8lNi8%2FsUy34HOzwPphhVikHjXUFr)

``` js
const genUid = () => {
    var length = 20;
    var soupLength = genUid.soup_.length;
    var id = [];
    for (var i = 0; i < length; i++) {
        id[i] = genUid.soup_.charAt(Math.random() * soupLength);
    }
    return id.join('');
}
genUid.soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
genUid(); // .68dv`WH_%#:,cis=U(o
```

### 无loop生成指定长度的数组

``` js
const List = len => [...new Array(len).keys()];
const list = List(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 一行代码去重数组

``` js
const list = [1, 1, 2, 3, 6, 45, 8, 5, 4, 6, 5];
const uniqueList = [...new Set(list)]; // [1, 2, 3, 6, 45, 8, 5, 4]
```

### RGB色值生成16进制色值

``` js
const rgb2Hex = (r, g, b) => {
    r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
    g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
    b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
    r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
    g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
    b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
    return '#' + r + g + b;
}
rgb2Hex(100, 50, 0); // "#ff7f00"
```

### 颜色混合

``` js
const colourBlend = (c1, c2, ratio) => {
    ratio = Math.max(Math.min(Number(ratio), 1), 0);
    let r1 = parseInt(c1.substring(1, 3), 16);
    let g1 = parseInt(c1.substring(3, 5), 16);
    let b1 = parseInt(c1.substring(5, 7), 16);
    let r2 = parseInt(c2.substring(1, 3), 16);
    let g2 = parseInt(c2.substring(3, 5), 16);
    let b2 = parseInt(c2.substring(5, 7), 16);
    let r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    let g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    let b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    r = ('0' + (r || 0).toString(16)).slice(-2);
    g = ('0' + (g || 0).toString(16)).slice(-2);
    b = ('0' + (b || 0).toString(16)).slice(-2);
    return '#' + r + g + b;
}
colourBlend('#ff0000', '#3333ff', 0.5); // "#991a80"
```

### 判断是否为质数

``` js
const mathIsPrime = n => {
    if (n === 2 || n === 3) {
        return true;
    }
    if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    for (let x = 6; x <= Math.sqrt(n) + 1; x += 6) {
        if (n % (x - 1) == 0 || n % (x + 1) == 0) {
            return false;
        }
    }
    return true;
}
mathIsPrime(0) // true
```

### 遍历类数组对象

``` js
const elements = document.querySelectorAll(selector);
[].prototype.forEach.call(elements, (el, idx, list) => {
    console.log(el); // 元素节点
})
```

### 判断对象类型

``` js
const type = data => Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
type({}); // object
```

### 优化多层判断条件

``` js
const getScore = score => {
    const scoreData = new Array(101).fill(0)
    .map((data, idx) => ([idx, () => (idx < 60 ? '不及格' : '及格')]));
    const scoreMap = new Map(scoreData);
    return (scoreMap.get(score) 
          ? scoreMap.get(score)() 
          : '未知分数');
}
getScore(30); // 不及格
```

### 时间格式化

``` js
const dateFormatter = (formatter, date) => {
    date = (date ? new Date(date) : new Date);
    const Y = date.getFullYear() + '',
          M = date.getMonth() + 1,
          D = date.getDate(),
          H = date.getHours(),
          m = date.getMinutes(),
          s = date.getSeconds();
    return formatter.replace(/YYYY|yyyy/g, Y)
                    .replace(/YY|yy/g, Y.substr(2, 2))
                    .replace(/MM/g, (M < 10 ? '0' : '') + M)
                    .replace(/DD/g, (D < 10 ? '0' : '') + D)
                    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
                    .replace(/mm/g, (m < 10 ? '0' : '') + m)
                    .replace(/ss/g, (s < 10 ? '0' : '') + s);
}

dateFormatter('YYYY-MM-DD HH:mm', '1995/02/15 13:55'); // 1995-02-15 13:55
```

<Gitalk/>