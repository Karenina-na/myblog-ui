<template>
  <div class="box">
    <div class="update">
      <a-button type="primary" @click="Update" size="middle">修改</a-button>
    </div>
    <div class="delete">
      <a-popconfirm title="Are you sure？" @confirm="Delete" @cancel="cancel">
        <a-button type="primary" danger size="middle">删除</a-button>
      </a-popconfirm>
    </div>
  </div>
</template>
<script>
import { message } from "ant-design-vue";

export default {
  components: {},
  name: "RightButton",
  props: ["id"],
  methods: {
    Update() {
      this.$emit("pushUpdate", this.id);
    },
    Delete() {
      this.$emit("pushDelete", this.id);
    },
    cancel() {
      message.warning("已取消操作");
    },
  },
};
</script>
<style scoped>
.box {
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

.update,
.delete {
  padding: 8px;
  margin-left: 20px;
}
</style>