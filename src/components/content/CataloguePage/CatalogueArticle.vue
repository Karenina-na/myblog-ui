<template>
  <div class="box">
    <div class="left">
      <div id="head">
        <span class="title"
              @click="selectArticleById(article.id)">{{
          article.title
        }}</span>
      </div>
      <div id="body"
           v-text="article.messages"></div>
      <div id="foot">
        <span class="tag">
          <delivered-procedure-outlined class="icon" />
          <span v-for="tag in article.tags"
                :key="tag">{{
            " " + tag + " "
          }}</span>
        </span>
        <div style="float: right">
          <customer-service-outlined class="icon" />
          <span class="message">{{ article.author }}</span>
          <tag-outlined class="icon" />
          <span class="message">{{ article.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DeliveredProcedureOutlined,
  CustomerServiceOutlined,
  TagOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "CatalogueArticle",
  props: ["article"],
  components: {
    DeliveredProcedureOutlined,
    CustomerServiceOutlined,
    TagOutlined,
  },
  methods: {
    selectArticleById (id) {
      // sessionStorage.setItem("id", id);
      this.$store.dispatch("saveArticleId", id);
      this.$router.push({ path: "/Article" });
    },
  },
};
</script>

<style scoped>
.box {
  width: 630px;
  padding: 10px 20px 10px;
  line-height: 1.6;
  float: left;

  background-color: rgba(255, 255, 255, 0.705);
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.027);
  border-radius: 30px;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.048);

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

/*悬停阴影*/
.box:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}

.left {
  width: 590px;
}

/*标题布局*/
.title {
  font-size: 25px;
  margin-left: 20px;
  margin-right: 70px;
  font-weight: 700;

  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.title:hover {
  color: #1e6dcd;
  cursor: pointer;
}

/*文章*/
#body {
  font-size: 14px;
  letter-spacing: 1.2px;
  line-height: 1.2;
  white-space: normal;
  color: #80a6ba;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-left: 5px;
  margin-right: 5px;
}

/*名称和日期*/
#foot {
  margin-top: 10px;
  margin-right: 10px;
}
/*标签和图标*/
.tag,
.icon {
  color: rgb(0 0 0 / 35%);
}
.icon {
  font-size: 16px;
  margin-left: 20px;

  transition-property: -webkit-transform transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.tag {
  font-size: 14px;
  float: left;
}
.tag.icon:hover,
.tag:hover .icon {
  -webkit-transform: rotate(540deg);
  transform: rotate(540deg);
}
#foot .message {
  font-size: 12px;
  color: #15c1f5;
}
#foot .icon {
  margin-right: 4px;
  color: #15c1f5;
}
</style>