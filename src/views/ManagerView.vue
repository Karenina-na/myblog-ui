<template>
  <div class="box Select">
    <div><ManageUpVue @pushFlag="ChangeFlag"></ManageUpVue></div>
    <div v-if="this.flag === '0'">
      <div v-for="article in articles" :key="article">
        <ArticleBody :article="article" class="article"></ArticleBody>
        <RightButton :id="article.id" class="button"></RightButton>
      </div>
    </div>
  </div>
</template>
<script>
import ManageUpVue from "@/components/common/ManageUp.vue";
import ArticleBody from "@/components/content/ManagerView/ArticlesBody.vue";
import RightButton from "@/components/content/ManagerView/RightButton.vue";

export default {
  name: "ManagerView",
  components: { ManageUpVue, ArticleBody, RightButton },
  methods: {
    //改变显示状态
    ChangeFlag(flag) {
      this.flag = flag;
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
        {
          id: "1",
          title: "标题",
          author: "作者",
          date: "时间",
          messages: "文章主体",
          tags: ["标签"],
        },
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