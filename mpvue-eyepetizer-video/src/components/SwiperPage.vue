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
    components: {
		// VideoItem
		VideoList
    },
    data() {
      return {
		slideList: [],
		index: 0
      }
	},
	methods: {
		switchTab($e){
			console.log($e);
			// this.index=index;
			// Bus.$emit("change",index);
			// console.log(index);
		},
		switchNav($e){
			console.log($e);
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
