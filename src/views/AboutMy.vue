<template>
  <perfect-scrollbar>
    <VantaVueGlobeWhite></VantaVueGlobeWhite>
    <UpSelect id="UpSelect" class="Select" :AboutMe="AboutMe"> </UpSelect>
    <div class="body">
      <div class="title">关于我</div>
      <div class="message">
        <MyMessage id="MyMessage" :AboutMe="AboutMe"></MyMessage>
      </div>
      <div id="line">
        <a-divider>
          <user-outlined style="color: rgba(0, 0, 0, 0.3)" />
        </a-divider>
      </div>
      <div class="title">
        关于博客
        <calendar-outlined />
      </div>
      <div class="TimeTree">
        <TimeTree id="TimeTree"></TimeTree>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import VantaVueGlobeWhite from "@/components/common/VantaVueGlobeWhite.vue";
import UpSelect from "@/components/common/UpSelect.vue";
import TimeTree from "@/components/content/AboutMy/TimeTree.vue";
import MyMessage from "@/components/content/AboutMy/MyMessage.vue";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons-vue";

import { SelectAboutMe } from "@/network/Select.js";

export default {
  components: {
    VantaVueGlobeWhite,
    UpSelect,
    TimeTree,
    MyMessage,
    UserOutlined,
    CalendarOutlined,
  },
  mounted() {
    this.GetAboutMe();
  },
  methods: {
    //查找必要数据
    GetAboutMe() {
      let author = this.$store.getters.getAuthor;
      let introduce = this.$store.getters.getIntroduce;
      let notice = this.$store.getters.getNotice;

      if (author !== "" && introduce !== "" && notice !== "") {
        this.AboutMe = {
          author,
          introduce,
          notice,
        };
      } else {
        SelectAboutMe().then(
          (res) => {
            if (res.code === 20042) {
              this.$store.dispatch("saveIntroduce", res.data.introduce);
              this.$store.dispatch("saveNotice", res.data.notice);
              this.$store.dispatch("saveAuthor", res.data.author);
              this.AboutMe = res.data;
            } else {
              this.ERROR(res);
            }
          },
          (err) => {
            this.ERROR(err);
          }
        );
      }
    },
    //错误处理
    ERROR(err){
      console.log(err)
    },
  },
  data() {
    return {
      AboutMe: {
        // author: "作者",
        // introduce: "介绍",
        // notice: "公告",
      },
    };
  },
  name: "AboutMy",
};
</script>

<style scoped>
@import url("@/assets/css/AboutMy/UpSelect.css");
@import url("@/assets/css/AboutMy/TimeTree.css");
@import url("@/assets/css/AboutMy/MyMessage.css");
@import url("@/assets/css/AboutMy/Title.css");
@import url("@/assets/css/AboutMy/Body.css");

.Select {
  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;
}

/*顶部框*/
@media screen and (min-width: 500px) {
  #UpSelect {
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 100;

    -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}
@media screen and (max-width: 500px) {
  #UpSelect {
    position: absolute;
    top: 0;
    width: 850px;
    margin: 0 auto;
    z-index: 100;

    -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

/*主体*/
.body {
  position: relative;
  padding-top: 10px;
  top: 100px;
  border-radius: 30px;
  text-align: center;
  margin: auto;
  width: 850px;
  z-index: 99;
  background-color: #ffffffe0;

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  -webkit-animation: scale-up-center 0.5s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.body:hover {
  -webkit-box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.144);
  box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.144);
}

/*信息*/
.message {
  -webkit-animation: tilt-in-fwd-tr 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: tilt-in-fwd-tr 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*滚动条样式*/
.ps {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}

/*分割线 */
#line {
  width: 700px;
  margin: auto;
}

/*大字标题*/
.title {
  font-size: 35px;
  font-weight: 700;
  margin-top: 20px;

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

/*树状图*/

#TimeTree {
  padding-top: 40px;
  width: 700px;
  margin: auto;
  position: relative;
}
.TimeTree {
  -webkit-animation: rotate-in-2-cw 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: rotate-in-2-cw 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>