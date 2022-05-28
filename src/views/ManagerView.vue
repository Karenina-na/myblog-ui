<template>
  <div class="box Select">
    <div><ManageUpVue @pushFlag="ChangeFlag" :flag="flag"></ManageUpVue></div>
    <div v-if="this.flag === '0'">
      <div v-for="article in articles" :key="article">
        <ArticleBody :article="article" class="article"></ArticleBody>
        <RightButton
          :id="article.id"
          class="button"
          @pushDelete="Delete"
          @pushUpdate="Update"
        ></RightButton>
      </div>
    </div>
    <div v-if="this.flag === '1'">
      <!--文章修改界面-->
      <div class="box Select">
        <ArticleUpdateView></ArticleUpdateView>
      </div>
    </div>
  </div>
</template>
<script>
import ManageUpVue from "@/components/common/ManageUp.vue";
import ArticleBody from "@/components/content/ManagerView/ArticlesBody.vue";
import RightButton from "@/components/content/ManagerView/RightButton.vue";
import ArticleUpdateView from "@/components/common/ArticleUpdateView.vue";
import { message } from "ant-design-vue";

export default {
  name: "ManagerView",
  components: { ManageUpVue, ArticleBody, RightButton, ArticleUpdateView },
  methods: {
    //改变显示状态
    ChangeFlag(flag) {
      this.flag = flag;
    },
    //命令
    Delete(id) {
      console.log(id);
      message.success("已删除");
    },
    Update(id) {
      this.flag = "1";
      console.log(id);
    },
  },
  data() {
    return {
      flag: "0",
      articles: [
        {
          id: "1",
          title: "标题",
          author: "作者",
          date: "时间",
          messages: "文章主体",
          tags: ["标签"],
        },
      ],
    };
  },
};
</script>
<style scoped>
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
</style>