<template>
  <div>
    {{img.name}}
    <img :src="img.name"/>
  </div>
</template>

<script>
export default {
    name:"ImageBody",
    props:['img'],
    method:{
        
    },
}
</script>

<style>

</style>