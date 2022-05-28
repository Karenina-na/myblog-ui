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
      编辑
    </a-menu-item>
  </a-menu>
</template>
<script>
import { ref } from "vue";
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
  watch: {
    flag: function (a) {
      switch (a) {
        case "0": {
          this.current = ref(["all"]);
          break;
        }
        case "1": {
          this.current = ref(["singal"]);
          break;
        }
      }
    },
  },
  setup() {
    let current = ref(["all"]);
    return {
      current,
    };
  },
};
</script>