<template>
    <div class="game-btn">
        <a id="button" 
            href="javascript:var%20KICKASSVERSION='2.0';
            var%20s%20=%20document.createElement('script');
            s.type='text/javascript';
            document.body.appendChild(s);
            s.src='//hi.kickassapp.com/kickass.js';
            void(0);">
            来玩游戏🚀
        </a>
        <p></p>
        <details><summary><b>游戏规则</b></summary>
            <p>📢 键盘[上下左右键]可以控制飞行器运动，[空格键]发射炸弹。</p>
            <p>💥 还能隐藏大招哦！</p>
        </details>
    </div>
</template>
<style lang="stylus">
.game-btn {
    padding-top: 20px;
    a {
        display: inline-block;
        padding: 7px 20px;
        color: #409eff;
        transition: all .5s;
        border-radius: 20px;
        border: 1px solid #409eff;
        &:hover {
            color: #58bc58;
            border-color: #58bc58;
        }
    }
    details p {
        padding-left: 30px;
    }
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
}
</style>