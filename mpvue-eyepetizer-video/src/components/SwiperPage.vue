<template>
  <swiper class="swiper-page" :current="index" @change="switchTab($event)">
    <swiper-item v-for="(items,index) in slideList" :key="index" style="height:100%;">
		<scroll-view scroll-y="true" class="scroll-list">
			<!-- <div v-for="(item,i) in items" :key="i">
		  		<video-item :videoItem="item"/>
	  		</div> -->
			<video-list :videoList="items"/>
		</scroll-view>
    </swiper-item>
  </swiper>
</template>

<script>
  import Bus from "@/assets/eventBus";
//   import VideoItem from "@/components/VideoItem";
  import VideoList from "@/components/VideoList";
  import fly from "@/utils/fly";
  export default {
		props: {
			slideList:Array
		},
    components: {
		// VideoItem
		VideoList
    },
    data() {
      return {
				// slideList: [],
				index: 0
      }
	},
	methods: {
		switchTab($e){
			console.log($e);
			this.index=$e.target.current;
			wx.setStorageSync("currentPage",this.index);
			wx.setStorageSync("currentCart",Object.keys(this.slideList[this.index])[0]);
			Bus.$emit("change",this.index);
			console.log(this.index);
		},
		switchNav($e){
			console.log($e);
		}
	},
	
	mounted(){
		const that=this;
		Bus.$on("click",(index)=>{
			that.index=index;
			console.log(this.index);
		})
	}
  }

</script>

<style lang="stylus" scoped>
	.swiper-page
		width 100%
		height 100vh
		.scroll-list
			width 100%
			height 100%
		swiper-item
			width 100%
			height 100%
			// border 1px solid #f00
</style>
