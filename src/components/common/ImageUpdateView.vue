<template>
  <div class="box">
    <div v-for="img in Image" :key="img">
      <ImageBody :img="img" class="imge"></ImageBody>
      <a-popconfirm
        title="Are you sure？"
        @confirm="Delete(img)"
        @cancel="cancel"
      >
        <a-button type="primary" danger size="middle" class="button"
          >删除</a-button
        >
      </a-popconfirm>
    </div>
  </div>

  <div class="foot">
    <a-pagination
      size="small"
      v-model:current="PageInfo.currentPage"
      v-model:total="PageInfo.totalNumber"
      v-model:pageSize="PageInfo.pageSize"
      show-quick-jumper
      @change="onChange"
    />
  </div>
</template>

<script>
import { SelectImage, DeleteImage } from "@/network/FileRequest.js";
import ImageBody from "@/components/content/ManagerView/ImageBody.vue";
import { message } from "ant-design-vue";
export default {
  components: { ImageBody },
  nameL: "ImageUpdateView",
  methods: {
    GetImageByPage() {
      SelectImage(this.PageInfo.currentPage).then(
        (res) => {
          if (res.code === 20042) {
            this.PageInfo.totalNumber = Number(res.totalPage);
            this.Image = res.data;
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    /**删除图片 */
    deleteImg(img) {
      let name;
      //区分linux与window的斜杠
      let str1 = img.name.split("\\")[1];
      let str2 = img.name.split("/")[4];
      if (str2 === undefined) {
        name = str1;
      } else {
        name = str2;
      }
      DeleteImage(name).then(
        (res) => {
          if (res.code === 20021) {
            message.success("删除成功");
            this.GetImageByPage();
          } else {
            message.error("删除失败 " + res.code + res.msg);
            this.ERROR(res);
          }
        },
        (err) => {
          message.error("删除失败 " + err.code + err.msg);
          this.ERROR(err);
        }
      );
    },
    Delete(img) {
      this.deleteImg(img);
    },
    cancel() {
      message.warning("已取消操作");
    },
    //改变页码
    onChange() {
      this.GetImageByPage();
    },
    //错误
    ERROR(res) {
      console.log(res);
    },
  },
  mounted() {
    this.page = 1;
    this.GetImageByPage();
  },
  props: [],
  data() {
    return {
      PageInfo: {
        totalNumber: 0,
        currentPage: 1,
        pageSize: 6,
      },
      Image: {},
    };
  },
};
</script>

<style scoped>
@import url("@/assets/css/ManagerView/ImageUpdaate.css");

/**盒子模型 */
.box {
  float: right;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.123);

  transition-property: -webkit-box-shadow box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  cursor: default;
  border-radius: 10px;
}
.box:hover {
  -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}

/**资源显示 */
.imge {
  float: left;
  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**按钮 */
.button {
  float: right;
  margin-right: 100px;
  margin-top: 100px;
}

/**页码条 */
.foot {
  float: left;
  height: 80px;
  margin-top: 30px;
  margin-left: 350px;
  margin-bottom: 50px;
}
</style>