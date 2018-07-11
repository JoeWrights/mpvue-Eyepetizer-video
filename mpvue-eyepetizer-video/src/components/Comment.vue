<template>
  <div class="comment" @click="clickComment">
    <image src="../../static/icons/comment.png"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showComment: true
    }
  },
  methods: {
    clickComment(){
      this.$emit("showComments",this.showComment);
    }
  }
};
</script>

<style lang="stylus" scoped>
  .comment
    width 44rpx
    height 44rpx
    image
      width 100%
      height 100%
</style>
