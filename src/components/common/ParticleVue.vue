<template>
  <div id="particles"></div>
</template>

<script>
import particlesJS from "@/assets/particles/particles.js";
import particlesConfig from "@/assets/particles/particles.json";

export default {
  name: "ParticlesVue",
  mounted () {
    particlesJS("particles", particlesConfig);
    document.body.style.overflow = "hidden";
  }
};
</script>

<style scoped>
.particles {
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
