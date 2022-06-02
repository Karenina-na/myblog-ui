<template>
  <perfect-scrollbar>
    <ParticleVue> </ParticleVue>
    <div class="catalogue Select">
      <CatalogueUp id="UpButton" :AboutMe="AboutMe"></CatalogueUp>
      <div class="body">
        <div class="right">
          <SearchBar id="search" @PushTitle="GetArticlesByTitle"></SearchBar>
          <CatalogueMy
            id="My"
            @PushType="GetArticlesByType"
            :AboutMe="AboutMe"
          ></CatalogueMy>
          <CatalogueNotice id="notice" :AboutMe="AboutMe"></CatalogueNotice>
          <CatalogueTag id="tag" @PushType="GetArticlesByType"></CatalogueTag>
          <div class="bottom"></div>
        </div>
        <div class="left">
          <div v-for="article in articles" :key="article">
            <CatalogueArticle
              :article="article"
              class="article"
              id="articles"
            ></CatalogueArticle>
          </div>
          <div class="noneImg" v-if="articles.length === 0">
            <a-empty :image="simpleImage" />
          </div>
          <div class="foot">
            <a-pagination
              size="small"
              v-if="articles.length !== 0"
              v-model:current="PageInfo.currentPage"
              v-model:total="PageInfo.totalNumber"
              v-model:pageSize="PageInfo.pageSize"
              show-quick-jumper
              @change="onChange"
            />
          </div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script scoped>
// @ is an alias to /src
import ParticleVue from "@/components/common/ParticleVue.vue";
import CatalogueUp from "@/components/content/CataloguePage/CatalogueUp.vue";
import CatalogueMy from "@/components/content/CataloguePage/CatalogueMy.vue";
import CatalogueArticle from "@/components/content/CataloguePage/CatalogueArticle.vue";
import CatalogueNotice from "@/components/content/CataloguePage/CatalogueNotice.vue";
import CatalogueTag from "@/components/content/CataloguePage/CatalogueTag";
import SearchBar from "@/components/common/SearchBar.vue";

import {
  SelectArticles,
  SelectArticlesByType,
  SelectArticleByTitle,
  SelectAboutMe,
} from "@/network/Select.js";

export default {
  name: "CataloguePage",
  components: {
    ParticleVue,
    CatalogueUp,
    CatalogueMy,
    CatalogueArticle,
    CatalogueNotice,
    CatalogueTag,
    SearchBar,
  },
  mounted() {
    // let type = sessionStorage.getItem("type");
    // let title = sessionStorage.getItem("title");
    // let page = sessionStorage.getItem("page");
    let type = this.$store.getters.getType;
    let title = this.$store.getters.getTitle;
    let page = this.$store.getters.getPage;
    this.PageInfo.currentPage = page;
    if (type === "" && title === "") {
      this.GetArticlesByPage(page);
    } else if (type === "") {
      this.GetArticlesByTitle(page, title);
    } else if (title === "") {
      this.GetArticlesByType(page, type);
    }

    this.GetAboutMe();
  },
  methods: {
    //分页查找
    GetArticlesByPage(page) {
      // sessionStorage.setItem("type", '');
      // sessionStorage.setItem("title", '');
      this.$store.dispatch("saveType", "");
      this.$store.dispatch("saveTitle", "");
      this.PageInfo.currentPage = Number(page);
      SelectArticles(page).then(
        (res) => {
          if (res.code === 20042) {
            this.articles = res.data;
            this.PageInfo.currentPage = Number(page);
            this.PageInfo.totalNumber = Number(res.totalPage);
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    //类型查找
    GetArticlesByType(page, tag) {
      // sessionStorage.setItem("type", tag);
      // sessionStorage.setItem("title", '');
      this.$store.dispatch("saveType", tag);
      this.$store.dispatch("saveTitle", "");
      this.PageInfo.currentPage = Number(page);
      SelectArticlesByType(page, tag).then(
        (res) => {
          if (res.code === 20042) {
            this.articles = res.data;
            this.PageInfo.currentPage = Number(page);
            this.PageInfo.totalNumber = Number(res.totalPage);
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    //标题查找
    GetArticlesByTitle(page, title) {
      // sessionStorage.setItem("title", title);
      // sessionStorage.setItem("type", '');
      this.$store.dispatch("saveTitle", title);
      this.$store.dispatch("saveType", "");
      this.PageInfo.currentPage = Number(page);
      SelectArticleByTitle(page, title).then(
        (res) => {
          if (res.code === 20042) {
            this.articles = res.data;
            this.PageInfo.currentPage = Number(page);
            this.PageInfo.totalNumber = Number(res.totalPage);
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
    //抛出异常
    ERROR(Message) {
      console.log(Message);
    },
    //分页
    onChange() {
      // let type = sessionStorage.getItem("type");
      // let title = sessionStorage.getItem("title");
      let type = this.$store.getters.getType;
      let title = this.$store.getters.getTitle;
      let page = this.PageInfo.currentPage;
      // sessionStorage.setItem("page", page);
      this.$store.dispatch("savePage", page);
      if (type === "" && title === "") {
        this.GetArticlesByPage(page);
      } else if (type === "") {
        this.GetArticlesByTitle(page, title);
      } else if (title === "") {
        this.GetArticlesByType(page, type);
      }
    },
  },
  data() {
    return {
      PageInfo: {
        totalNumber: 0,
        currentPage: 1,
        pageSize: 6,
      },
      articles: [
        // {
        //   id: "1",
        //   title: "标题",
        //   author: "作者",
        //   date: "时间",
        //   messages: "<p>文章主体</p>",
        //   tags: ['标签']
        // }
      ],
      AboutMe: {
        // author: "作者",
        // introduce: "介绍",
        // notice: "公告",
      },
      title: "",
    };
  },
};
</script>
<style scoped>
@import url("@/assets/css/CataloguePage/My.css");
@import url("@/assets/css/CataloguePage/NoticeTag.css");
@import url("@/assets/css/CataloguePage/Articles.css");
@import url("@/assets/css/CataloguePage/Search.css");

/*不可选中*/
.Select {
  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;
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
.catalogue {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 900px;
  z-index: 100;
}
.left {
  float: left;
}
.right {
  float: right;
}
/*顶部按钮*/
#UpButton {
  position: relative;
  margin: auto;
  text-align: center;
  height: 70px;
}
/*文章*/
.article {
  margin-bottom: 20px;
}

/*空*/
.noneImg,
.noneImg a-pagination {
  position: relative;
  top: 200px;
  bottom: 0;
  width: 550px;
  text-align: center;
}

/*分页*/
.foot {
  height: 40px;
  text-align: center;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
}
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}

/*底部*/
.bottom {
  position: absolute;
  height: 40px;
  width: 1px;
}

/*动画*/
#search {
  -webkit-animation: scale-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
#My {
  -webkit-animation: tilt-in-fwd-tr 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: tilt-in-fwd-tr 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

#notice {
  -webkit-animation: slide-in-blurred-right 1s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-right 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}
#tag {
  -webkit-animation: slide-in-blurred-right 1s cubic-bezier(0.23, 1, 0.32, 1)
    0.3s both;
  animation: slide-in-blurred-right 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both;
}

#articles {
  -webkit-animation: slide-in-blurred-bottom 1s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-bottom 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}
</style>
