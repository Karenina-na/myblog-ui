<template>
  <div class="box">
    <span>
      <left-circle-filled
        :style="{ fontSize: '40px', color: 'white' }"
        id="BackIcon"
        @click="jump"
      />
    </span>
    <span class="title" @click="this.$router.go(0)">{{ AboutMe.author }}</span>
    <span id="tags">
      <span
        v-for="(tag, item) in tags"
        class="tag"
        @click="Select(item)"
        :key="tag"
      >
        <span class="tagBox">
          <bank-filled v-if="item === 0" />
          <calendar-filled v-if="item === 1" />
          <crown-filled v-if="item === 2" />
          <cloud-filled v-if="item === 3" />
          {{ tag }}
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import {
  LeftCircleFilled,
  BankFilled,
  CalendarFilled,
  CrownFilled,
  CloudFilled,
} from "@ant-design/icons-vue";

export default {
  name: "UpSelect",
  components: {
    LeftCircleFilled,
    BankFilled,
    CalendarFilled,
    CrownFilled,
    CloudFilled,
  },
  props: ["AboutMe"],
  data() {
    return {
      tags: ["首页", "分类", "DUNRUI妙妙屋", "关于"],
    };
  },
  methods: {
    Select(value) {
      switch (value) {
        case 0: {
          this.$router.push({ path: "/" });
          break;
        }
        case 1: {
          console.log("分类");
          break;
        }
        case 2: {
          console.log("dunrui");
          break;
        }
        case 3: {
          this.$router.push({ path: "/AboutMy" });
          break;
        }
      }
    },
    jump() {
      this.$router.push({ path: "/CataloguePage" });
    },
  },
};
</script>

<style scoped>
@import url("@/assets/css/ArticlePage/BackIcon.css");

.box {
  background-color: rgba(240, 248, 255, 0);
  color: white;
}
/*返回图标*/
#BackIcon {
  padding-top: 10px;
  padding-left: 15px;
  float: left;
  cursor: pointer;

  -webkit-animation: pulsate-fwd 1s ease-in-out infinite both;
  animation: pulsate-fwd 1s ease-in-out infinite both;
}
/*名字*/
@media screen and (min-width: 900px) {
  .title {
    float: left;
    margin-left: 25%;
    font-size: 35px;
  }
}
@media screen and (max-width: 900px) {
  .title {
    display: none;
  }
}
.title {
  cursor: pointer;
}

/*标签选择*/
#tags {
  float: right;
  padding-top: 22px;
  padding-right: 50px;
}
.tag {
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
}
.tagBox {
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.tagBox {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  outline: none;
  padding: 10px 15px;
  box-sizing: border-box;
}

/*边框特效*/
.tagBox::before,
.tagBox::after {
  box-sizing: inherit;
  position: absolute;
  content: "";
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

.tagBox::after {
  bottom: 0;
  right: 0;
}

.tagBox::before {
  top: 0;
  left: 0;
}

.tagBox:hover::before,
.tagBox:hover::after {
  width: 100%;
  height: 100%;
}

.tagBox:hover::before {
  border-top-color: #ffffff;
  border-right-color: #ffffff;
  transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
}

.tagBox:hover::after {
  border-bottom-color: #ffffff;
  border-left-color: #ffffff;
  transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s,
    height 0.2s ease-out 0.6s;
}
</style>