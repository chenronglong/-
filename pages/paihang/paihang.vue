<template>
	<view class="container">
		<customHead :opacity="true" leftColor="#3F3F3F" left="答题达人" @leftClick="leftReihgt()"></customHead>
		<view class="top1">本周排行TOP 20</view>
		<view class="top" v-for="num in 10">
			<view>
				<image src="/static/first.png" mode="" class="image1"></image>
			</view>
			<view class="images">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="" class="image"></image>
			</view>
			<view class="righttop">
			
				<view class="down">
					<text>北风</text>
					<view class="downright">
						<text>19分</text>
						<uni-icons type="forward" size="18"></uni-icons>
					</view>
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
			leftReihgt:function(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}
	.top1{
		width:202px;
		height:28px;
		background:linear-gradient(-30deg,rgba(76,184,252,1) 0%,rgba(40,166,255,1) 100%);
		box-shadow:0px 4px 7px 0px rgba(29,85,120,0.13);
		border-radius:5px;
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		margin: auto;
		margin-top: 185rpx;
		text-align: center;
		line-height: 28px;
	}
	.top{
		display: flex;
		align-items: center;
		margin: 20px;
		border-bottom: 1px solid #E7E7E7;
		padding-bottom: 20upx;
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
		width: 40px;
		height: 40px;
		margin-right:10px;
	}
	.image1 {
		width: 10px;
		height: 15px;
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
</style>
