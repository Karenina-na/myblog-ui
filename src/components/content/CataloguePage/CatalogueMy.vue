<template>
  <div class="box">
    <div>
      <a-avatar
        :size="120"
        id="img"
        src="https://q.qlogo.cn/g?b=qq&nk=1539989223&s=100"
      >
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </div>
    <div id="text">
      <div class="name">{{ AboutMe.author }}</div>
      <div class="text">{{ AboutMe.author }}的小屋</div>
      <div class="text">Sharing</div>
    </div>
    <a-divider color="black" id="line" />
    <div>
      <div class="check" @click="SelectPageByType('笔记')">
        <span>笔记</span>
        <div>
          <file-outlined class="icon" />
        </div>
      </div>
      <div class="check" @click="SelectPageByType('日常')">
        <span>日常</span>
        <div>
          <coffee-outlined class="icon" />
        </div>
      </div>
      <div class="check" @click="SelectPageByType('技术')">
        <span>技术</span>
        <div>
          <laptop-outlined class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UserOutlined,
  FileOutlined,
  CoffeeOutlined,
  LaptopOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "CatalogueMy",
  components: {
    UserOutlined,
    FileOutlined,
    CoffeeOutlined,
    LaptopOutlined,
  },
  methods: {
    SelectPageByType(type) {
      this.$emit("PushType", "1", type);
    },
  },
  props: ["AboutMe"],
};
</script>

<style scoped>
/*模板样式*/
.box {
  width: 230px;
  text-align: center;
  padding: 10px 20px 20px;
  line-height: 1.6;

  background-color: rgba(255, 255, 255, 0.705);
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.027);
  border-radius: 10%;

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

/*头像样式*/
#img {
  transition-property: -webkit-transform transform;
  transition-duration: 1s;
  transition-timing-function: ease;
}
#img:hover {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

/*名字*/
#text .name {
  font-size: 30px;
}
/*说明*/
#text .text {
  font-size: 14px;
}
/*分割线*/
#line {
  margin-top: 15px;
  margin-bottom: 15px;
}
/*选择标签*/
.check {
  font-size: 16px;
  display: inline-block;
  width: 60px;
}
.check:hover {
  color: rgb(31, 117, 110);
  cursor: pointer;
}
.check .icon {
  padding-top: 5px;
  font-size: 20px;

  transition-property: -webkit-transform transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.check:hover .icon {
  -webkit-transform: rotate(540deg);
  transform: rotate(540deg);
}
</style>