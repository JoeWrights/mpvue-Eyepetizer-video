<template>
	<div class="video-collect" @click="videoCollect">
		<image v-if="collected" src="../../static/icons/collected.png"/>
		<image v-else src="../../static/icons/collect.png"/>
	</div>
</template>

<script>
export default {
	data(){
		return {
			collected: false
		}
	},
	methods: {
		videoCollect(){
			this.collected=!this.collected;
		}
	}
}
</script>

<style lang="stylus" scoped>
	.video-collect
		width 44rpx
		height 44rpx
		image
			width 44rpx
			height 44rpx
			display inline-block
</style>
