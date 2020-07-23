<template>
	<view class="container">
        <view class="c-wrap c-active">
            <view class="c-title">第一步：扫描垃圾桶二维码</view>
            <view :class="[isShow?'c-before':'','c-bg']" @click="scan">
                <image src="../../static/scan/scan_normal@2x.png" mode="aspectFill"></image>
            </view>
        </view>
        <view class="c-site">大连华府1期021号垃圾桶</view>
        <view class="c-title">
            <view>第二步：拍照上传获得更多积分</view>
            <view class="c-sub">照片要包含垃圾桶</view>
        </view>
        <view class="c-bg c-img">
            <image src="../../static/scan/Camera@2x.png" mode="aspectFill" v-if="!isColor"></image>
            <image src="../../static/scan/Camera@2x1.png" mode="aspectFill" v-else></image>
        </view>
        <view class="photograph" @click="photograph">
            <text class="icon-camera_icon iconfont"></text>
            <text>拍照上传</text>
        </view>        
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true,
                isColor:false
			};
		},
        methods:{
            scan(){
                uni.scanCode({
                    onlyFromCamera:true,
                    success(e) {
                        console.log(e)
                        this.isShow=true
                        this.isColor=true
                    },
                    fail() {
                        this.isShow=false
                        uni.showToast({
                            title:'扫码失败',
                            icon:'none'
                        })
                    }
                })
            },
            photograph(){
                uni.chooseImage({
                    count:1,
                    success(e) {
                        console.log(e)
                    }
                })
            }
        },
	}
</script>

<style lang="scss">
.container{
    padding: 30rpx;
    font-size: 30rpx;
    color:#8A8A8A
}
.c-title{
    margin: 40rpx;
}
.c-wrap{
    margin-bottom: 10rpx;
}
.c-bg{
    width: 366rpx;
    height: 260rpx;
    border-radius: 20rpx;
    background-color: #F5F5F5;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    image{
        width: 112rpx;
        height: 112rpx;
    }
}
.c-img{
    image{
        width: 110rpx !important;
        height: 94rpx !important;
    }
}
.c-active{
    color: #0BA29A;
}
.c-before{
    position: relative;
    &::before{
        content: "1";
        text-align: center;
        width: 70rpx;
        height: 70rpx;
        font-size: 40rpx;
        line-height: 70rpx;
        font-weight: bold;
        color: #fff;
        left: -30rpx;
        bottom: 30rpx;
        border-radius: 50%;
        border: 6rpx solid #fff;
        position: absolute;
        box-shadow: 0rpx 10rpx 20rpx 0 #abaeb5;
        background-image: linear-gradient(-40deg,rgb(241,29,29),#e28784);
    }
}
.photograph{
   box-shadow: 5rpx 5rpx 20rpx 0 #eeeeee;
   width: 230rpx;
   height: 69rpx;
   display: flex;
   color: #000;
   align-items: center;
   justify-content: center;
   margin: auto;
   border-radius: 18rpx;
   margin-top: 40rpx;
  }
  .icon-camera_icon{
      font-weight: bold;
      font-size: 40rpx !important;
      margin-right: 20rpx;
      margin-top: 5rpx;
  }
  .c-sub{
      font-size: 18rpx;
      margin-top: 16rpx; 
  }
  .c-site{
      font-size: 24rpx;
      text-align: center;
      margin-top: 40rpx;
  }
</style>
