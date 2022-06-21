<template>
  <perfect-scrollbar>
    <UpSelect id="UpSelect" class="Select" :AboutMe="AboutMe"> </UpSelect>
    <div class="body">
      
    </div>
  </perfect-scrollbar>
</template>

<script>
import UpSelect from "@/components/common/UpSelect.vue";
import { SelectAboutMe } from "@/network/Select.js";

export default {
  components: { UpSelect },
  mounted() {this.GetAboutMe()},
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
};
</script>

<style>
@import url("@/assets/css/AboutMy/UpSelect.css");

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
</style>