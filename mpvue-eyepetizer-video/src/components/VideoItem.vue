<template>
   <div class="cards">
    <div class="card" hover-class="hover" v-for="(item,index) in videoItem" :key="index">
        <video :src="item.playUrl" poster="item.feed" :objectFit="cover" :duration="item.duration_raw" />
        <div class="content">
            <div class="header">{{item.title}}</div>
            <view class="description">{{item.description}}</view>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        videoItem: Array
    },
    created(){
        console.log(this.videoItem);
    }
}
</script>

<style scoped>
    .cards {
    background: #fff;
  }
  
  .card {
    background: #ffffff;
    margin-bottom: 10px;
    padding:20rpx;
    transition: 0.5s all;
    box-shadow:0 0 20rpx #ccc;
    border-radius: 10rpx;
  }
  
  .card.hover {
    box-shadow: 0 70rpx 90rpx rgba(0, 0, 0, 0.06);
  }
  
  .card image {
    position: relative;
  }
  
  .card image,
  .card video {
    height: 36vh;
    width: 100%;
    border-radius: 10rpx;
  }
  
  .card .content {
    height: 18vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content .header{
    font-size: 13pt;
    color: #313131;
  }
  .content .description{
    margin-top: 20rpx;
    font-size: 10pt;
    color: #ccc;
  }
</style>
