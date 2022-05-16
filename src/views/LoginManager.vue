<template>
  <div class="background"></div>
  <div class="box">
    <LoginBox id="login" @PushMessage="Login"></LoginBox>
  </div>
</template>
<script type="text/javascript">
import LoginBox from "@/components/common/LoginBox";
import { LoginService } from "@/network/Manage.js";

export default {
  name: "LoginManager",
  components: { LoginBox },
  methods: {
    Login(username, password) {
      LoginService(username, password).then(
        (res) => {
          if (res.code === 20042) {
            this.$store.dispatch("saveFlag", res.code);
            this.$router.push("/rootManager/View");
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    //抛出异常
    ERROR(res) {
      console.log(res);
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
/*背景*/
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url("@/assets/img/LoginImg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

/*盒子样式*/
.box {
  text-align: center;
  padding-top: 15%;

  -webkit-animation: slit-in-vertical 0.7s ease-out both;
  animation: slit-in-vertical 0.7s ease-out both;
}
@-webkit-keyframes slit-in-vertical {
  0% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
    transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
    transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(0) rotateY(0);
    transform: translateZ(0) rotateY(0);
  }
}
@keyframes slit-in-vertical {
  0% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
    transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
    transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(0) rotateY(0);
    transform: translateZ(0) rotateY(0);
  }
}

/*登录样式*/
#login {
  margin: auto;
}
</style>