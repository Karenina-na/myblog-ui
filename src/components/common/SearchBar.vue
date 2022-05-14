<template>
  <div class="bar7">
    <div class="box">
      <search-outlined id="icon"
                       @click="SelectArticleByTitle(title)" />
      <input type="text"
             placeholder="Search"
             v-model="title">
      <button type="submit"
              class="button"></button>
    </div>
  </div>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue';
export default {
  name: "SearchBar",
  components: {
    SearchOutlined
  },
  data () {
    return {
      title: ""
    }
  },
  methods: {
    SelectArticleByTitle (title) {
      this.$emit('PushTitle', '1', title);
    }
  },
  mounted () {
    this.title = sessionStorage.getItem('title');
  }
}
</script>
<style scoped>
.bar7 {
  margin: auto;
  margin-bottom: 10px;
  width: 210px;
}
.bar7 .box {
  height: 42px;
}
/*输入框样式*/
.bar7 input {
  font-weight: 700;
  width: 68px;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #324b4e25;
  background: #ffffff;
  transition: 0.3s linear;
}

/*placehol样式*/
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: rgba(0, 0, 0, 0.305);
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.305);
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.305);
}
.bar7 input:focus,
.bar7 input:hover {
  width: 170px;
  border-color: black;
}
.bar7 button {
  visibility: hidden;
}

#icon {
  background-color: #0000008a;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.86);
  font-size: 25px;
  margin-right: 5px;
  padding-top: 4px;
  -webkit-animation: shake-vertical 5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both infinite;
  animation: shake-vertical 5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}
@-webkit-keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  80% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  90% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
}
@keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  80% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  90% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
}
</style>
