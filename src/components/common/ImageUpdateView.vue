<template>
  <div class="box">
    <div v-for="img in Image" :key="img">
    <ImageBody :img="img"></ImageBody>
</div>
  </div>
</template>

<script>
import { SelectImage } from "@/network/FileRequest.js";
import ImageBody from '@/components/content/ManagerView/ImageBody.vue'

export default {
  components: {ImageBody},
  nameL: "ImageUpdateView",
  methods: {
    GetImageByPage() {
      SelectImage(this.page).then(
        (res) => {
          if (res.code === 20042) {
            this.Image = res.data;
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    //错误
    ERROR(res) {
      console.log(res);
    },
  },
  mounted() {
    this.page = 1;
    this.GetImageByPage();
  },
  props: [],
  data() {
    return {
      page: "",
      Image: {},
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.123);

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  cursor: default;
  border-radius: 10px;
}
.box:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}
</style>