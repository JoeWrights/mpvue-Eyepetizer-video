<template>
    <scroll-view scroll-x="true" class="tab-list" :scroll-left="scrollLeft">
        <view :class="[tabItem,currNav==index?activeClass:'']" v-for="(item,index) in navItem" :key="index"
        :data-currIndex="index" @click="switchNav(index)">{{item}}
        </view>
    </scroll-view>
</template>

<script>
export default {
    data(){
        return {
            scrollLeft: 0,
            currNav: 0,
            tabItem: "tab-item",
            activeClass: "active",
            navItem:["精选","广告","生活","动画","搞笑","开胃","创意","运动","音乐","萌宠"]
        }
    },
    methods: {
        switchNav(index){
            console.log("a");
            console.log(index);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .tab-list
        width 85%
        height 10vh
        line-height 10vh
        box-sizing border-box
        position fixed
        top 0
        left 0
        z-index 99
        overflow hidden
        white-space nowrap
        
        .tab-item
            transition all .5s
            font-size: 13pt
            font-weight bold
            display inline-block
            padding 10rpx 20rpx
</style>
