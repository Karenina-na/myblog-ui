<template>
  <div class="box">
    <div class="head">
      <message-filled id="icon" />
      <span id="title">公告</span>
    </div>
    <div id="text">2022-5-8 | 重构前端架构</div>
  </div>
</template>

<script>
import { MessageFilled } from '@ant-design/icons-vue';

export default {
  name: "CatalogueNotice",
  components: {
    MessageFilled
  }
}
</script>

<style scoped>
.box {
  width: 230px;
  padding: 10px 20px 10px;
  margin-top: 20px;
  line-height: 1.6;

  background-color: rgba(255, 255, 255, 0.705);
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.027);
  border-radius: 20px;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.048);

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

/*悬停阴影*/
.box:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}

/*公告头*/
.head {
  margin-top: 10px;
}
.head #icon {
  font-size: 18px;
  color: rgba(255, 119, 0, 0.801);
  padding-bottom: 12px;
  -webkit-animation: pulsate-fwd 1s ease-in-out infinite reverse both;
  animation: pulsate-fwd 1s ease-in-out infinite reverse both;
}
@-webkit-keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.head #title {
  color: black;
  padding-left: 8px;
  font-size: 16px;
}

/*公告主体*/
#text {
  margin-bottom: 12px;
}
</style>