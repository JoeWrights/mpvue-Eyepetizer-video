<template>
  <div class="related-item">
    <div class="video-cover">
      <image :src="relatedVideo.feed"/>
    </div>
    <div class="video-desc">
      <div class="video-desc__title">{{relatedVideo.title}}</div>
      <div class="video-desc__meta">{{relatedVideo.cate}} / {{relatedVideo.duration}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      relatedVideo: Object
    }
  }

</script>

<style lang="stylus" scoped>
  .related-item
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .video-cover
      width 300rpx
      height 15vh
      image 
        width 100%
        height 100%
    .video-desc
      width 320rpx
</style>
