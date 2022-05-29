<template>
  <div class="box">
    <div class="head">
      <div class="title">{{ article.title }}</div>
      <div class="introduce">
        <span class="name">{{ article.author }}</span>
        <span class="date">{{ article.date }}</span>
      </div>
      <div>
        <span class="tags">
          <a-input
            v-model:value="article.tags"
            placeholder="请输入标签值"
            class="tags"
          />
        </span>
      </div>
    </div>
    <div class="body">
      <div style="border: 1px solid #ccc">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 750px; overflow-y: hidden"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default {
  name: "ArticleUpdateView",
  components: { Editor, Toolbar },
  methods: {},
  mounted() {},
  props: ["articleId"],
  data() {
    return {};
  },
  setup(props) {
    var article = {};
    const editorRef = shallowRef();
    // 内容 HTML
    const valueHtml = ref(article.messages);
    onMounted(() => {
      setTimeout(() => {
        article = {
          id: "1",
          title: "标题",
          author: "作者",
          date: "时间",
          messages: "文章主体",
          tags: "标签1 标签2 标签3",
        };
        valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
        console.log(props.articleId);
      }, 1500);
    });
    const toolbarConfig = {};
    const editorConfig = { placeholder: "请输入..." };
    // 组件销毁
    onBeforeUnmount(() => {
      const editor = editorRef.value.messages;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };

    return {
      article,
      editorRef,
      valueHtml,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
    };
  },
};
</script>
<style scoped>
@import url("@wangeditor/editor/dist/css/style.css");
.box {
  width: 100%;

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

/*头*/
.head {
  margin: 30px;
  padding: 40px;
  padding-bottom: 0;
}

.title {
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.545);
  white-space: normal;
  word-wrap: break-word;
  padding-bottom: 20px;
  padding-left: 10px;
}

.introduce {
  white-space: normal;
  word-wrap: break-word;
  padding-bottom: 10px;
}

.introduce .name {
  font-size: 16px;
  color: #c33;
}

.introduce .date {
  padding-left: 20px;
  letter-spacing: 2px;
  font-size: 15px;
}

.tags {
  margin-top: 5px;
  width: 600px;
  height: 30px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.545);
}

/*编辑器*/
.body {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  height: 870px;
}
</style>