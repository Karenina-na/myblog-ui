<template>
  <div id="background"></div>
</template>
<script>
/* eslint-disable */
import * as THREE from "@/assets/vanta/three.r119.min.js";
import GLOBE from "@/assets/vanta/vanta.globe.min.js";

export default {
  name: "VantaVueGlobeWhite",
  mounted() {
    GLOBE({
      THREE,
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3f4aff,
      color2: 0xff0000,
      size: 2.0,
      backgroundColor: 0xf5f5f5,
    });
  },
};
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