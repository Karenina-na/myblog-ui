<template>
  <perfect-scrollbar>
    <div class="box Select">
      <div><ManageUpVue @pushFlag="ChangeFlag" :flag="flag"></ManageUpVue></div>
      <div v-if="this.flag === '0'">
        <div class="add">
          <a-button type="primary" @click="Add">新建</a-button>
        </div>
        <div v-for="article in articles" :key="article">
          <ArticleBody :article="article" class="article"></ArticleBody>
          <RightButton
            :id="article.id"
            class="button"
            @pushDelete="Delete"
            @pushUpdate="Update"
          ></RightButton>
        </div>

        <div class="foot">
          <a-pagination
            size="small"
            v-if="articles.length !== 0"
            v-model:current="PageInfo.currentPage"
            v-model:total="PageInfo.totalNumber"
            v-model:pageSize="PageInfo.pageSize"
            show-quick-jumper
            @change="ChangePage"
          />
        </div>
      </div>
      <div v-if="this.flag === '1'">
        <!--文章修改界面-->
        <div class="box Select">
          <ArticleUpdateView :articleId="articleId"></ArticleUpdateView>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>
<script>
import ManageUpVue from "@/components/common/ManageUp.vue";
import ArticleBody from "@/components/content/ManagerView/ArticlesBody.vue";
import RightButton from "@/components/content/ManagerView/RightButton.vue";
import ArticleUpdateView from "@/components/common/ArticleUpdateView.vue";
import { message } from "ant-design-vue";
import { SelectArticles } from "@/network/Select.js";
import { DeleteArticle } from "@/network/Manage.js";

export default {
  name: "ManagerView",
  components: { ManageUpVue, ArticleBody, RightButton, ArticleUpdateView },
  mounted() {
    this.GetArticlesByPage(1);
    let check = this.$store.getters.getFlag;
    if (check !== 20042) {
      this.$router.push("/rootManager");
    }
  },
  methods: {
    //改变显示状态并重载数据
    ChangeFlag(flag) {
      this.flag = flag;
      this.GetArticlesByPage(this.PageInfo.currentPage);
    },
    //删除
    Delete(id) {
      DeleteArticle(id).then(
        (res) => {
          if (res.code === 20021) {
            message.success("删除成功");
            this.GetArticlesByPage(this.PageInfo.currentPage);
          } else {
            message.error("删除失败 " + res.code + res.msg);
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    //改变页码
    ChangePage() {
      this.GetArticlesByPage(this.PageInfo.currentPage);
    },
    //分页查询
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
    //点击修改按钮
    Update(id) {
      this.flag = "1";
      this.articleId = id;
    },
    //添加按钮
    Add() {
      this.flag = "1";
      this.articleId = null;
    },
  },
  data() {
    return {
      flag: "0",
      PageInfo: {
        totalNumber: 0,
        currentPage: 1,
        pageSize: 6,
      },
      articles: [
        {
          id: "1",
          title: "标题",
          author: "作者",
          date: "时间",
          messages: "<p>文章主体</p>",
          tags: ["标签"],
        },
      ],
      articleId: "",
    };
  },
};
</script>
<style scoped>
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

.Select {
  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;
}

.box {
  width: 900px;
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

/*文章元素*/
.article {
  width: 700px;
  float: left;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.281) solid;
}

/*分页*/
.foot {
  width: 700px;
  float: left;
  margin-top: 20px;
  padding-left: 385px;
  padding-bottom: 30px;
}

/*按钮元素*/
.button {
  margin-top: 23px;
  margin-left: 10px;
  padding: 10px;
  width: 140px;
  float: right;
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.281) solid;
}

/*新增*/
.add {
  padding-top: 20px;
  padding-left: 800px;
}
</style>