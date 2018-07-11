<template>
  <div class="related-item" :data-id="relatedVideo.id" @click="showDetail">
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
    },
    methods: {
      showDetail(e){
        const id=e.currentTarget.dataset.id;
        console.log(id);
        wx.navigateTo({
          url: `../videoDetail/main?id=${id}`
        })
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .related-item
    width 100%
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    padding 30rpx 0
    border-bottom 1rpx solid #cdcdcd
    .video-cover
      width 300rpx
      height 15vh
      border-radius 4rpx
      image 
        width 100%
        height 100%
    .video-desc
      width 320rpx
      font-size 11pt
      line-height 50rpx
      color #fff
      .video-desc__meta
        font-size 10pt
</style>
