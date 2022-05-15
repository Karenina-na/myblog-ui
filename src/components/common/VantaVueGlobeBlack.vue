<template>
  <div id="background"></div>
</template>
<script>
/* eslint-disable */
import * as THREE from "@/assets/vanta/three.r119.min.js";
import GLOBE from "@/assets/vanta/vanta.globe.min.js";

export default {
  name: "VantaVueGlobeBlack",
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
      color: 0xffd1,
      size: 2.0,
      backgroundColor: 0x1c1c1d,
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