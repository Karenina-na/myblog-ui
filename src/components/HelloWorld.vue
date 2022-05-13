<template>
  <div class="hello">
  </div>
  <div id="aa"
       @click="get()">aaa</div>
</template>

<script>
import Service from '@/network/request.js'

export default {
  name: 'HelloWorld',
  methods: {


    get () {
      const config = {
        method: 'get',
        url: '/articles/1'
      }
      Service(config).then(res => {
        console.log('接受数据')
        console.log(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
