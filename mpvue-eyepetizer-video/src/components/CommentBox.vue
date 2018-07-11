<template>
  <div class="comment-box">
    <div class="comment-header">
      <div class="comment-header__text">评论</div>
      <div class="comment-header__close" @click="handleClose">×</div>
    </div>
    <comment-list />
  </div>
</template>

<script>
  import CommentList from "@/components/CommentList"
  export default {
    components: {
      CommentList
    },
    methods: {
      handleClose(){
        this.$emit("closeComment",false)
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .comment-box
    display flex
    flex-direction column
    justify-content center
    align-items center
    .comment-header
      width 100%
      height 76rpx
      position relative
      line-height 76rpx
      text-align center
      border-bottom 1rpx solid #dcdcdc
      .comment-header__text
        font-size 11pt
      .comment-header__close
        position absolute
        top 0rpx
        right 40rpx
</style>
