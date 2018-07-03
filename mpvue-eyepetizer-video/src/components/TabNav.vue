<template>
    <div class="tab-nav">
        <scroll-view scroll-x="true" class="tab-list" :scroll-left="scrollLeft">
            <view :class="[tabItem,currNav==index?activeClass:'']" v-for="(item,index) in navItem" :key="index"
            :data-currIndex="index" @click="switchNav(index)">{{item}}
            </view>
        </scroll-view>
    </div>
    
</template>

<script>
import Bus from "@/assets/eventBus";
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
            Bus.$emit("click",index);
            this.currNav=index;
        }
    },
    mounted(){
        const that=this;
		Bus.$on("change",(currNav)=>{
			that.currNav=currNav;
			console.log(that.currNav);
		})
    }
}
</script>

<style lang="stylus" scoped>
    .tab-nav
        width 100%
        height 10vh
        background #fff
        .tab-list
            width 100%
            height 10vh
            line-height 10vh
            box-sizing border-box
            position fixed
            top 0
            left 0
            z-index 99
            overflow hidden
            white-space nowrap
            background #fff
            .tab-item
                transition all .5s
                font-size: 13pt
                font-weight bold
                color #888
                display inline-block
                padding 10rpx 20rpx
                &.active
                    color #000
                    position relative
                &.active:after
                    content ""
                    display block
                    height 8rpx
                    width 40rpx
                    background #000
                    position absolute
                    bottom 25rpx
                    left 30rpx
</style>
