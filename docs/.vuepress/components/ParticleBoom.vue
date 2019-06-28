<template>
    <div @click="click" ref="particleContainer" id="particleContainer">
        <slot></slot>
    </div>
</template>

<script>
/**
 * 批量导入弹窗
 * @Author  HowAboutRyze
 * @example 调用示例：
 * <ClientOnly>         // 因组件使用了 window，Nodejs 服务端渲染拿不到 window，需使用 <ClientOnly> 内部组件包裹
 *      <ParticleBoom>
 *          <components/>
 *      </ParticleBoom>
 * </ClientOnly>
 * 
 * 效果类似这种：  (∩^o^)⊃━☆    ﾟ.*･｡
 * 
 * 也可以说时灭霸响指特效：
 * 
 *      ( ﾟ_ﾟ)j      (☉ェ☉)
 *              ↓↓
 *      (#`Д´)y       .*･｡ﾟ*･ﾟ｡
 */
import html2canvas from "html2canvas";
import { ExplodingParticle } from "../lib/animation";

export default {
    data() {
        return {
            particleCanvas: null,
            particleCtx: null,
            reductionFactor: 17,
            ctx: null,
            particles: [],
            slots: this.$slots
        };
    },
    mounted() {
        window.onresize = this.resize;
        this.$nextTick(() => {
            this.play();
            window.requestAnimationFrame(this.update);
        });
    },
    computed: {
        btn() {
            return this.$refs.particleContainer;
        }
    },
    methods: {
        play() {
            html2canvas(this.btn, { logging: false }).then(canvas => {
                this.ctx = canvas.getContext("2d");
                // 创建 canvas
                this.createParticleCanvas();
            });
        },
        click() {
            const width = this.btn.offsetWidth;
            const height = this.btn.offsetHeight;
            console.log('点击：',width,height)

            // 获取色值
            let colorData = this.ctx.getImageData(0, 0, width, height).data;

            let count = 0;

            // 遍历按钮的位置, 创建粒子
            for (let localX = 0; localX < width; localX++) {
                for (let localY = 0; localY < height; localY++) {
                    if (count % this.reductionFactor === 0) {
                        let index = (localY * width + localX) * 4;
                        let rgbaColorArr = colorData.slice(index, index + 4);

                        let bcr = this.btn.getBoundingClientRect();
                        let globalX = bcr.left + localX + window.scrollX;
                        let globalY = bcr.top + localY + window.scrollY;
                        // 创建一个粒子
                        this.createParticleAtPoint(
                            globalX,
                            globalY,
                            rgbaColorArr
                        );
                    }
                    count++;
                }
            }
        },
        createParticleAtPoint(x, y, colorData) {
            let particle = new ExplodingParticle();
            particle.rgbArray = colorData;
            particle.startX = x;
            particle.startY = y;
            particle.startTime = Date.now();

            this.particles.push(particle);
        },
        createParticleCanvas() {
            this.particleCanvas = document.createElement("canvas");
            this.particleCtx = this.particleCanvas.getContext("2d");

            // 给 canvas 大小
            this.particleCanvas.width = window.innerWidth;
            this.particleCanvas.height = window.innerHeight;

            // 给 canvas 位置
            this.particleCanvas.style.position = "absolute";
            this.particleCanvas.style.top = "0";
            this.particleCanvas.style.left = "0";

            // 设定层级，高于其他元素
            this.particleCanvas.style.zIndex = "1001";

            // 确保 canvas 下面的元素能够点击
            this.particleCanvas.style.pointerEvents = "none";

            // 将 canvas 插入页面
            document.body.appendChild(this.particleCanvas);
        },
        resize() {
            if (!this.particleCanvas) return;
            this.particleCanvas.width =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            this.particleCanvas.height =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;
        },
        update() {
            // 清除之前的粒子
            if (this.particleCtx) {
                this.particleCtx.clearRect(
                    0,
                    0,
                    window.innerWidth,
                    window.innerHeight
                );
            }

            // 在新的位置画出所有的粒子
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].draw(this.particleCtx);

                // 最后一个粒子完成动画, 清除旧的粒子
                if (i === this.particles.length - 1) {
                    let percent =
                        (Date.now() - this.particles[i].startTime) /
                        this.particles[i].animationDuration;

                    if (percent > 1) {
                        this.particles = [];
                    }
                }
            }
            // 执行动画
            window.requestAnimationFrame(this.update);
        }
    }
};
</script>