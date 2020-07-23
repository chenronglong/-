<template>
	<view>
		<customHead :opacity="true" leftColor="#3F3F3F" @leftClick="leftReihgt()"></customHead>
		 <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item ">
					<image src="/static/img.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item ">
					<image src="/static/img.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item ">
					<image src="/static/img.png"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="boxn">
			<view>
				<text class="tit1">500积分</text>
				<text class="tit2">9.9RMB</text>
			</view>
			<view class="tit3">
				柔软吸水速干大浴巾
			</view>
			<view class="tit4">
				柔软吸水速干大浴巾 条纹洗澡巾裹身巾 70*140cm 香芋色
											
			</view>
			<view class="tit5">注意事项</view>
			<view class="tit6"> 
				1.点击立即兑换，兑换成功后，1~7个工作日内发货。
				2.请您务必核实您的姓名，收货地址联系电话。
			</view>
		</view>
		<view class="but1">立即兑换</view>
	</view>
</template>

<script>
	import customHead from '@/components/customHead/customHead.vue'
	export default {
		components:{
			customHead
		},
	    data() {
	        return {
	            background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500
	        }
	    },
	    methods: {
	        changeIndicatorDots(e) {
	            this.indicatorDots = !this.indicatorDots
	        },
	        changeAutoplay(e) {
	            this.autoplay = !this.autoplay
	        },
	        intervalChange(e) {
	            this.interval = e.target.value
	        },
	        durationChange(e) {
	            this.duration = e.target.value
	        },
			leftReihgt:function(){
				uni.navigateBack({
					delta:1
				})
			}
	    }
	}
</script>

<style>
	.swiper-item{
		height: 100%;
		background-color: #fff;

	}
	.swiper {
		
		margin: 0;
		margin-top: 141upx;
	}
	.tit1{
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(249,75,47,1);
	}
	.tit2{
		font-size:28upx;
		margin-top: 30upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(134,134,134,1);
	}
	.tit3{
		margin-top: 20upx;
	font-size:30upx;
	margin-top: 30upx;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(0,0,0,1);	
	}
	.tit4{
		margin:20upx 0;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(0,0,0,1);
		
	}
	.tit5{
		margin-bottom: 20upx;
		font-size:30upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(0,0,0,1);
	}
	.tit6{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(0,0,0,1);
	}
	.but1{
		background:linear-gradient(-30deg,rgba(255,48,0,1) 0%,rgba(252,95,0,1) 100%);
		border-radius:18px;
		width:202px;
		height:35px;
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:35px ;
		text-align: center;
		margin: auto;
	}
	.boxn{
		margin-top: 50upx;
		padding: 40upx;
	}
</style>
