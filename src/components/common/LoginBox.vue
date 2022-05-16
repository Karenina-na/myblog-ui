<template>
  <div class="content">
    <div class="login">LOGIN</div>
    <div class="input">
      <span class="title">USERNAME</span>
      <a-input v-model:value="username" class="in" placeholder="Username" />
    </div>
    <div class="input">
      <span class="title">PASSWORD</span>
      <a-input-password
        v-model:value="password"
        class="in"
        placeholder="Password"
      />
    </div>
    <div id="bottom">
      <a-button type="primary" class="bottom" @click="this.Login()"
        >Login</a-button
      >
      <a-button @click="this.Reset()">Reset</a-button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "LoginBox",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    Reset() {
      this.username = "";
      this.password = "";
    },
    Login() {
      let username = this.username;
      let password = this.password;
      this.$emit("PushMessage", username, password);
    },
  },
};
</script>
<style scoped>
.content {
  width: 550px;
  height: 350px;
  background-color: rgba(54, 54, 54, 0.582);
  z-index: 100;
  border-radius: 30px;
  color: white;

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

.content:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.545);
  box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.555);
}

/*标题*/
.login {
  font-size: 40px;
  font-weight: 700;
  padding-top: 20px;
}

/*总体*/
.input {
  padding-top: 10px;
  margin: auto;
  width: 400px;
  height: 100px;
}

/*字*/
.title {
  float: left;
  font-size: 20px;
  padding-bottom: 10px;
}

/*输入框*/
.in {
  float: right;
  font-size: 16px;
}

/*按钮*/
#bottom {
  float: right;
  margin-right: 100px;
  margin-top: 10px;
}
.bottom {
  margin-right: 20px;
}
</style>