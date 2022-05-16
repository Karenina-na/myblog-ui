<template>
  <div class="box">
    <div><ManageUpVue @pushFlag="ChangeFlag"></ManageUpVue></div>
  </div>
</template>
<script>
import ManageUpVue from "@/components/common/ManageUp.vue";

export default {
  name: "ManagerView",
  components: { ManageUpVue },
  methods: {
    //改变显示状态
    ChangeFlag(flag) {
      this.flag = flag;
      console.log(flag);
    },
  },
  data() {
    return {
      flag: "0",
    };
  },
};
</script>
<style scoped></style>