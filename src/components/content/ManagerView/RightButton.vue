<template>
  <div class="box">
    <div class="update">
      <a-button type="primary" @click="Update" size="middle">修改</a-button>
    </div>
    <div class="delete">
      <a-button type="primary" danger @click="Delete" size="middle"
        >删除</a-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "RightButton",
  props: ["id"],
  methods: {
    Update() {
      console.log(this.id);
    },
    Delete() {
      console.log(this.id);
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