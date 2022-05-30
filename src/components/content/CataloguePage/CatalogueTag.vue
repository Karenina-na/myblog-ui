<template>
  <div class="box">
    <div class="head">
      <calendar-outlined id="icon" />
      <span class="title">分类</span>
    </div>
    <div v-for="tag in tags" :key="tag">
      <div class="tag" @click="selectArticlesByType(tag)">{{ tag }}</div>
    </div>
  </div>
</template>

<script>
import { CalendarOutlined } from "@ant-design/icons-vue";

export default {
  name: "CatalogueTag",
  components: {
    CalendarOutlined,
  },
  data() {
    return {
      tags: ["java", "python", "c与c++", "数据库", "前端", "后端"],
    };
  },
  methods: {
    selectArticlesByType(type) {
      this.$emit("PushType", "1", type);
    },
  },
};
</script>

<style scoped>
.box {
  width: 230px;
  padding: 10px 20px 10px;
  margin-top: 20px;
  line-height: 1.6;

  background-color: rgba(255, 255, 255, 0.705);
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.027);
  border-radius: 20px;

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

/*头*/
.head {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
}
.title {
  padding-left: 5px;
}

#icon {
  font-size: 18px;
}

/*标签*/
.tag {
  font-size: 14px;
  line-height: 2;
  padding-left: 15px;
  padding-right: 5px;
  border-radius: 10px;

  transition-property: background-color font-size;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.tag:hover {
  font-size: 16px;
  background-color: rgb(120, 255, 233);
  cursor: pointer;
}
</style>