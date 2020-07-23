<template>
	<view class="container">
        <view class="c-top">
            <view class="c-left">
                <view class="c-side">黑龙江诺华市王和县</view>
                <view class="c-site">王建县客运站别墅旁边平房</view>
                <view class="c-side">徐春雷 1989384972</view>
            </view>
            <view class="c-right icon-youbian iconfont"></view>
        </view>
        
        <view class="c-time">
            <view class="c-start">
                <text>开始时间</text>
                <view class="c-date-warp">
                    <text class="c-date">2020.07.13</text>
                    <text class="icon-102fangxiang_xiangxia iconfont"></text>
                </view>
            </view>
            <view class="c-start">
                <text>结束时间</text>
                <view class="c-date-warp">
                    <text class="c-date">2020.07.13</text>
                    <text class="icon-102fangxiang_xiangxia iconfont"></text>
                </view>
                
            </view>
        </view>
        
        <view class="discounts">
            <view class="c-sub c-common">
                <image src="../../static/main/yhq2x.png" mode=""></image>
                <text class="c-sub-c">优惠卷满减</text>
                <view class="c-r">
                    <text>- ￥5.00</text>
                    <text class="icon-youbian iconfont"></text>        
                </view>
            </view>
            <view class="c-add c-common">
                <image src="../../static/main/lsnl2x.png" mode=""></image>
                <text class="c-sub-c">绿色能量</text>
                <view class="c-r">
                    <text>预计获得</text>
                    <text>2956g</text>                    
                </view>
            </view>
        </view>
        
        <view class="c-tips">
            
            <view class="c-title">温馨提示</view>
<view class="c-content">
   把垃圾分类纳入社区自治内容，明确主体职责，充分调动公众和管理者的主动性和积极性。公众，包括居(村)民、企事业单位、机团单位，是垃圾分类的行为主体，在享有排放权力的同时，应承担源头减量、分类储存、分类投放和缴纳排放费等责任与义务，履行源头减量与排放控制的监督义务，逐步形成自觉、自愿、主动与合适排放垃圾的生产生活习惯。
</view>            
        </view>
        
        <view class="c-bottom">
            <view class="c-b-wrap">
                <view class="o">共30天</view>
                <view class="t">
                    <text>合计</text>                
                    <text>￥90.00</text>
                </view>
                <button>我要下单</button>
            </view>
        </view>
        
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
    .c-bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100rpx;
        background-color: #FFFFFF;
        justify-content:flex-end;
         display: flex;
        .c-b-wrap{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content:flex-end;
            justify-content: space-around;
            .o{
                font-size: 20rpx;
                color: #949494;
            }
            .t{
                font-size: 30rpx;
                text{
                    &:first-of-type{
                        color: #767676;
                    }
                    &:last-of-type{
                        color: #f74812;
                    }
                }
            }
            button{
                margin: 0;
                margin-right: 40rpx;
                background-image:linear-gradient(-45deg,#FF3000,#FC5F00);
                color: #FFf;
                height: 70rpx;
                line-height: 70rpx;
                width: 200rpx;
                font-size: 28rpx;
                border-radius: 50rpx;
            }
        }
    }
    page{
        background-color: $page-color-base;
    }
    .c-top{
        height: 180rpx;
        display: flex;
        align-items: center;
        padding:20rpx 30rpx;
        background-color: #fff;
        border-radius: 0 0 20rpx 20rpx;
    }
    .c-left{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
    .c-right{
        margin-left: auto;
    }
    .c-side{
        font-size: 24rpx;
    }
    .c-site{
        font-size: 34rpx;
        font-weight: bold;
    }
    .icon-youbian{
        font-size: 40rpx;
    }
    .c-time{
        height: 270rpx;
        background-color: #fff;
        border-radius: 20rpx;
        margin-top: 20rpx;
        font-size: 24rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0 40rpx;
    }
    .c-start{
        display: flex;
        align-items: center;
    }
    .c-date{
        margin-right: 30rpx;
    }
    .c-date-warp{
        border: 1rpx solid #ccc;
        margin-left: 200rpx;
        padding: 10rpx 20rpx;
        border-radius: 10rpx;
    }
    .discounts{
        height: 240rpx;
        background-color: #FFFFFF;
        margin-top: 20rpx;
        border-radius: 20rpx;
         display: flex;
         flex-direction: column;
         justify-content: center;
         padding: 0 40rpx;
        .c-sub{
            margin-bottom: 30rpx;
            image{
                width: 32rpx;
                height: 24rpx;
                margin-right: 40rpx;
            }
        }
        .c-add{
            image{
                width: 28rpx;
                height: 33rpx;
                 margin-right: 40rpx;
            }
        }
    } 
    .c-common{
        display: flex;
        align-items: center;
        padding-bottom: 15rpx;
        border-bottom: 1rpx solid #E7E7E7;
        view{
            margin-left: auto;
        }
    }
    .c-r{
        font-size: 22rpx;
        color: #474747;
        .icon-youbian{
            font-size: 22rpx;
        }
    }
    .c-tips{
        margin-top: 20rpx;
        line-height: 45rpx;
        border-radius: 20rpx;
        padding: 20rpx 40rpx;
        margin-bottom: 60rpx;
        background-color: #FFFFFF;
        .c-title{
            margin:20rpx auto;
            text-align: center;
            font-size: 34rpx;
            font-weight: bold;
        }
        .c-content{
                font-size: 26rpx;
                color: #5E5E5E; 
        }
    }
</style>
