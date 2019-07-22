---
tags:
- css
abstract: 集中展示一些自己写的和别人的优秀CSS案例。
---

# CSS 案例展示

<TagGroup/>

## 天气不可能那么可爱

参考：[【不可思议的CSS】天气不可能那么可爱](https://juejin.im/post/5d2f3f3351882556c3186f57)

### Sunny

::: demo-code
<template>
    <div class="weather-first">
        <div class="sunny">
            <span class="sun"></span>
        </div>
    </div>
</template>

<style>
.weather-first {
    width: 100%;
    font-size: -webkit-calc(1em);
    font-size: calc(1em);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    font-family: 'Work Sans', sans-serif;
    background: #212125;
    color: #e6e8db;
}
.weather-first .sunny {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    display: block;
    position: relative;
    font-size: -webkit-calc(11em);
    font-size: calc(11em);
    width: 1em;
    height: 1em;
    margin: .3em;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #fd6f21;
            box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #fd6f21;
    background: -webkit-linear-gradient(top right, #fc5830 0%, #f98c24 65%);
    background: linear-gradient(to top right, #fc5830 0%, #f98c24 65%);
}
.weather-first .sun {
    position: absolute;
    top: 20%;
    left: 80%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    border-radius: 100%;
    background: #ffeb3b;
    -webkit-box-shadow: 0 0 0 0.02em currentColor inset, 0 0 0.3em -0.03em #fd6f21;
            box-shadow: 0 0 0 0.02em currentColor inset, 0 0 0.3em -0.03em #fd6f21;
    -webkit-transform-origin: .1em .1em;
        -ms-transform-origin: .1em .1em;
            transform-origin: .1em .1em;
}
.weather-first .sun::after {
    content: '';
    position: absolute;
    top: .1em;
    left: 0;
    will-change: transform;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    width: .1em;
    height: .1em;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.1);
    -webkit-box-shadow: 0 0 0.1em 0 rgba(255, 255, 255, 0.3) inset, -0.1em -0.1em 0 0.2em rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 0.1em 0 rgba(255, 255, 255, 0.3) inset, -0.1em -0.1em 0 0.2em rgba(255, 255, 255, 0.1);
    -webkit-animation: flare 12000ms infinite alternate linear;
            animation: flare 12000ms infinite alternate linear;
}
@-webkit-keyframes flare {
    to {
        -webkit-transform: translate(-0.3em, 0.3em);
                transform: translate(-0.3em, 0.3em);
        opacity: .4;
        font-size: .2em;
    }
}
@keyframes flare {
    to {
        -webkit-transform: translate(-0.3em, 0.3em);
                transform: translate(-0.3em, 0.3em);
        opacity: .4;
        font-size: .2em;
    }
}
</style>
:::

### Cloudy

::: demo-code
<template>
    <div class="weather-first">
        <div class="cloudy">
            <span class="cloud"></span>
            <span class="cloud"></span>
        </div>
    </div>
</template>

<style>
.weather-first {
    width: 100%;
    font-size: -webkit-calc(1em);
    font-size: calc(1em);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    font-family: 'Work Sans', sans-serif;
    background: #212125;
    color: #e6e8db;
}
.weather-first .cloudy {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    display: block;
    position: relative;
    font-size: -webkit-calc(11em);
    font-size: calc(11em);
    width: 1em;
    height: 1em;
    margin: .3em;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #c9e8de;
            box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #c9e8de;
    background: -webkit-gradient(linear, from(#1b9ce2), to(#e0e2e5));
    background: -webkit-linear-gradient(top right, #1b9ce2 0%, #e0e2e5 90%);
    background: linear-gradient(to top right, #1b9ce2 0%, #e0e2e5 90%);
}
.weather-first .cloud {
    position: absolute;
    top: .1em;
    left: 65%;
    width: .37em;
    height: .13em;
    border-radius: .1em;
    background-color: #fff;
    -webkit-box-shadow: 0 0 0.1em 0.02em #f0f2f0 inset, 0 0 0.3em -0.03em #c9e8de;
            box-shadow: 0 0 0.1em 0.02em #f0f2f0 inset, 0 0 0.3em -0.03em #c9e8de;
    -webkit-animation: move 3000ms infinite ease-in-out;
            animation: move 3000ms infinite ease-in-out;
}
.weather-first .cloud + .cloud {
    top: 25%;
    left: 40%;
    -webkit-animation: move 3700ms infinite linear;
            animation: move 3700ms infinite linear;
}
.weather-first .cloud::before,
.weather-first .cloud::after {
    content: '';
    position: inherit;
    border-radius: inherit;
    background-color: inherit;
    -webkit-box-shadow: inherit;
            box-shadow: inherit;
    bottom: 30%;
}
.weather-first .cloud::before {
    left: .05em;
    width: .2em;
    height: .2em;
}
.weather-first .cloud::after {
    left: .15em;
    width: .15em;
    height: .15em;
}
@-webkit-keyframes move {
    50% {
        -webkit-transform: translateX(-0.05em);
                transform: translateX(-0.05em);
    }
}
@keyframes move {
    50% {
        -webkit-transform: translateX(-0.05em);
                transform: translateX(-0.05em);
    }
}
</style>
:::

### Snowy

::: demo-code
<template>
    <div class="weather-first">
        <div class="snowy">
            <span class="snowman"></span>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<style>
.weather-first {
    width: 100%;
    font-size: -webkit-calc(1em);
    font-size: calc(1em);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    font-family: 'Work Sans', sans-serif;
    background: #212125;
    color: #e6e8db;
}
.weather-first .snowy {
    -webkit-box-flex: 0;
    -webkit-flex: none;
        -ms-flex: none;
            flex: none;
    display: block;
    position: relative;
    font-size: -webkit-calc(11em);
    font-size: calc(11em);
    width: 1em;
    height: 1em;
    margin: .3em;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #c9e8de;
            box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #c9e8de;
    background: -webkit-gradient(linear, from(#758595), to(#e0e2e5));
    background: -webkit-linear-gradient(bottom left, #758595 0%, #e0e2e5 90%);
    background: linear-gradient(to bottom left, #758595 0%, #e0e2e5 90%);
}
.weather-first .snowy ul {
    position: absolute;
    list-style: none;
    top: 0%;
    left: 10%;
    right: 0%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.weather-first .snowy li::before,
.weather-first .snowy li::after {
    content: '';
    position: absolute;
    list-style: none;
    width: .015em;
    height: .01em;
    border-radius: 100%;
    background-color: currentColor;
    will-change: transform, opacity;
    -webkit-animation: snow 3700ms infinite ease-out;
            animation: snow 3700ms infinite ease-out;
    opacity: 0;
}
.weather-first .snowy li:nth-child(2n+1)::before,
.weather-first .snowy li:nth-child(13n+11)::after {
    top: -7%;
    left: 40%;
}
.weather-first .snowy li:nth-child(3n+2)::before,
.weather-first .snowy li:nth-child(11n+7)::after {
    top: 5%;
    left: 90%;
    -webkit-animation-delay: 1000ms;
            animation-delay: 1000ms;
}
.weather-first .snowy li:nth-child(5n+3)::before,
.weather-first .snowy li:nth-child(7n+5)::after {
    top: -10%;
    left: 80%;
    -webkit-animation-delay: 2000ms;
            animation-delay: 2000ms;
}
.weather-first .snowy li:nth-child(7n+5)::before,
.weather-first .snowy li:nth-child(5n+3)::after {
    top: 10%;
    left: 10%;
    -webkit-animation-delay: 1300ms;
            animation-delay: 1300ms;
}
.weather-first .snowy li:nth-child(11n+7)::before,
.weather-first .snowy li:nth-child(3n+2)::after {
    top: 20%;
    left: 70%;
    -webkit-animation-delay: 1500ms;
            animation-delay: 1500ms;
}
.weather-first .snowy li:nth-child(13n+11)::before,
.weather-first .snowy li:nth-child(2n+1)::after {
    top: 35%;
    left: 20%;
    -webkit-animation-delay: 500ms;
            animation-delay: 500ms;
}
.weather-first .snowman {
    position: absolute;
    bottom: 30%;
    left: 40%;
    width: .15em;
    height: .15em;
    opacity: .9;
    background: currentColor;
    border-radius: 100%;
}
.weather-first .snowman::after {
    content: '';
    position: absolute;
    top: 90%;
    left: 30%;
    -webkit-transform: translate(-50%, 0%);
        -ms-transform: translate(-50%, 0%);
            transform: translate(-50%, 0%);
    width: .275em;
    height: .3em;
    border-radius: inherit;
    background-color: currentColor;
}
.weather-first .snowman::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 50%;
    -webkit-transform: translate(-55%, -50%);
        -ms-transform: translate(-55%, -50%);
            transform: translate(-55%, -50%);
    width: .45em;
    height: .4em;
    border-radius: 60%;
    border: .02em solid transparent;
    border-bottom-color: #758595;
    will-change: border-radius;
    -webkit-animation: snowman 9000ms infinite ease-in;
            animation: snowman 9000ms infinite ease-in;
}
@-webkit-keyframes snow {
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: translate(-0.1em, 15vmin);
                transform: translate(-0.1em, 15vmin);
    }
}
@keyframes snow {
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: translate(-0.1em, 15vmin);
                transform: translate(-0.1em, 15vmin);
    }
}
@-webkit-keyframes snowman {
    50% {
        border-radius: 60% 60% 30% 50%;
    }
}
@keyframes snowman {
    50% {
        border-radius: 60% 60% 30% 50%;
    }
}
</style>
:::

### Stormy

::: demo-code
<template>
    <div class="weather-first">
        <div class="stormy">
            <span class="cloud"></span>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<style>
.weather-first {
    width: 100%;
    font-size: -webkit-calc(1em);
    font-size: calc(1em);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    font-family: 'Work Sans', sans-serif;
    background: #212125;
    color: #e6e8db;
}
.weather-first .stormy {
    -webkit-box-flex: 0;
    -webkit-flex: block;
        -ms-flex: block;
            flex: block;
    display: block;
    position: relative;
    font-size: -webkit-calc(11em);
    font-size: calc(11em);
    width: 1em;
    height: 1em;
    margin: .3em;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #34c6d8;
            box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #34c6d8;
    background: -webkit-gradient(linear, from(#4b9cc2), to(#9adbd9));
    background: -webkit-linear-gradient(top right, #4b9cc2 0%, #9adbd9 100%);
    background: linear-gradient(to top right, #4b9cc2 0%, #9adbd9 100%);
}
.weather-first .stormy::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: .05em;
    border-radius: 100%;
    opacity: .4;
    will-change: background-color;
    -webkit-animation: flash 2300ms infinite linear 80ms;
            animation: flash 2300ms infinite linear 80ms;
}
.weather-first .stormy .cloud {
    position: absolute;
    top: .1em;
    width: .37em;
    height: .13em;
    border-radius: .1em;
    background-color: #c9e8de;
    font-size: 1.3em;
    left: 50%;
    box-shadow: 0 0 .1em .02em #f0f2f0 inset,0 0 .3em -0.03em #c9e8de;
    will-change: background-color, transform, opacity;
    -webkit-animation: cloudflash 2300ms infinite linear, move 3700ms infinite linear;
            animation: cloudflash 2300ms infinite linear, move 3700ms infinite linear;
}
.weather-first .cloud::before,
.weather-first .cloud::after {
    content: '';
    position: inherit;
    border-radius: inherit;
    background-color: inherit;
    -webkit-box-shadow: inherit;
            box-shadow: inherit;
    bottom: 30%;
}
.weather-first .cloud::before {
    left: .05em;
    width: .2em;
    height: .2em;
}
.weather-first .cloud::after {
    left: .15em;
    width: .15em;
    height: .15em;
}
.weather-first .stormy ul {
    position: absolute;
    list-style: none;
    top: 0%;
    left: 70%;
    right: 0%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.weather-first .stormy li,
.weather-first .stormy li::before,
.weather-first .stormy li::after {
    position: absolute;
    width: .005em;
    height: .02em;
    border-radius: 10%;
    background-color: #eee;
    opacity: 0;
    will-change: transform, opacity;
    -webkit-animation: rain 2000ms infinite linear;
            animation: rain 2000ms infinite linear;
    -webkit-transform: rotate(25deg);
        -ms-transform: rotate(25deg);
            transform: rotate(25deg);
}
.weather-first .stormy li::before,
.weather-first .stormy li::after {
    content: '';
}
.weather-first .stormy li:nth-child(5n+3)::before,
.weather-first .stormy li:nth-child(11n+7)::after,
.weather-first .stormy li:nth-child(2n+1) {
    top: 10%;
    left: 68%;
    -webkit-animation-delay: 500ms;
            animation-delay: 500ms;
}
.weather-first .stormy li:nth-child(3n+2)::after,
.weather-first .stormy li:nth-child(7n+5)::after,
.weather-first .stormy li:nth-child(3n+2) {
    top: 5%;
    left: 45%;
    -webkit-animation-delay: 1250ms;
            animation-delay: 1250ms;
}
.weather-first .stormy li:nth-child(2n+1)::before,
.weather-first .stormy li:nth-child(5n+3)::after,
.weather-first .stormy li:nth-child(7n+5) {
    top: 4%;
    left: 82%;
    -webkit-animation-delay: 750ms;
            animation-delay: 750ms;
}
.weather-first .stormy li:nth-child(11n+7)::before,
.weather-first .stormy li:nth-child(3n+2)::after,
.weather-first .stormy li:nth-child(7n+5) {
    top: 15%;
    left: 15%;
    -webkit-animation-delay: 2000ms;
            animation-delay: 2000ms;
}
.weather-first .stormy li:nth-child(7n+5)::before,
.weather-first .stormy li:nth-child(2n+1)::after,
.weather-first .stormy li:nth-child(11n+7) {
    top: 10%;
    left: 33%;
    -webkit-animation-delay: 2500ms;
            animation-delay: 2500ms;
}
@-webkit-keyframes flash {
    49% {
        background-color: rgba(255, 255, 255, 0);
    }
    51% {
        background-color: currentColor;
    }
    53% {
        background-color: rgba(255, 255, 255, 0);
    }
    57% {
        background-color: currentColor;
    }
    85% {
        background-color: rgba(255, 255, 255, 0);
    }
}
@keyframes flash {
    49% {
        background-color: rgba(255, 255, 255, 0);
    }
    51% {
        background-color: currentColor;
    }
    53% {
        background-color: rgba(255, 255, 255, 0);
    }
    57% {
        background-color: currentColor;
    }
    85% {
        background-color: rgba(255, 255, 255, 0);
    }
}
@-webkit-keyframes cloudflash {
    49% {
        background-color: #c9e8de;
    }
    51% {
        background-color: #f0f2f0;
    }
    53% {
        background-color: #c9e8de;
    }
    57% {
        background-color: #f0f2f0;
    }
    85% {
        background-color: #c9e8de;
    }
}
@keyframes cloudflash {
    49% {
        background-color: #c9e8de;
    }
    51% {
        background-color: #f0f2f0;
    }
    53% {
        background-color: #c9e8de;
    }
    57% {
        background-color: #f0f2f0;
    }
    85% {
        background-color: #c9e8de;
    }
}
@-webkit-keyframes rain {
    10% {
        opacity: .4;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: translate(-0.1em, 0.5em);
                transform: translate(-0.1em, 0.5em);
    }
}
@keyframes rain {
    10% {
        opacity: .4;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: translate(-0.1em, 0.5em);
                transform: translate(-0.1em, 0.5em);
    }
}
@-webkit-keyframes move {
    50% {
        -webkit-transform: translateX(-0.05em);
                transform: translateX(-0.05em);
    }
}
@keyframes move {
    50% {
        -webkit-transform: translateX(-0.05em);
                transform: translateX(-0.05em);
    }
}
</style>
:::

### Supermoon

::: demo-code
<template>
    <div class="weather-first">
        <div class="supermoon">
            <span class="moon"></span>
            <span class="meteor"></span>
        </div>
    </div>
</template>

<style>
.weather-first {
    width: 100%;
    font-size: -webkit-calc(1em);
    font-size: calc(1em);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    font-family: 'Work Sans', sans-serif;
    background: #212125;
    color: #e6e8db;
}
.weather-first .supermoon {
    -webkit-box-flex: 0;
    -webkit-flex: block;
        -ms-flex: block;
            flex: block;
    display: block;
    position: relative;
    font-size: -webkit-calc(11em);
    font-size: calc(11em);
    width: 1em;
    height: 1em;
    margin: .3em;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #5133a5;
            box-shadow: 0 0 0 0.05em currentColor inset, 0 0 0.3em -0.03em #5133a5;
    background: -webkit-gradient(linear, from(#4054b2), to(#aa4cba));
    background: -webkit-linear-gradient(bottom right, #4054b2 0%, #aa4cba 65%);
    background: linear-gradient(to bottom right, #4054b2 0%, #aa4cba 65%);
}
.weather-first .supermoon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: -webkit-radial-gradient(1px 1px at 50% 20%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(1px 1px at 30% 65%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(2px 2px at 15% 5%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(2px 2px at 37% 35%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(2px 2px at 65% 47%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(1px 1px at 42% 29%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(1px 1px at 73% 56%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(1px 1px at 24% 19%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(2px 2px at 31% 47%, #fff, rgba(0, 0, 0, 0)), -webkit-radial-gradient(1px 1px at 18% 39%, #fff, rgba(0, 0, 0, 0));
    background-image: radial-gradient(1px 1px at 50% 20%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 30% 65%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 15% 5%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 37% 35%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 65% 47%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 42% 29%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 73% 56%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 24% 19%, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 31% 47%, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 18% 39%, #fff, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    will-change: transform;
    -webkit-animation: revolve 120000ms linear infinite;
            animation: revolve 120000ms linear infinite;
}
.weather-first .moon {
    position: absolute;
    top: 20%;
    left: 80%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    border-radius: 100%;
    background: -webkit-radial-gradient(bottom left, circle, currentColor, #fef07e);
    background: radial-gradient(circle at bottom left, currentColor, #fef07e);
    -webkit-box-shadow: 0 0 0 0.02em currentColor inset, 0 0 0.3em -0.03em #aa4cba;
            box-shadow: 0 0 0 0.02em currentColor inset, 0 0 0.3em -0.03em #aa4cba;
}
.weather-first .moon::before,
.weather-first .moon::after {
    content: '';
    position: absolute;
    border-radius: 100%;
    background-color: #4054b2;
    -webkit-box-shadow: 0.01em 0.01em 0.1em 0 #4054b2;
            box-shadow: 0.01em 0.01em 0.1em 0 #4054b2;
}
.weather-first .moon::before {
    top: 15%;
    left: 55%;
    width: 20%;
    height: 20%;
    opacity: .3;
}
.weather-first .moon::after {
    bottom: 50%;
    left: 25%;
    width: 15%;
    height: 15%;
    opacity: .2;
}
.weather-first .meteor {
    position: absolute;
    background-color: #fff;
    opacity: 0;
    top: 20%;
    left: 55%;
    width: 1px;
    height: 15px;
    -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
            transform: rotate(45deg);
    will-change: transform, opacity;
    -webkit-animation: meteor 6250ms infinite ease-in;
            animation: meteor 6250ms infinite ease-in;
}
@-webkit-keyframes revolve {
    to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@keyframes revolve {
    to {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@-webkit-keyframes meteor {
    5% {
        opacity: 1;
    }
    8% {
        -webkit-transform: translate(-0.6em, 0.6em) rotate(45deg);
                transform: translate(-0.6em, 0.6em) rotate(45deg);
        opacity: 0;
    }
}
@keyframes meteor {
    5% {
        opacity: 1;
    }
    8% {
        -webkit-transform: translate(-0.6em, 0.6em) rotate(45deg);
                transform: translate(-0.6em, 0.6em) rotate(45deg);
        opacity: 0;
    }
}
</style>
:::

## 纯CSS实现动态晴阴雨雪

参考：[单标签！纯CSS实现动态晴阴雨雪](https://juejin.im/post/5d2716ab5188257b775d35ba)

::: demo-code
<template>
    <div>
        <div class="weather-second sunny"></div>
        <div class="weather-second cloudy"></div>
        <div class="weather-second rainy"></div>
        <div class="weather-second snowy"></div>
    </div>
</template>
<style>
.weather-second {
    position: relative;
    display: inline-block;
    width: 180px;
    height: 240px;
    background: #23b7e5;
    border-radius: 8px;
}
.weather-second.sunny:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: #F6D963;
    border-radius: 50%;
    box-shadow: 0 0 20px #ff0;
    z-index: 2;
}
.weather-second.sunny:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -45px 0 0 -45px; 
    width: 90px;
    height: 90px;
    background: #FFEB3B;
    clip-path: polygon(
    	50% 0%,
        65.43% 25%,
        93.3% 25%,
        78.87% 50%,
        93.3% 75%,
        64.43% 75%,
        50% 100%,
        35.57% 75%,
        6.7% 75%,
        21.13% 50%,
        6.7% 25%,
        35.57% 25%);
    z-index: 1;
    animation: sunScale 2s linear infinite;
}
@keyframes sunScale {
    0% {
        transform: scale(1);
    }
    50% {
    	transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
.weather-second.cloudy:before,
.weather-second.rainy:before,
.weather-second.snowy:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 
    	#fff 22px -15px 0 6px,
    	#fff 57px -6px 0 2px, 
    	#fff 87px 4px 0 -4px,
    	#fff 33px 6px 0 6px,
    	#fff 61px 6px 0 2px,
    	#ccc 29px -23px 0 6px,
    	#ccc 64px -14px 0 2px,
    	#ccc 94px -4px 0 -4px;
    z-index: 2;
}
.weather-second.cloudy:before {
    animation: cloudMove 2s linear infinite;
}
@keyframes cloudMove {
    0% {
        transform: translate(-50%, -50%);
    }
    50% {
        transform: translate(-50%, -60%);
    }
    100% {
        transform: translate(-50%, -50%);
    }
}
.weather-second.rainy:after {
	content: "";
    position: absolute;
    top:50%;
    left: 25%;
    width: 4px;
    height: 14px;
    background: #fff;
    border-radius: 2px;
    box-shadow:
    	#fff 25px -10px 0,
    	#fff 50px 0 0,
    	#fff 75px -10px 0,
    	#fff 0 25px 0,
    	#fff 25px 15px 0,
    	#fff 50px 25px 0,
    	#fff 75px 15px 0,
    	#fff 0 50px 0,
    	#fff 25px 40px 0,
    	#fff 50px 50px 0,
    	#fff 75px 40px 0;
    animation: rainDrop 2s linear infinite;	
}
@keyframes rainDrop {
    0% {
        transform: translate(0, 0) rotate(10deg);
    }
    100% {
        transform: translate(-4px, 24px) rotate(10deg);
        box-shadow:
        #fff 25px -10px 0,
        #fff 50px 0 0,
        #fff 75px -10px 0,
        #fff 0 25px 0,
        #fff 25px 15px 0,
        #fff 50px 25px 0,
        #fff 75px 15px 0,
        rgba(255, 255, 255, 0) 0 50px 0,
        rgba(255, 255, 255, 0) 25px 40px 0,
        rgba(255, 255, 255, 0) 50px 50px 0,
        rgba(255, 255, 255, 0) 75px 40px 0;
    }
}
.weather-second.snowy:after {
    content: "";
    position: absolute;
    top:50%;
    left: 25%;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    box-shadow:
        #fff 25px -10px 0,
        #fff 50px 0 0,
        #fff 75px -10px 0,
        #fff 0 25px 0,
        #fff 25px 15px 0,
        #fff 50px 25px 0,
        #fff 75px 15px 0,
        #fff 0 50px 0,
        #fff 25px 40px 0,
        #fff 50px 50px 0,
        #fff 75px 40px 0;
    animation: snowDrop 2s linear infinite; 
}
@keyframes snowDrop {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(25px);
        box-shadow:
        #fff 25px -10px 0,
        #fff 50px 0 0,
        #fff 75px -10px 0,
        #fff 0 25px 0,
        #fff 25px 15px 0,
        #fff 50px 25px 0,
        #fff 75px 15px 0,
        rgba(255, 255, 255, 0) 0 50px 0,
        rgba(255, 255, 255, 0) 25px 40px 0,
        rgba(255, 255, 255, 0) 50px 50px 0,
        rgba(255, 255, 255, 0) 75px 40px 0;
    }
}
</style>
:::





<Gitalk/>