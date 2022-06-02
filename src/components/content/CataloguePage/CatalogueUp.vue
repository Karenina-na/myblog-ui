<template>
  <div class="box">
    <span class="title" @click="Flush">{{ AboutMe.author }}</span>
    <div @click="jump">
      <up-circle-outlined class="css" />
    </div>
    <span id="tags">
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
    </span>
  </div>
</template>

<script>
import { UpCircleOutlined } from "@ant-design/icons-vue";
import {
  BankFilled,
  CalendarFilled,
  CrownFilled,
  CloudFilled,
} from "@ant-design/icons-vue";

export default {
  name: "CatalogueUp",
  components: {
    UpCircleOutlined,
    BankFilled,
    CalendarFilled,
    CrownFilled,
    CloudFilled,
  },
  methods: {
    jump() {
      this.$router.push({ path: "/" });
    },
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
    Flush() {
      this.$store.dispatch("saveType", "");
      this.$store.dispatch("saveTitle", "");
      this.$store.dispatch("saveTape", 1);
      this.$router.go(0);
    },
  },
  props: ["AboutMe"],
  data() {
    return {
      tags: ["首页", "分类", "DUNRUI妙妙屋", "关于"],
    };
  },
};
</script>

<style scoped>
@import url("@/assets/css/ArticlePage/UpSelect.css");

.box {
  background-color: rgba(240, 248, 255, 0);
  color: rgb(0, 0, 0);

  -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*名字*/
.title {
  float: left;
  margin-left: 1%;
  font-size: 35px;
}
.title {
  cursor: pointer;
}

/*标签选择*/
#tags {
  float: right;
  padding-top: 10px;
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
  color: #000000;
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
  border-top-color: #000000;
  border-right-color: #000000;
  transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
}

.tagBox:hover::after {
  border-bottom-color: #000000;
  border-left-color: #000000;
  transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s,
    height 0.2s ease-out 0.6s;
}

/*按钮样式*/
.css {
  float: left;
  padding-top: 10px;
  margin-left: 200px;
  cursor: pointer;
  width: 80px;
  font-size: 40px;
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}
/*动画*/
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.css:hover {
  -webkit-animation: wobble-hor-bottom 0.8s both;
  animation: wobble-hor-bottom 0.8s both;
}
@-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
</style>