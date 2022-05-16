<template>
  <div class="box">
    <div id="message">
      博主目前大一，坐标西安西北工业大学，网络空间安全专业。欢迎各位与我技术交流
    </div>
    <div class="title">我的联系方式</div>
    <div class="click"><span class="call"><qq-outlined class="icon"/></span>1539989223</div>
    <div class="click"><span class="call"><wechat-outlined  class="icon"/></span>wzx_1539989223</div>
  </div>
</template>
<script>
import { QqOutlined,WechatOutlined } from "@ant-design/icons-vue";

export default {
  name: "MyMessage",
  components: {QqOutlined,WechatOutlined}
};
</script>
<style scoped>
.box {
  color: rgba(0, 0, 0, 0.661);
  cursor: default;
}
/*介绍 */
#message {
  margin: 20px;
  padding-bottom: 20px;
  font-size:15px;
}
/*联系方式样式*/
.title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.675);
}
.call {
  font-weight: 600;
}
.icon{
  margin-right: 5px;
}
/*联系方式交互样式 */
.click {
  transition: transform 0.32s !important;
  font-size:15px;
  padding-top:2px;
}
.click:hover {
  transform: scale(1.1);
  transition-duration: 0.08s;
  color: rgba(82, 163, 159, 0.747);
}
</style>