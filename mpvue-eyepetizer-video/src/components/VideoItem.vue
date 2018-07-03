<template>
  <div class="cards">
    <div class="card" hover-class="hover" v-for="(item,index) in videoItem" :key="index">
      <!-- <video :src="item.playUrl" poster="item.feed" :objectFit="cover" :duration="item.duration_raw" /> -->
      <image :src="item.feed" mode="aspectFill">
				<div class="label">{{item.duration}}</div>
			</image>
			<div class="top-list">
				<pub-avatar :pubInfo="item.author"/>
				<!-- <div class="content">
					<div class="header">{{item.title}}</div>
					<div class="description">{{item.description}}</div>
				</div> -->
				<div class="header">
					<div class="title">{{item.title}}</div>
					<div class="publisher">{{item.author.name}} / {{item.cate}}</div>
				</div>
				<div class="operation">
					<video-collect />
					<comment />
					<video-share />
				</div>
				
			</div>
			<div class="description">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
import PubAvatar from "@/components/PubAvatar";
import VideoCollect from "@/components/VideoCollect";
import Comment from "@/components/Comment";
import VideoShare from "@/components/VideoShare";
export default {
	components: {
		PubAvatar,
		VideoCollect,
		Comment,
		VideoShare
	},
  props: {
    videoItem: Array
  },
  created() {
    // console.log(this.videoItem);
    console.log(this.videoItem);
  }
};
</script>

<style lang="stylus" scoped>
	.cards
		background #fff
		.card
			// position relative
			background #fff
			margin-bottom 20rpx
			padding 20rpx
			transition 0.5s all
			border-bottom 1px solid #dcdcdc
			&.hover
				box-shadow: 0 70rpx 90rpx rgba(0, 0, 0, 0.06)
			image
				width 100%
				height 38vh
				position relative
				border-radius 10rpx
			.label
				position absolute
				right 25rpx
				bottom 22rpx
				padding 5rpx 20rpx
				font-size 10pt
				color #fff
				background rgba(0,0,0,0.5)
				border-radius 15rpx
			.top-list
				display flex
				flex-direction row
				// justify-content space-around
				align-items center
				.header
					width 430rpx
					padding 0 0 0 30rpx
					.title
						font-size 12pt
						font-weight bold
						margin 14rpx 0 8rpx 0
					.publisher
						font-size 10pt
						color #ccc
				.operation
					width 160rpx
					display flex
					flex-direction row
					justify-content space-between
					align-items center
			.description
				font-size 10pt
				color #333
</style>
