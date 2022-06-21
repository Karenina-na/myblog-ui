<template>
  <a-timeline mode="alternate">
    <!-- <a-timeline-item class="section" //color="颜色">
      <template #dot>
        //<图标 style="font-size: 20px" />
      </template>
      文字
    </a-timeline-item> -->
    <a-timeline-item class="section" color="">
      <template #dot>
        <delete-outlined  style="font-size: 20px"/>
      </template>
      加入工具页 2022-6-21
    </a-timeline-item>
    <a-timeline-item class="section" color="purple">
      <template #dot>
        <form-outlined style="font-size: 20px" />
      </template>
      springboot重构后端，优化项目架构 2022-6-7
    </a-timeline-item>
    <a-timeline-item class="section" color="green">
      <template #dot>
        <check-outlined style="font-size: 20px" />
      </template>
      前端测试完成 2022-6-3
    </a-timeline-item>
    <a-timeline-item class="section">
      <template #dot>
        <edit-outlined style="font-size: 20px" />
      </template>
      更改数据加密算法 2022-6-1
    </a-timeline-item>
    <a-timeline-item class="section" color="grep">
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
  CheckOutlined,
  EditOutlined,
  FormOutlined,
  DeleteOutlined
} from "@ant-design/icons-vue";

export default {
  components: {
    ClockCircleOutlined,
    FundOutlined,
    ApartmentOutlined,
    BankOutlined,
    CheckOutlined,
    EditOutlined,
    FormOutlined,
    DeleteOutlined
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