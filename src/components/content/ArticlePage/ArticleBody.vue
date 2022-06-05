<template>
  <div class="box">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="message">
      <span class="author"
            @click="SelectMy">{{ article.author + " ·" }}</span>
      <span class="date">{{ article.date + " ·" }}</span>
      <span style="margin-right: 3px;">
        <tag-outlined class="icon" />分类：
      </span>
      <span v-for="tag in article.tags"
            :key="tag"
            class="tag"
            @click="SelectTag(tag)">{{ tag }}</span>
    </div>
    <div class="body"
         v-html="article.messages"></div>
  </div>
</template>

<script>
import { TagOutlined } from "@ant-design/icons-vue";

export default {
  name: "ArticleBody",
  methods: {
    SelectTag (tag) {
      this.$emit("PushTag", tag);
    },
    SelectMy () {
      this.$router.push({ path: "/AboutMy" });
    },
  },
  components: { TagOutlined },
  props: ["article"],
  data () {
    return {};
  },
};
</script>

<style scoped>
.box {
  border-radius: 40px;
  padding: 30px 40px 30px;
  background-color: #ffffffe8;
  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.box:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.35);
}
/*标题*/
.title {
  margin-left: 25px;
  font-size: 35px;
}
/*信息*/
.message {
  margin-top: 10px;
  font-size: 14px;
  margin-left: 40px;
  margin-bottom: 30px;
}
.author {
  padding-right: 10px;
  font-size: 18px;
}
.author:hover {
  color: rgb(155, 112, 255);
  cursor: pointer;
}

.date {
  padding-right: 30px;
}
.tag {
  padding-left: 10px;
  cursor: pointer;
}
.tag:hover {
  color: rgb(155, 112, 255);
}
.icon {
  margin-right: 5px;
}

/*文章主体*/
.body {
  font-size: 17px;
  font-weight: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: 1.2px;
}
</style>