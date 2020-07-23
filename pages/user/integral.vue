<template>
	<view class="container">
<view class="c-top">
    <view class="c-z">总积分</view>
    <view class="c-z">4,021.25</view>
    <view class="c-c">
        <text>扫码奖励：3,500个</text>
        <text>邀请奖励：521,25</text>
    </view>
</view>		

<view class="c-btn">
    <view>转出</view>
    <view @click="reception">接收</view>
</view>
<view class="content">
    <view class="c-title">最近交易</view>
    
    <view class="c-item">
        <view class="c-left">
            <view>e662654621...daxa8</view>
            <view>07/19/2020</view>
        </view>
        <view class="c-right success">+200</view>
    </view>
    <view class="c-item">
        <view class="c-left">
            <view>e662654621...daxa8</view>
            <view>07/19/2020</view>
        </view>
        <view class="c-right red">+200</view>
    </view>
    
</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
        methods:{
            reception(){
                uni.navigateTo({
                    url:"reception"
                })
            }
        }
	}
</script>

<style lang="scss">
    .success{
        color: #048B85;
    }
    .red{
        color: #E95355;
    }
    .c-item{
        display: flex;
        height: 128rpx;
        align-items: center;
        padding: 20rpx 30rpx;
        box-shadow: 0rpx 0rpx 15rpx 0rpx #e6e6e6;
        border-radius: 10rpx;
        margin-bottom: 20rpx;
        .c-left{
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            view{
                &:first-of-type{
                    font-size: 30rpx;
                }
                &:last-of-type{
                    font-size: 24rpx;
                    color: #7B7B7B;
                }
            }
        }
        .c-right{
            font-size: 34rpx;
            margin-left: auto;
        }
    }
    .content{
        padding: 30rpx;
        margin-top: 50rpx;
    }
    .c-title{
        font-size: 30rpx;
        font-weight: bold;
        margin-bottom: 50rpx;
    }
    .c-btn{
        margin-top: 120rpx;
        display: flex;
        padding: 0 60rpx;
        justify-content: space-around;
        view{
            width: 260rpx;
            height: 70rpx;
            line-height: 70rpx;
            color: #FFFFFF;
            text-align: center;
            border-radius: 30rpx;
            display: flex;
            justify-content: center;
            &:first-of-type{
                background-color: #E95355;
            }
            &:last-of-type{
                background-color: #08BEB4;
            }
        }
    }
    .c-z{
        color: #FFFFFF;
        font-size: 30rpx;
    }
    .c-c{
        height: 166rpx;
        width: 600rpx;
        padding:20rpx 40rpx;
        background-color: #FFFFFF;
        border-radius: 20rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        position: absolute;
        box-shadow: 2rpx 10rpx 15rpx 0 #e4e7ee;
        bottom: -80rpx;
        margin-left: calc(50% - 330rpx);
        font-size: 30rpx;
    }
.c-top{
    height: 360rpx;
    padding: 30rpx;
    background-color: #048C84;
    position: relative;
}
</style>
