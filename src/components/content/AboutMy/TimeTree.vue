<template>
  <a-timeline mode="alternate">
    <!-- <a-timeline-item class="section">
      <template #dot>
        <xxx></xxx>
      </template>
      xxx
    </a-timeline-item> -->
    <a-timeline-item class="section">
      <template #dot>
        <xxx></xxx>
      </template>
      前端测试完成 2022-6-3
    </a-timeline-item>
    <a-timeline-item class="section">
      <template #dot>
        <bank-outlined style="font-size: 20px" />
      </template>
      vue-cli前端重构，优化网页性能 2022-5-16
    </a-timeline-item>
    <a-timeline-item class="section">
      <template #dot>
        <fund-outlined />
      </template>
      加入后端缓存结构 2022-05-04
    </a-timeline-item>
    <a-timeline-item color="red" class="section">
      <template #dot>
        <apartment-outlined />
      </template>
      测试阶段 2022-05-01
    </a-timeline-item>
    <a-timeline-item class="section">
      <template #dot><ClockCircleOutlined style="font-size: 20px" /></template>
      项目构建初步完成 2022-04-29
    </a-timeline-item>
  </a-timeline>
</template>
<script>
import {
  ClockCircleOutlined,
  FundOutlined,
  ApartmentOutlined,
  BankOutlined,
} from "@ant-design/icons-vue";

export default {
  components: {
    ClockCircleOutlined,
    FundOutlined,
    ApartmentOutlined,
    BankOutlined,
  },
  name: "TimeTree",
};
</script>
<style scoped>
.section {
  transition: transform 0.32s !important;
  cursor: default;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.466);
}
.section:hover {
  transform: scale(1.1);
  transition-duration: 0.08s;
  color: rgba(82, 163, 159, 0.747);
}
</style>