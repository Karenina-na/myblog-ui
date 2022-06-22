<template>
  <div class="Image">
    <div class="img">
      <a-image :width="350" :src="img.name" />
    </div>
    <div class="Message">
      <span>{{ this.name }}</span>
      <br />
      <span> {{ img.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBody",
  props: ["img"],
  method: {},
  mounted() {
    console.log(this.img.name)
    //区分linux与window的斜杠
    let str1 = this.img.name.split("\\")[1];
    let str2 = this.img.name.split("/")[4];
    if (str2===undefined){
      this.name=str1;
    }
    else {
      this.name=str2;
    }
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
/**盒子模型 */
.Image {
  float: left;
  width: 700px;
}

/**图片 */
.img {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 350px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  float: left;
}

/**名称 */
.Message {
  padding-top: 65px;
  float: right;
}
.Message span {
  width: 300px;
  float: right;
  font-size: 15px;
  padding-top: 20px;
  font-size: 15px;
  font-weight: 0;
  color: rgba(0, 0, 0, 0.589);
  white-space: pre-wrap;
  word-wrap: break-word;
}
.Message span:hover {
  color: rgb(84, 150, 150);
}
</style>