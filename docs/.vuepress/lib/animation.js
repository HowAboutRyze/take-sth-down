/**
 * 粒子原型, 提供一个绘图函数
 */
export function ExplodingParticle() {
    this.animationDuration = 1000; // in ms

    // 给粒子设置速度
    this.speed = {
        x: -5 + Math.random() * 10,
        y: -5 + Math.random() * 10
    };

    // 给粒子设置大小
    this.radius = 5 + Math.random() * 5;

    // 设置粒子存在最大时间
    this.life = 30 + Math.random() * 10;
    this.remainingLife = this.life;

    // 这个函数稍后将由动画逻辑调用
    this.draw = ctx => {
        let p = this;

        if (this.remainingLife > 0 && this.radius > 0) {
            // 在当前的位置画个圆
            ctx.beginPath();
            ctx.arc(p.startX, p.startY, p.radius, 0, Math.PI * 2);
            ctx.fillStyle =
                "rgba(" +
                this.rgbArray[0] +
                "," +
                this.rgbArray[1] +
                "," +
                this.rgbArray[2] +
                ", 1)";
            ctx.fill();

            // 更新粒子位置和生命周期
            p.remainingLife--;
            p.radius -= 0.25;
            p.startX += p.speed.x;
            p.startY += p.speed.y;
        }
    };
};