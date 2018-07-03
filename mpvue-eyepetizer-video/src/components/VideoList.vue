<template>
  <div class="video-list">
    <video-item v-for="(item,index) in videoList" :key="index" :videoItem="item" />
  </div>
</template>

<script>
  import VideoItem from "@/components/VideoItem";
  export default {
    components: {
      VideoItem
    },
    props: {
      videoList: Array
    },
    created() {
      console.log(this.videoList);
    }
  }

</script>

<style lang="stylus" scoped>
	.video-list
		width 100%
		height 100%
		display flex
		flex-direction column
		align-items center
</style>
