<template>
  <div class="box">
    <div class="head">
      <div class="title">
        <a-input v-model:value="article.title"
                 placeholder="标题"
                 style="width: 600px">
          <template #prefix>
            <home-outlined />
          </template>
        </a-input>
      </div>
      <div class="introduce">
        <span class="name">
          <a-input v-model:value="article.author"
                   placeholder="作者"
                   style="width: 200px">
            <template #prefix>
              <user-outlined type="user" />
            </template>
          </a-input>
        </span>
        <span class="date">
          <a-input v-model:value="article.date"
                   placeholder="日期"
                   style="width: 200px">
            <template #prefix>
              <history-outlined />
            </template>
          </a-input>
        </span>
      </div>
      <div>
        <span class="tags">
          <a-input v-model:value="article.tags"
                   placeholder="请输入标签值"
                   class="tags" />
        </span>
      </div>
    </div>
    <div class="body">
      <div style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc"
                 :editor="editor"
                 :defaultConfig="toolbarConfig"
                 :mode="mode" />
        <Editor style="height: 600px; overflow-y: hidden; cursor: text"
                v-model="article.messages"
                :defaultConfig="editorConfig"
                :mode="mode"
                @onCreated="onCreated" />
      </div>
    </div>
    <div class="button">
      <a-button type="primary"
                shape="circle"
                size="large"
                width="300px"
                @click="commit()">
        <template #icon>
          <cloud-upload-outlined />
        </template>
      </a-button>
    </div>
  </div>
</template>
<script>
import { toRaw } from "@vue/reactivity";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import {
  CloudUploadOutlined,
  UserOutlined,
  HistoryOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { SelectArticleById } from "@/network/Select.js";
import { UpdateArticle, AddArticle } from "@/network/Manage.js";
import { message } from "ant-design-vue";

export default {
  components: {
    Editor,
    Toolbar,
    CloudUploadOutlined,
    UserOutlined,
    HistoryOutlined,
    HomeOutlined,
  },
  name: "ArticleUpdateView",
  methods: {
    onCreated (editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    commit () {
      if (this.flag === "update") {
        //改
        let article = toRaw(this.article);
        let arr = article.tags.split(/\s+/);
        article.tags = arr;
        UpdateArticle(article).then(
          (res) => {
            if (res.code === 20031) {
              message.success("修改成功");
              this.GetArticlesById();
            } else {
              this.article.tags = this.article.tags.join(" ");
              message.error("修改失败，错误码 " + res.code + res.msg);
            }
          },
          (err) => {
            this.article.tags = this.article.tags.join(" ");
            message.error("修改失败");
            this.ERROR(err);
          }
        );
      } else {
        //增
        let article = toRaw(this.article);
        let arr = article.tags.split(/\s+/);
        article.tags = arr;
        AddArticle(article).then(
          (res) => {
            if (res.code === 20011) {
              message.success("增加成功");
            } else {
              this.article.tags = this.article.tags.join(" ");
              message.error("添加失败 " + res.code + res.msg);
            }
          },
          (err) => {
            this.article.tags = this.article.tags.join(" ");
            message.error("增加失败");
            this.ERROR(err);
          }
        );
      }
    },
    //文章查找
    GetArticlesById () {
      SelectArticleById(this.articleId).then(
        (res) => {
          if (res.code === 20042) {
            this.article = res.data;
            this.article.tags = this.article.tags.join(" ");
          } else {
            this.ERROR(res);
          }
        },
        (err) => {
          this.ERROR(err);
        }
      );
    },
    //错误
    ERROR (res) {
      console.log(res);
    },
  },
  mounted () {
    if (this.articleId !== null) {
      this.flag = "update";
      this.GetArticlesById();
    } else {
      this.flag = "add";
    }
  },
  beforeUnmount () {
    //编辑器销毁
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy();
  },
  props: ["articleId"],
  data () {
    return {
      article: {
        // id: "1",
        // title: "标题",
        // author: "作者",
        // date: "时间",
        // messages: "<p>文章主体</p>",
        // tags: "标签一 标签二",
      },
      flag: "",

      editor: null,
      toolbarConfig: {

      },
      editorConfig: {
        placeholder: "请输入内容...",
      },
      mode: "default", // or 'simple'
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
  height: 700px;
}

/*按钮*/
.button {
  padding-left: 760px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  width: 100%;
}
</style>