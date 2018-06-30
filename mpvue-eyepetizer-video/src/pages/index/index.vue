<template>
  <div class="container">
    <video id="myVideo" :src="url"></video>
  </div>
</template>

<script>
  import fly from '@/utils/fly'
  export default {
    data() {
      return {
        restaurant: [],
        url: ""
      }
    },

    components: {
      
    },

    methods: {
     
    },
    onLoad() {
      this.getList();
    },
    created() {
      // 调用应用实例的方法获取全局数据

    }
  }

</script>

<style scoped>

</style>
