<template>
  <a-menu
    v-model:selectedKeys="current"
    mode="horizontal"
    @click="ChangeCurrent"
  >
    <a-menu-item key="all">
      <template #icon>
        <mail-outlined />
      </template>
      处理中心
    </a-menu-item>
    <a-menu-item key="singal">
      <template #icon>
        <appstore-outlined />
      </template>
      文章
    </a-menu-item>
  </a-menu>
</template>
<script>
import { ref, toRef } from "vue";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons-vue";
export default {
  name: "ManageUpVue",
  components: {
    MailOutlined,
    AppstoreOutlined,
  },
  props: ["flag"],
  methods: {
    ChangeCurrent({ key }) {
      switch (key) {
        case "all": {
          this.$emit("pushFlag", "0");
          break;
        }
        case "singal": {
          this.$emit("pushFlag", "1");
          break;
        }
      }
    },
  },
  mounted() {
    this.current = ref(["all"]);
  },
  watch: {
    value: function (a) {
      switch (a) {
        case "0": {
          this.current = toRef(["all"]);
          break;
        }
        case "1": {
          this.current = toRef(["singal"]);
          break;
        }
      }
    },
  },
  data() {
    return {
      current: toRef(["all"]),
    };
  },
};
</script>