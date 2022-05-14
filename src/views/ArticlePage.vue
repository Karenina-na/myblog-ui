<template>
  <perfect-scrollbar>
    <VantaVueGlobe></VantaVueGlobe>
    <UpSelect id="UpSelect"></UpSelect>
    <div class="article">
      <div>
        <ArticleBody id="ArticleBody"
                     :article="article"></ArticleBody>
      </div>
      <div class='foot'>
        <CriminalRecord id="CriminalRecord"></CriminalRecord>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
// @ is an alias to /src

import VantaVueGlobe from '@/components/common/VantaVueGlobe.vue'
import UpSelect from '@/components/content/ArticlePage/UpSelect.vue'
import ArticleBody from '@/components/content/ArticlePage/ArticleBody.vue'
import CriminalRecord from '@/components/content/CriminalRecord.vue'
import { SelectArticleById } from '@/network/Select.js'

export default {
  name: 'ArticlePage',
  components: {
    VantaVueGlobe,
    UpSelect,
    ArticleBody,
    CriminalRecord
  },
  mounted () {
    this.GetArticlesById()
  },
  methods: {
    //文章查找
    GetArticlesById () {
      // let id = sessionStorage.getItem("id");
      let id = this.$store.getters.getArticleId;
      SelectArticleById(id).then(res => {
        if (res.code === 20042) {
          this.article = res.data;
        }
        else {
          this.ERROR(res)
        }
      }, err => {
        this.ERROR(err);
      })
    },
    //抛出异常
    ERROR (Message) {
      console.log(Message)
    }
  },
  data () {
    return {
      article: {
        // id: "1",
        // title: "标题",
        // author: "作者",
        // date: "时间",
        // body: "文章主体",
        // tags: ['标签']
      }
    }
  }
}
</script>
<style scoped>
@import url("@/assets/css/ArticlePage/ArticleBody.css");
@import url("@/assets/css/ArticlePage/UpSelect.css");

/*顶部框*/
#UpSelect {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 100;

  -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/*文章主体*/
.article {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 850px;
  z-index: 100;

  -webkit-animation: scale-in-hor-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-hor-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*滚动条样式*/
.ps {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}

/*末尾*/
.foot {
  height: 50px;
  width: 100%;
  text-align: center;
}
#CriminalRecord {
  color: white;
  padding-top: 30px;
}
</style>