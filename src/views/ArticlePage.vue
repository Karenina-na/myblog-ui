<template>
  <perfect-scrollbar>
    <VantaVueGlobeBlack></VantaVueGlobeBlack>
    <UpSelect id="UpSelect" :AboutMe="AboutMe"></UpSelect>
    <div class="article">
      <div>
        <ArticleBody
          id="ArticleBody"
          :article="article"
          @PushTag="GetArticlesByType"
        ></ArticleBody>
      </div>
      <div class="foot">
        <CriminalRecord id="CriminalRecord"></CriminalRecord>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
// @ is an alias to /src

import VantaVueGlobeBlack from "@/components/common/VantaVueGlobeBlack.vue";
import UpSelect from "@/components/content/ArticlePage/UpSelect.vue";
import ArticleBody from "@/components/content/ArticlePage/ArticleBody.vue";
import CriminalRecord from "@/components/content/CriminalRecord.vue";
import { SelectArticleById, SelectAboutMe } from "@/network/Select.js";

export default {
  name: "ArticlePage",
  components: {
    VantaVueGlobeBlack,
    UpSelect,
    ArticleBody,
    CriminalRecord,
  },
  mounted() {
    this.GetArticlesById();

    this.GetAboutMe();
  },
  methods: {
    //文章查找
    GetArticlesById() {
      let id = this.$route.query.ArticleId;
      SelectArticleById(id).then(
        (res) => {
          if (res.code === 20042) {
            this.article = res.data;
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
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
    //标签跳转
    GetArticlesByType(type) {
      this.$store.dispatch("saveType", type);
      this.$store.dispatch("saveTitle", "");
      this.$store.dispatch("saveTape", 1);
      this.$router.push({ path: "/CataloguePage" });
    },
    //抛出异常
    ERROR(Message) {
      console.log(Message);
    },
  },
  data() {
    return {
      article: {
        // id: "1",
        // title: "标题",
        // author: "作者",
        // date: "时间",
        // body: "文章主体",
        // tags: ['标签']
      },
      AboutMe: {
        // author: "作者",
        // introduce: "介绍",
        // notice: "公告",
      },
    };
  },
};
</script>
<style scoped>
@import url("@/assets/css/ArticlePage/ArticleBody.css");
@import url("@/assets/css/ArticlePage/UpSelect.css");

/*顶部框*/
@media screen and (min-width: 500px) {
  #UpSelect {
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 100;
    background-color:#1c1c1d4e;

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
    background-color:#1c1c1d4e;

    -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}
/*文章主体*/
.article {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 850px;
  z-index: 99;

  -webkit-animation: scale-in-hor-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-hor-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

/*末尾*/
.foot {
  height: 50px;
  width: 100%;
  text-align: center;
}
#CriminalRecord {
  color: white;
  padding-top: 30px;
}
</style>