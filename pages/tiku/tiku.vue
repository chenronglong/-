<template>
	<view class="container">
		<customHead :opacity="true" leftColor="#3F3F3F" left="每日充充" @leftClick="leftReihgt()"></customHead>
		<view class="top">
			<view class="images">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode="" class="image"></image>
			</view>
			<view class="righttop">
				<text>sunny</text>
				<view class="down">
					<text>本周得分:25</text>
					<view class="downright">
						<text @click="jump('/pages/paihang/paihang')">本周排名:5</text>
						<uni-icons type="forward" size="18"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="paper" @click="jump('/pages/dati/dati')">
			<view class="item">
				试卷A
			</view>
			<view class="item">
				试卷B
			</view>
			<view class="item">
				试卷C
			</view>
			<view class="item">
				试卷D
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
	page {
		background-color: #F5F5F5;
	}
	.top{
		display: flex;
		align-items: center;
		padding: 20px;
		margin-top: 100upx;
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
</style>
