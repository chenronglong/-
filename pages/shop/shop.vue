<template>
	<view class="container">
	<!-- 	<custom-head>
			<view slot="left">《环保商城</view>
			<view slot="middle"></view>
			<view slot="right">
			</view>
		</custom-head> -->
		<view class="top">
		
			<image class="img" src="../../static/ellipse.png" mode=""></image>
			
			<view class="left">
				<view class="integral">6758</view>
				<view class="describe">当前可用积分</view>
				<view class="getIntegral">如何获取积分？</view>
			</view>
			<view class="right">
				<image src="../../static/bill.png" mode=""></image>
				<text>账单</text>
			</view>
		</view>
		<view class="middle">
			<view class="num">兑换实物</view>
			<view>兑换优惠</view>
		</view>
		<view class="bottom">
			<view class="item" v-for="(item,index) in commoditys" :key="index" @click="jump()">
				<image :src="item.img" mode="aspectFill"></image>
				<view class="size">
					<view class="describe">{{item.describe}}</view>
					<view class="property">
						<view>
							<text class="num">{{item.integral}}</text>
							积分
						</view>
						<view>{{item.rmb}}RMB</view>
						<view>{{item.peopleNum}}人兑换</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import customHead from '@/components/customHead/customHead.vue'
	export default {
		data() {
			return {
				commoditys:[
					{
						id:0,
						img:"../../static/commodity/commodity2.png",
						describe:"柔软吸水速干大浴巾 条纹洗澡巾7*140cm",
						integral:500,
						rmb:9.9,
						peopleNum:13892
					},
					{
						id:0,
						img:"../../static/commodity/commodity1.png",
						describe:"华为充电宝/移动电源 22.5w 4.5V 快充版",
						integral:600,
						rmb:979,
						peopleNum:936
					},
					{
						id:0,
						img:"../../static/commodity/commodity3.png",
						describe:"Apple AirPods 配充电盒",
						integral:1350,
						rmb:299,
						peopleNum:131
					},
					{
						id:0,
						img:"../../static/commodity/commodity4.png",
						describe:"华为手环3 Pro 曜石黑m",
						integral:300,
						rmb:99,
						peopleNum:1688
					},
				]
			};
		},
		components:{
			customHead
		},
		methods:{
			jump(){
				uni.navigateTo({
					url:'/pages/shopdetail/shopdetail'
				})
			}
		}
	}
</script>

<style lang="scss">
	

	.top {
		height: 450rpx;
		
		background-image: url(/static/ellipse.png);
		
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		text-align: center;
		color: #fff;

		.left {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			align-self: flex-end;
			margin-bottom: 60rpx;
			.integral {
				font-size: 50rpx;
				font-weight: bold;
			}

			.describe {
				font-size: 45rpx;
			}

			.getIntegral {
				font-size: 30rpx;
				border: 2rpx solid #fff;
				width: 217rpx;
				height: 49rpx;
				padding: 13rpx 30rpx;
				border-radius: 50rpx;
				margin-top: 20rpx;
			}
		}

		.right {
			width: 180rpx;
			line-height: 75rpx;
			background-color: #1C6FE2;
			border-radius: 60rpx;
			font-size: 30rpx;
			align-self: flex-end;
			margin: 0 60rpx 150rpx 0;

			image {
				width: 34rpx;
				height: 36rpx;
				vertical-align: middle;
				margin-right: 10rpx;
			}
		}
	}

	.middle {
		margin: 20rpx 0;
		background-color: #fff;
		display: flex;
		padding: 12rpx 0;
		font-size: 30rpx;

		view {
			flex: 1;

			&:first-of-type {
				text-align: right;
				padding-right: 40rpx;
			}

			&:last-of-type {
				padding-left: 40rpx;
			}
		}
	}

.bottom{
	padding-top:10rpx;
	background-color: #fff;
	.item {
		height: 200rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #eee;
		padding: 0 20rpx;
		image {
			width: 180rpx;
			height: 180rpx;
			flex-shrink: 0;
			margin-right: 10rpx;
		}
	}
}
.size {
		font-weight: bold;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		width: 100%;
		height: 100%;
		.describe {
			// white-space: nowrap;
			// text-overflow: ellipsis;
			// overflow: hidden;
		}

		.property {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			view{
				&:nth-of-type(2){
					margin-left: 40rpx;
					font-size: 28rpx;
					font-weight: normal;
					color: #969696;
				}
				&:last-of-type{
					font-size: 22rpx;
					font-weight: normal;
					color: #969696;
					margin-left: auto;
				}
			}
		}
	}
	.num{
		color: #F94B2F;
	}
	 
	.img{
		position: absolute;
		z-index: -10;
		width: 100%;
		height: 450rpx;
	}
	
</style>
