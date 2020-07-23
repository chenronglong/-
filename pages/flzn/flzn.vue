<template>
	<view class="page_flzn">
		<customHead :opacity="true" leftColor="#3F3F3F" left="分类指南" @leftClick="leftReihgt()"></customHead>
		<!-- <view  class="top_backgroun"></view> -->
		<image src="/static/bj.png" class="top_backgroun"></image>
		<view class="select_root">
					<view class="select_model">
							<image src="/static/soicon.png" class="selIcon"></image>
							<input type="text" class="selInput" placeholder="请输入垃圾名称（材质）"></input>
					</view>
					<view class="tool">
							<view class="w50">
									<view class="flex">
										<image src="../../static/pz.png" class="pz"></image>
										<view class="text">拍照搜索</view>
									</view>
							</view>
							<view class="w50">
									<view class="flex">
										<image src="../../static/ly.png" class="ly"></image>
										<view class="text">语音搜索</view>
									</view>
							</view>
					</view>
		</view>
		<view class="hot">
				<view class="hot_title">热门搜索</view>
				<view>
						<view v-for="item in list" class="tagHot">{{item}}</view>
				</view>
		</view>
		<view class="main">
				<view class="max-title-root">
					<view class="max-title">生活垃圾分类</view>
					<view class="hr"></view>
				</view>
				<view class="garbage">
						<view class="garbage_model">
								<image src="../../static/L1.png" mode="" class="l1"></image>
								<view>可回收物</view>
								<image src="../../static/xiayiye.png" class="gengduo"></image>
						</view>
						<view class="garbage_model">
							<image src="../../static/L2.png" mode="" class="l2"></image>
							<view>有害垃圾</view>
							<image src="../../static/xiayiye.png" class="gengduo"></image>
						</view>
				</view>
				<view class="garbage">
						<view class="garbage_model">
							<image src="../../static/L3.png" mode="" class="l3"></image>
							<view>厨余垃圾</view>
							<image src="../../static/xiayiye.png" class="gengduo"></image>
						</view>
						<view class="garbage_model">
							<image src="../../static/L4.png" mode="" class="l4"></image>
							<view>其他垃圾</view>
							<image src="../../static/xiayiye.png" class="gengduo"></image>
						</view>
				</view>
		</view>
	
	</view>
	
</template>

<script>
	import customHead from '@/components/customHead/customHead.vue';
	export default {
		components:{
			customHead
		},
		data() {
			return {
					list:['塑料袋','鸡蛋壳','粽子叶','塑料包装袋','废电池','过期软面包','果汁']
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

<style scoped>
	.page_flzn{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: #F5F5F5;
		overflow: auto;
	}
.top_backgroun{
	width:100%;
	height:368upx;
	/* background-image: url('/static/bj.png'); */
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.select_root{
	width:684upx;
	height:207upx;
	background:rgba(247,254,250,1);
	box-shadow:6upx 7upx 16upx 0px rgba(0, 0, 0, 0.02);
	border-radius:32upx;
	margin: 0upx auto;
	margin-top: -100upx;
	padding: 32upx 84upx;
	box-sizing: border-box;
	position: relative;
}
.select_model{
	height:55upx;
	background:rgba(185,185,185,0.22);
	width: 100%;
	border-radius:10upx;
	padding:0upx 52upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
.flex{
	display: flex;
	justify-content:center;
}
.selIcon{
	width: 32upx;
	height: 29upx;
}
.selInput{
	height:55upx;
	width: 100%;
	padding-left: 19upx;
	box-sizing: border-box;
	font-size:16upx;
	line-height: initial;
	font-family:PingFang SC;
	font-weight:400;

}
.tool{
	display: flex;
	height: 50upx;
	margin-top: 36upx;
	width: 100%;
}
.w50{
	width: 50%;
	display: flex;
	justify-content:center;
}
.text{
	font-size:24upx;
	font-family:PingFang SC;
	font-weight:500;
	color:rgba(79,79,79,1);
	height: 50upx;
	line-height: 50upx;
}
.pz{
	width: 55upx;
	height: 45upx;
	margin-right: 33upx;
}
.ly{
	width: 32upx;
	height: 46upx;
	margin-right: 24upx;
}
.hot{
	padding-left: 34upx;
	box-sizing: border-box;
	width: 100%;
	margin-top: 26upx;
}
.hot_title{
	font-size:24upx;
	font-family:PingFang SC;
	margin-bottom: 35upx;
	color:rgba(51,51,51,1);
}
.tagHot{
	font-size:18upx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(51,51,51,1);
	padding: 15upx 20upx;
	background:rgba(255,255,255,1);
	box-shadow:6upx 7upx 16upx 0px rgba(0, 0, 0, 0.02);
	border-radius:10upx;
	margin-right: 43upx;
	margin-bottom: 21upx;
	display: inline-block;
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
	color:rgba(51,51,51,1);
	background-color: #FFFFFF;
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
