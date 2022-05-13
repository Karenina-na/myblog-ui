<template>
  <div class="box">
    <div id="img">
      <a-avatar :size="120">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </div>
    <div id="text">
      <div class="name">Augenstern</div>
      <div class="text">Augenstern的小屋</div>
      <div class="text">Sharing</div>
    </div>
    <a-divider color="black"
               id="line" />
    <div>
      <div class="check"
           @click="SelectPageByType('笔记')"> <span>笔记</span>
        <div>
          <file-outlined class="icon" />
        </div>
      </div>
      <div class="check"
           @click="SelectPageByType('日常')"> <span>日常</span>
        <div>
          <coffee-outlined class="icon" />
        </div>
      </div>
      <div class="check"
           @click="SelectPageByType('技术')"> <span>技术</span>
        <div>
          <laptop-outlined class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserOutlined, FileOutlined, CoffeeOutlined, LaptopOutlined } from '@ant-design/icons-vue';
export default {
  name: 'CatalogueMy',
  components: {
    UserOutlined,
    FileOutlined,
    CoffeeOutlined,
    LaptopOutlined
  },
  methods: {
    SelectPageByType (type) {
      console.log(type);
    }
  }
}
</script>

<style scoped>
@import url("@/assets/css/CataloguePage/MyHeadPortrait.css");
@import url("@/assets/css/CataloguePage/MyIcon.css");
@import url("@/assets/css/common/Shadow.css");

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
}
/*悬停阴影*/
.box:hover {
  -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*头像样式*/
#img:hover {
  -webkit-animation: rotate-center-portrait 0.6s ease-in-out both;
  animation: rotate-center-portrait 0.6s ease-in-out both;
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
}
.check:hover .icon {
  -webkit-animation: rotate-center-icon 0.5s cubic-bezier(0.23, 1, 0.32, 1)
    forwards;
  animation: rotate-center-icon 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
</style>