<template>
  <VantaVueBirds></VantaVueBirds>
  <div class="firstBox">
    <HomePageInformation class="information"></HomePageInformation>
    <HomeButton class="button"></HomeButton>
  </div>
  <CriminalRecord></CriminalRecord>

</template>

<script>
import VantaVueBirds from '@/components/common/VantaVueBirds.vue'
import HomeButton from '@/components/common/HomeButton.vue'
import CriminalRecord from '@/components/content/CriminalRecord.vue'
import HomePageInformation from '@/components/content/HomePage/HomePageInformation.vue'


export default {
  name: 'HomePage',
  components: {
    VantaVueBirds,
    CriminalRecord,
    HomePageInformation,
    HomeButton
  },
  methods: {
  }
}
</script>

<style scoped>
@import url("@/assets/css/HomePage/HomePageButton.css");
@import url("@/assets/css/HomePage/HomePageText.css");

/*按钮动画*/
.button {
  -webkit-animation: swirl-in-bck 0.9s ease-out both;
  animation: swirl-in-bck 0.9s ease-out both;
}

/*文本动画*/
.information {
  -webkit-animation: bounce-in-top 1.1s 1s both;
  animation: bounce-in-top 1.1s 1s both;
}

/*不同分辨率*/
@media screen and (min-width: 900px) {
  .button {
    position: relative;
    margin: auto;
    margin-top: 10%;
  }

  .information {
    position: relative;
    margin: auto;
  }
}
@media screen and (max-width: 900px) {
  .information {
    position: absolute;
  }
  .button {
    margin: auto;
    margin-top: 30%;
    position: absolute;
    left: 0;
    right: 0;
  }
}

/*firstBox*/
.firstBox {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

