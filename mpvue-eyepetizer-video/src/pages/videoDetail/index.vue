<template>
  <div class="video-info">
    <image :src="videoInfo.blurred"/>
    <div class="video-play">
      <video :src="videoInfo.playUrl" :poster="videoInfo.feed" 
      :duration="videoInfo.duration" :page-gesture="true" :controls="true" :autoplay="false"/>
      <div class="video-msg">
        <div class="video-msg__title">{{videoInfo.title}}</div>
        <div class="video-msg__cate">{{videoInfo.cate}} / {{videoInfo.duration}}</div>
        <div class="video-msg__desc">{{videoInfo.description}}</div>
        <div class="user-options">
            <div class="comment">
              <comment />
              <div>{{videoInfo.comments}}</div>
            </div>
            <div class="video-collect">
              <video-collect />
              <div>{{videoInfo.collections}}</div>
            </div>
            <div class="video-share">
              <video-share />
              <div>{{videoInfo.shares}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fly from "@/utils/fly";
  import Comment from "@/components/Comment";
  import VideoCollect from "@/components/VideoCollect";
  import VideoShare from "@/components/VideoShare";
  export default {
    data() {
			return {
        videoInfo:[]
			}
    },
    components: {
      Comment,
      VideoCollect,
      VideoShare
    },
    onLoad() {
      let {id}=this.$root.$mp.query;
			console.log(id);
			let currentPage=wx.getStorageSync("currentPage") || 0,
					currentCart=wx.getStorageSync("currentCart") || "homeList";
      wx.showLoading({
        title: "加载中"
      })
      fly.get("videodata#!method=get").then(res=>{
        this.videoInfo=res.data.data.slideList[currentPage][currentCart].filter(item=>item.id==id)[0];
        // console.log(this.videoInfo);
        wx.hideLoading();
      })
    }
  }

</script>

<style lang="stylus" scoped>
  .video-info
    width 100%
    color #fff
    image
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      z-index -1
      background-size cover
      filter blur(6rpx)
    .video-play 
      width 100%
      border-bottom 1rpx solid #cdcdcd
      video 
        width 100%
        height 35vh
      .video-msg
        padding 20rpx
        .video-msg__title
          font-size 14pt
          font-weight bold
        .video-msg__cate
          font-size 10pt
          margin-top 10rpx
        .video-msg__desc
          font-size 10pt
          margin-top 20rpx
        .user-options
          width 80%
          display flex
          flex-direction row
          justify-content flex-start
          align-items center
          margin 30rpx 0 0 20rpx
          .comment,.video-collect,.video-share
            display flex
            flex-direction row
            width 150rpx
          div
            font-size 11pt
            color #fff
            margin-left 10rpx             
</style>
