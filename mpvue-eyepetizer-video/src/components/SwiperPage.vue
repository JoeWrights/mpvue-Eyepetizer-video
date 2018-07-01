<template>
  <swiper class="swiper-page" :current="currNav">
    <swiper-item v-for="(items,index) in slideList" :key="index">
		<scroll-view scroll-y="true" class="video-list">
			<div v-for="(item,i) in items" :key="i">
		  		<video-item :videoItem="item"/>
	  		</div>
		</scroll-view>
    </swiper-item>
  </swiper>
</template>

<script>
import VideoItem from "@/components/VideoItem";
  import fly from "@/utils/fly";
  export default {
    components: {
		VideoItem
    },
    data() {
      return {
        slideList: []
      }
	},
	created(){
		// console.log(this.slideList);
		fly.get("videodata#!method=get").then(res=>{
			this.slideList=res.data.data.slideList;
			console.log(this.slideList);
		}).catch(e=>{
			console.log(e);
		})
	}
  }

</script>

<style lang="stylus" scoped>
	.swiper-page
		width 100%
		// height 2000rpx
		.video-list
			width 100%
			height 100%
			swiper-item
				width 100%
				height 100%
				border 1px solid #f00
</style>
