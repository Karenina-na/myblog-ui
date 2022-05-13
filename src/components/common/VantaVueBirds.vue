<template>
  <div id="background"></div>
</template>
<script>
/* eslint-disable */
import * as THREE from '@/assets/vanta/three.r119.min.js'
import BIRDS from '@/assets/vanta/vanta.birds.min.js'

export default {
  name: "VantaVueBirds",
  mounted () {
    BIRDS({
      THREE,
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0,
      colorMode: "lerp",
      birdSize: 1.30
    })
  }
}
</script>

<style scoped>
#background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>