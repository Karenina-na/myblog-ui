<template>
  <div class="box">
    <div class="title">{{ article.title }}</div>
    <div class="message">{{ article.messages }}</div>
    <div class="other">
      <span class="tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">
          {{ tag }}</span
        >
      </span>
      <span class="date">{{ article.date }}</span>
      <span class="author">{{ article.author }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticlesBody",
  data() {
    return {};
  },
  props: ["article"],
};
</script>   
<style scoped>
.box {
  width: 100%;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.123);

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  cursor: default;
}
.box:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}

/*标题样式*/
.title {
  font-size: 20px;
  padding: 5px;
  padding-left: 20px;
  font-weight: bold;
}

/*文章*/
.message {
  color: rgba(0, 0, 0, 0.589);
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: 1.2px;
}

/*其他信息*/
.other {
  font-size: 14px;
}
.tags {
  color: rgba(0, 0, 0, 0.459);
  padding-right: 40px;
  margin-left: 30px;
}
.tags span {
  padding-right: 10px;
}

.date {
  float: right;
  color: rgba(163, 75, 16, 0.73);
  margin-left: 30px;
  margin-right: 30px;
}

.author {
  color: rgba(14, 125, 139, 0.73);
  float: right;
}
</style>