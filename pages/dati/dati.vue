<template>
	<view class="container">
		<customHead :opacity="true" leftColor="#3F3F3F" left="开始答题" @leftClick="leftReihgt()"></customHead>
		<view class="top">
			<view><text class="titb2">02</text><text class="titb1">/10</text></view>
		</view>
		<view class="max-title-root">
			<view class="max-title">生活垃圾分类</view>
			
		</view>
		<view class="main" @click="jump('/pages/answerresult/answerresult')">
				
				<view class="garbage">
						<view class="garbage_model">
								<image src="/static/L1.png" mode="" class="l1"></image>
								<view>可回收物</view>
							
						</view>
						<view class="garbage_model">
							<image src="/static/L2.png" mode="" class="l2"></image>
							<view>有害垃圾</view>
							
						</view>
				</view>
				<view class="garbage">
						<view class="garbage_model">
							<image src="../../static/L3.png" mode="" class="l3"></image>
							<view>厨余垃圾</view>
							
						</view>
						<view class="garbage_model">
							<image src="../../static/L4.png" mode="" class="l4"></image>
							<view>其他垃圾</view>
							
						</view>
				</view>
		</view>
			
	</view>
</template>

<script>
		import customHead from '@/components/customHead/customHead.vue';
	export default {
		components: {
			customHead
		},
		data() {
			return {
				item: [],
				values: [],
				je: '',
				value: null,
			}
		},
		methods: {
			jump(e){
				uni.navigateTo({
					url:e
				})
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
	.titb1{
		color: #999;
	}
	page {
		background-color: #F5F5F5;
	}
	.top{
		
		
		padding: 20px;
		margin-top: 100upx;
		text-align: right;
	}
	.righttop{
		display: flex;
		flex-direction: column;
		font-size: 14px;
		width: 100%;
	}
	.images{
		display: flex;align-items: center;
	}
	.image {
		width: 50px;
		height: 50px;
		margin-right:10px;
	}
    .down{
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}
	.downright {
		display: flex;
		align-items: center;
	}
	.downright text{
		margin-right: 10px;
	}
	.paper{
		margin-top: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20px;
	}
	.item{
		background: #fff;
		width: 45%;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		margin: 18rpx;
		border-radius: 10px;
	}
	.main{
		width:684upx;
		height:570upx;
		background:rgba(255,255,255,1);
		box-shadow:6upx 7upx 16upx 0px rgba(0, 0, 0, 0.02);
		border-radius:32upx;
		margin: 20upx auto;
		padding: 56upx 28upx;
		box-sizing: border-box;
	}
	.max-title-root{
		text-align: center;
		margin-bottom: 40upx;
	}
	.max-title{
		font-size:32upx;
		font-family:PingFang SC;
		text-align: center;
		color:rgba(0,0,0,1);
		
		padding:0upx 20upx;
		box-sizing: border-box;
		display: inline-block;
		margin: 0px auto;
	}
	.hr{
		height:2upx;
		background:#0177FE;
		width: 428upx;
		display: block;
		margin: 0px auto;
		margin-top: -20upx;
	}
	.garbage{
		display: flex;
		justify-content:space-around;
	}
	.garbage_model{
		width:269upx;
		height:118upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 7upx 1upx rgba(0, 0, 0, 0.09);
		border-radius:10upx;
		margin: 40upx 0upx;
		display: flex;
		align-items: center;
		padding: 0upx 15upx;
		box-sizing: border-box;
	}
	.l1{
		width: 71upx;
		height: 76upx;
	}
	.l2{
		width: 62upx;
		height: 62upx;
	}
	.l3{
		width: 65upx;
		height: 65upx;
	}
	.l4{
		width: 64upx;
		height: 72upx;
	}
	.garbage_model view{
		font-size:32upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-left: 20upx;
	}
	.gengduo{
		width:13upx;
		height:24upx;
		margin-left:10upx;
		opacity: 0.5;
	}
</style>
