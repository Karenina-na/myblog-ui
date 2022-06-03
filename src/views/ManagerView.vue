<template>
  <perfect-scrollbar>
    <div class="box Select">
      <div class="UpMu">
        <ManageUpVue @pushFlag="ChangeFlag" :flag="flag"></ManageUpVue>
      </div>
      <div v-if="this.flag === '0'">
        <div class="add">
          <a-button type="primary" class="ADD" @click="Add">新建</a-button>
          <a-button type="primary" @click="this.Dialog = '1'" class="ADD"
            >修改个人信息</a-button
          >
          <!--对话框-->
          <a-modal v-if="this.Dialog === '1'" :visible="true" title="个人信息">
            <template #footer>
              <a-button key="back" @click="this.Dialog = '0'">Return</a-button>
              <a-button key="submit" type="primary" @click="UpdateMy"
                >Submit</a-button
              >
            </template>
            <a-input
              v-model:value="AboutMe.author"
              placeholder="作者"
              style="width: 200px"
              class="dialog-input"
            >
            </a-input>
            <a-textarea
              v-model:value="AboutMe.notice"
              placeholder="公告"
              :auto-size="{ minRows: 1, maxRows: 10 }"
              class="dialog-input"
            />
            <a-textarea
              v-model:value="AboutMe.introduce"
              placeholder="简介"
              :auto-size="{ minRows: 1, maxRows: 10 }"
              class="dialog-input"
            />
          </a-modal>
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
import { SelectArticles, SelectAboutMe } from "@/network/Select.js";
import { DeleteArticle, UpdateAboutMe } from "@/network/Manage.js";

export default {
  name: "ManagerView",
  components: { ManageUpVue, ArticleBody, RightButton, ArticleUpdateView },
  mounted() {
    this.GetArticlesByPage(1);
    this.GetAboutMe();
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
    //查找必要数据
    GetAboutMe() {
      let author = this.$store.getters.getAuthor;
      let introduce = this.$store.getters.getIntroduce;
      let notice = this.$store.getters.getNotice;

      if (author !== "" && introduce !== "" && notice !== "") {
        this.AboutMe = {
          author: author,
          introduce: introduce,
          notice: notice,
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
    //修改个人信息
    UpdateMy() {
      UpdateAboutMe(this.AboutMe).then(
        (res) => {
          if (res.code === 20031) {
            this.$store.dispatch("saveIntroduce", "");
            this.$store.dispatch("saveNotice", "");
            this.$store.dispatch("saveAuthor", "");
            this.GetAboutMe();
            this.Dialog = "0";
            message.success("更改成功");
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
    //异常
    ERROR(err) {
      console.log(err);
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
          // id: "1",
          // title: "标题",
          // author: "作者",
          // date: "时间",
          // messages: "<p>文章主体</p>",
          // tags: ["标签"],
        },
      ],
      articleId: "",
      Dialog: "0",
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
@import "@/assets/css/ManagerView/UpMu.css";
@import "@/assets/css/ManagerView/RightButton.css";
@import "@/assets/css/ManagerView/ArticleCatalugue.css";

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

/*顶部选择栏*/
.UpMu {
  -webkit-animation: flip-in-hor-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-hor-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

  -webkit-animation: rotate-in-2-cw 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: rotate-in-2-cw 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

  -webkit-animation: roll-in-blurred-right 0.65s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: roll-in-blurred-right 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
}

/*新增*/
.add {
  padding-top: 20px;
  padding-left: 630px;
}
.add .ADD {
  margin-left: 30px;
}

/*对话框 */
.dialog-input {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>