<template>
	<view class="container">
		<customHead :opacity="true" leftColor="#3F3F3F" left="开始答题" @leftClick="leftReihgt()"></customHead>
		<view class="top">
			<text  style="display: inline-block; margin-right: 50rpx;" ><text class="titb2">得分</text><text class="titb1">: 8分</text></text>
			<text><text class="titb2">积分</text><text class="titb1">: 25</text></text>
		</view>
		<view class="boab1">
			<view class="boxb2">
			<view>题目</view>
			<view>我的答案</view>
			<view>正确答案</view>
			</view>
			
			
			<view v-for="nun in 9">
			<view class="boxb3" >
				<view>
					<image src="/static/L3.png" class="l3"></image>
					腐竹
				</view>
				<view>干垃圾</view>
				<view>湿垃圾</view>
			</view>
			<view class="xian"></view>
			</view>	
		</view>
		<view class="flex boxa6">
			<view class="boxb5 " style="margin-right: 30rpx;">
				<image src="/static/again.png" class="fei"></image>
				再考一次</view>
			<view class="boxb5">
				<image src="/static/fly.png" class="fei"></image>
				考考别人</view>
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

<style >
	.boxa6{
		text-align: center;
		margin: auto;
		justify-content: center;
	}
	.fei{
		width: 32upx;
		margin-right: 20rpx;
		height: 32upx;
	}
	.boxb5{
		width:123px;
		height:41px;
		background:rgba(255,255,255,1);
		box-shadow:3px 3px 7px 0px rgba(0, 0, 0, 0.02);
		border-radius:20px;
		line-height: 41px;
		text-align: center;
		font-size:14px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(2,173,111,1);
	}
	.l3{
		width:24upx;
		height:24upx;
		display: flex;
		display: inline-block;
		margin: 0 20rpx;
	}
	.xian{
		border-bottom:1px solid #E7E7E7 ;
		margin: 15rpx 20rpx 15rpx 70rpx;

	}
	.boxb4{
		display: inline-block;
	}
	.boxb3{
		display: flex;
		justify-content: space-between;
		font-size: 22upx;
		padding-right: 30rpx;
		padding-left: 10rpx;
	}
	.boxb2{
		display: flex;
		justify-content: space-between;
		padding: 20upx 40upx;
		font-size:30upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(0,0,0,1);
	}
	.boab1{
		background:rgba(255,255,255,1);
		box-shadow:3px 3px 7px 0px rgba(0, 0, 0, 0.02);
		border-radius:15px;
		margin: 30rpx 50rpx;
		padding-bottom: 25rpx;

	}
	.titb1{
		color: #02AD6F;
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
	
</style>
