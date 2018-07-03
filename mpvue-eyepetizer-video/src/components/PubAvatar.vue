<template>
  <div class="pub-avatar">
    <image :src="pubInfo.icon" mode="aspectFill"/>  
  </div>
</template>

<script>
export default {
  props: {
    pubInfo: Object
  }
};
</script>

<style lang="stylus" scoped>
  .pub-avatar
    width 80rpx
    height 80rpx
    image
      width 80rpx
      height 80rpx
      border 1px solid #dcdcdc
      border-radius 50%
</style>
