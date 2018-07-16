<template>
  <div class="userPage">
		<div class="userInfo">
			<div class="avatar">
				<open-data type="userAvatarUrl"></open-data>
			</div>
			<div class="nickname">
				<open-data type="userNickName"></open-data>
			</div>
		</div>
		<div class="userOptions">
			<div class="mylikes">我的喜欢</div>
			<div class="mycomments">我的评论</div>
			<div class="myfollows">我的关注</div>
		</div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="stylus" scoped>
	.userPage
		width 100%
		height 100%
		.userInfo
			width 100%
			height 34vh
			display flex
			flex-direction column
			justify-content center
			align-items center
			background #f8f8f8
			.avatar
				width 120rpx
				height 120rpx
				overflow hidden
				border-radius 50%
			.nickname
				margin-top 40rpx
				font-size 12pt
		.userOptions
			width 100%
			display flex
			flex-direction column
			justify-content center
			align-items center
			.mylikes,.mycomments,.myfollows
				margin-top 120rpx
				font-size 12pt
</style>
