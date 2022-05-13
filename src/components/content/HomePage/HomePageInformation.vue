<template>
  <div id="All">
    <div id="left">
      <span class="title">HELLO</span>
      <div class="text">
        ^_^
      </div>
    </div>
    <div id="right">
      <span class="title">你好</span>
      <div class="text">
        -_-
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageInformation",
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#All {
  width: 100%;
  text-align: center;
  color: white;
  margin: auto;
}
@media screen and (max-width: 900px) {
  #right {
    margin: auto;
    margin-top: 40%;
  }
  #left {
    margin: auto;
    margin-top: -10%;
  }
  .title {
    font-size: 0px;
  }
  .text {
    font-size: 80px;
    color: white;
    width: 80%;
    word-wrap: break-word;
    margin: auto;
  }
}

@media screen and (min-width: 900px) {
  #right {
    text-align: center;
    float: right;
    margin-right: 16%;
  }
  #left {
    text-align: center;
    float: left;
    margin-left: 16%;
  }
  .title {
    text-align: center;
    font-size: 80px;
  }
  .text {
    font-size: 80px;
    color: white;
    width: 80%;
    word-wrap: break-word;
    margin: auto;
  }
}
</style>