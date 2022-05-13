<template>
  <perfect-scrollbar>
    <ParticleVue>
    </ParticleVue>
    <div class="catalogue">
      <CatalogueUpButton id="UpButton"></CatalogueUpButton>
      <div class="body">
        <div class="right">
          <CatalogueMy></CatalogueMy>
          <CatalogueNotice></CatalogueNotice>
        </div>
        <div class="left">
          <div v-for="article in articles"
               :key="article">
            <CatalogueArticle :article="article"
                              class="article"></CatalogueArticle>
          </div>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script scoped>
// @ is an alias to /src
import ParticleVue from '@/components/common/ParticleVue.vue'
import CatalogueUpButton from '@/components/content/CataloguePage/CatalogueUpButton.vue'
import CatalogueMy from '@/components/content/CataloguePage/CatalogueMy.vue'
import CatalogueArticle from '@/components/content/CataloguePage/CatalogueArticle.vue'
import CatalogueNotice from '@/components/content/CataloguePage/CatalogueNotice.vue'


export default {
  name: 'CataloguePage',
  components: {
    ParticleVue,
    CatalogueUpButton,
    CatalogueMy,
    CatalogueArticle,
    CatalogueNotice
  },
  data () {
    return {
      PageInfo: {
        totalNumber: "10",
        currentPage: "1"
      },
      articles: [
        {
          id: "1",
          title: "标题",
          author: "作者",
          date: "时间",
          body: "文章主体",
          tags: ['标签']
        }
      ],
    }
  }
}
</script>
<style scoped>
/*滚动条配置*/
.ps {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}
.catalogue {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 900px;
  z-index: 100;
}
.left {
  float: left;
}
.right {
  float: right;
}
/*顶部按钮*/
#UpButton {
  position: relative;
  margin: auto;
  text-align: center;
  cursor: pointer;
}
/*文章*/
.article {
  margin-bottom: 20px;
}
</style>
