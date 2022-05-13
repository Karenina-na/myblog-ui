<template>
  <div id="background"></div>
</template>
<script>
/* eslint-disable */
import * as THREE from '@/assets/vanta/three.r119.min.js'
import GLOBE from '@/assets/vanta/vanta.globe.min.js'

export default {
  name: "VantaVueGlobe",
  mounted () {
    GLOBE({
      THREE,
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffd1,
      size: 2.00,
      backgroundColor: 0x2a2a52
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