<template>
  <div class="Enter">
    <div class="border">
      <right-circle-outlined id="Enter"
                             @click="Enter" />
    </div>
  </div>
</template>

<script>
import { RightCircleOutlined } from '@ant-design/icons-vue';

export default {
  name: "HomeButton",
  components: {
    RightCircleOutlined
  },
  methods: {
    Enter () {
      this.$router.push({ path: '/CataloguePage' })
    }
  }
}
</script>

<style>
/*按钮布局*/
.Enter {
  z-index: 9999;
  text-align: center;
  width: 130px;
}

/*边框*/
.border {
  text-align: center;
  width: 130px;
  height: 130px;
  margin: auto;
  position: relative;
  border-radius: 100%;
  border: 1px solid #0bfef2;
  cursor: pointer;
}

.border::before,
.border::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;

  animation: borderAni 1500ms infinite linear;
}

.border::before {
  top: -5px;
  left: -5px;
  border-top: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
}

.border::after {
  right: -5px;
  bottom: -5px;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}

@keyframes borderAni {
  0% {
    width: 30px;
    height: 30px;
  }
  50% {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
  100% {
    width: 30px;
    height: 30px;
  }
}

/*按钮*/
#Enter {
  padding: 10px;
  font-size: 80px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 100%;
  margin: 0;
  margin-top: 15px;

  transition-property: background-color font-size color margin-top;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.border:hover #Enter {
  font-size: 110px;
  background-color: rgb(140, 231, 254);
  color: black;
  margin-top: 0;
  cursor: pointer;
}
</style>