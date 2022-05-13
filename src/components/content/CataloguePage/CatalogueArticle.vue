<template>
  <div class="box">
    <div class="left">
      <div id="head">
        <span class="title">{{article.title}}</span>
        <span class="tag">
          <delivered-procedure-outlined class="icon" />
          <span v-for="tag in article.tags"
                :key="tag">{{" "+tag+" "}}</span>
        </span>
      </div>
      <div id="body">{{article.body}}</div>
      <div id="foot">
        <customer-service-outlined class="icon" />
        <span class="message">{{article.author}}</span>
        <loading-outlined class="icon" />
        <span class="message">{{article.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { DeliveredProcedureOutlined, CustomerServiceOutlined, LoadingOutlined } from '@ant-design/icons-vue';

export default {
  name: "CatalogueArticle",
  props: ["article"],
  components: {
    DeliveredProcedureOutlined,
    CustomerServiceOutlined,
    LoadingOutlined
  }
}
</script>

<style scoped>
@import url("@/assets/css/common/Shadow.css");
@import url("@/assets/css/CataloguePage/MyIcon.css");

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
}

/*悬停阴影*/
.box:hover {
  -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.left {
  width: 590px;
}

/*标题布局*/
.title {
  font-size: 32px;
  margin-left: 5px;
  margin-right: 70px;
  font-weight: 700;
}

/*标签和图标*/
.tag,
.icon {
  font-size: 16px;
  color: rgb(0 0 0 / 35%);
}
.icon {
  margin-right: 10px;
}
.tag.icon:hover,
.tag:hover .icon {
  -webkit-animation: rotate-center-icon 0.5s cubic-bezier(0.23, 1, 0.32, 1)
    forwards;
  animation: rotate-center-icon 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
}

/*名称和日期*/
#foot {
  margin-top: 10px;
  margin-right: 10px;
  float: right;
}
#foot .message {
  font-size: 12px;
  color: #15c1f5;
  padding-right: 10px;
}
#foot .icon {
  margin-right: 4px;
  color: #15c1f5;
}
</style>