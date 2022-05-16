<template>
  <div class="box">
    <div id="message">
      博主目前大一，坐标西安西北工业大学，网络空间安全专业。欢迎各位与我技术交流
    </div>
    <div class="title">我的联系方式</div>
    <div class="mess click"><span class="call">· QQ：</span>1539989223</div>
    <div class="click"><span class="call">· 微信：</span>wzx_1539989223</div>
  </div>
</template>
<script>
export default {
  name: "MyMessage",
};
</script>
<style scoped>
.box {
  color: rgba(0, 0, 0, 0.466);
  cursor: default;
}
/*介绍 */
#message {
  margin: 20px;
  padding-bottom: 20px;
}
/*联系方式样式*/
.title {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.534);
}
.mess {
  margin-top: 10px;
}
.call {
  font-weight: 600;
}

/*交互样式 */
.click {
  transition: transform 0.32s !important;
}
.click:hover {
  transform: scale(1.1);
  transition-duration: 0.08s;
  color: rgba(82, 163, 159, 0.747);
}
</style>