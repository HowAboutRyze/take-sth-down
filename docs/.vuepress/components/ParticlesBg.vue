<template>
    <vue-particles
        color="#56A8FC"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#56A8FC"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles-js"
    >
    </vue-particles>
</template>
<style scoped>
.particles-js {
    /* background-image: url(../../assets/img/sky.jpg); */
    /* background-color: #1A1F3D;
    background-image: linear-gradient(120deg, #03103A, #202253, #5C3A86, #2F338E, #1A1F3D); */
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
</style>
