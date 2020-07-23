<template>
	<view class="content">
		<image src="../../static/bj.png" class="img"></image>
		<view style="padding: 20upx;"></view>
		<view class="flex navbar" style="justify-content: space-between; " >
			
			<view class="navbar-title flex" style="">
					<image src="../../static/dingwei.png"class="box1"></image>
					<input type="text" class="inputpage" placeholder="请填写回收地址"  placeholder-style="color:#fff ;z-index:1111;font-size:16upx;"/>
				</view>
				<view>
					<image src="../../static/xiaoxi.png"class="box2"></image>
			
				</view>
			
		</view>
		<view class="page2 flex">
		
			</view>
		<view class=" m30  mt0 main-cont1" >
			
			
			<view class="main-cont-mided1">
				
			<view class="ke">{{data.total_saving}}g</view>
				
				<view class="fonsize12 mt20">减少排放</view>
			</view>
			<view class="main-cont-mided1">
				
				<view class="ke">{{data.total_user}}名</view>
				
				<view class="fonsize12 mt20">用户参与</view>
			</view>
		
			
		</view>
		
		<view class=" m30  mt0 main-cont" >
			
			
			<view class="main-cont-mided">
				<navigator url="/pages/flzn/flzn" open-type="navigate">
				<image src="../../static/quanyi.png" class="md-img"></image>
				     <view class="fonsize12">分类指南</view>
				</navigator>
				
			</view>
			<view class="main-cont-mided">
			<navigator url="/pages/main/equityExplain" open-type="navigate">
				<image src="../../static/caozuo.png" class="md-img"></image>
				<view class="fonsize12">权益说明</view>
            </navigator>
			</view>
			<view class="main-cont-mided">
				<navigator url="/pages/tiku/tiku" open-type="navigate">
					<image src="../../static/da.png" class="md-img"></image>
					
					<view class="fonsize12">每日充电</view>
				</navigator>
			</view>
			<view class="main-cont-mided">
				
				<navigator url="/pages/agency/agency" open-type="navigate">
					<image src="../../static/laji.png" class="md-img"></image>
					
					<view class="fonsize12">分类代办</view>
				</navigator>
			</view>
			
		</view>
		<view class="ml30 page3">
			<view class="font15">贡献排行</view>
			<view>
				<text style="font-size:14upx;">更多排名</text>
				<image src="../../static/xiayiye.png" class="img1"></image>
			</view>
		</view>
		<view class="ml30  mt20  diflex">
			<view class="left4 ">
				<view class="diflex">
					<view class="rank">周排行版|</view>
					<view class="mont">月排行榜</view>
					<view class="left6">
						街道
						<image src="../../static/jidao.png" style="width: 10upx;height: 10upx;"></image>
					</view>
				</view>
                
                
				<view class="diflex box5 " style="align-items: center;justify-content: space-between;" v-for="(item,index) in data.rank.city" :key="index">
					<view  class="diflex " style="position: relative; align-items: center;justify-content: space-between;">
						<image :src="item.avatar" class="img5"></image>
						<image src="../../static/first.png" class="img6"></image>
						<view class="tang1">{{item.name}}</view>
					</view>
					<view class="ke1">{{item.num}}g</view>
				</view>
                
                
			</view>
			<view class="left5">
				<view class="box7">
					<view class="title5">我的</view>
					<view class="title6">
						<image src="../../static/huanbao.png" class="img8"></image>
						回收领大量积分</view>
				</view>
				<view class="box7 box8" style="">
					<view class="title7">贡献次数：</view>
					<view class="title8">{{data.my_score.green_power}}次</view>
				</view>
				<view class="box7 box8" style="">
					<view class="title7">贡献次数：</view>
					<view class="title8">{{data.my_score.contribute_num}}次</view>
				</view>
			</view>
		</view>
		
		<view class="ml30  mt20">
			<view class="font15">公告信息</view>
			<view class="page7" v-for="(item,index) in data.article" :key="index">
				<view class="row1">
					<image src="../../static/header.jpg" class="img5"></image>
					<text class="tit9">{{item.title}}</text>
				</view>
				<view class="tit10">
					{{item.summary}}
				</view>
				<view class="row2">
					<view class="tit11">
						9897 点赞·539 评论
					</view>
					<view class="tit12">
						...
					</view>
				</view>
			</view>
		</view>
		<!-- <view v-if="hasLogin" class="hello">
			<view class="title">
				您好 {{userName}}，您已成功登录。
			</view>
			<view class="ul">
				<view>这是 uni-app 带登录模板的示例App首页。</view>
				<view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好 游客。
			</view>
			<view class="ul">
				<view>这是 uni-app 带登录模板的示例App首页。</view>
				<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
			</view>
		</view>
	 -->
	
	
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        data(){
            return{
                data:""
            }
        },
		onLoad() {
			// if (!this.hasLogin) {
			// 	uni.showModal({
			// 		title: '未登录',
			// 		content: '您未登录，需要登录后才能继续',
			// 		/**
			// 		 * 如果需要强制登录，不显示取消按钮
			// 		 */
			// 		showCancel: !this.forcedLogin,
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				/**
			// 				 * 如果需要强制登录，使用reLaunch方式
			// 				 */
			// 				if (this.forcedLogin) {
			// 					uni.reLaunch({
			// 						url: '../login/login'
			// 					});
			// 				} else {
			// 					uni.navigateTo({
			// 						url: '../login/login'
			// 					});
			// 				}
			// 			}
			// 		}
			// 	});
			// },
            
            this.$api('/Gc/Api/User/home').then(e=>{
                this.data=e.result
                console.log(this.data)
            })
            
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.box1{
	 width: 20upx; height: 30upx; vertical-align: middle;
	}
	.box2{
		width: 15px; height:12px; vertical-align: middle;
	}
	.row1{
		display: flex;
		align-items: center;
	}
	.row2{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tit11{
		font-size:16upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(116,116,116,1);
		line-height:22upx;
	}
	.tit12{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(116,116,116,1);
		line-height:22upx;
		
	}
	.tit10{
		font-size:20upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(77,77,77,1);
		line-height:26upx;
		padding: 20rpx 0;
	}
	.tit9{
		font-size:20upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(77,77,77,1);
		margin-left: 20rpx;
	}
	.page7{
		background:rgba(252,254,253,1);
		box-shadow:2px 3px 7px 0px rgba(0, 0, 0, 0.02);
		border-radius:8upx;
		padding: 20rpx;
		height:89px;
		margin: 20rpx 20rpx  20rpx 0rpx ;
	}
	.title7{
		font-size:16upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(77,77,77,1);
	}
	.title8{
		font-size:18upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(2,173,111,1);
	}
	.img8{
		width: 20upx;
		height: 20upx;
	}
	.title5{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(77,77,77,1);
	}
	.title6{
		font-size:12upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(2,173,111,1);
	}
	.font15{
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.img6{
		width: 20upx;
		height: 24upx;
		position: absolute;
		top: 3px;
		right: 19px;
	}
	.box5{
		padding-bottom: 20rpx;
		border-bottom: 1px solid #eee;
	}
	.ke1{
		
		color:rgba(2,173,111,1);
		font-size:18upx;
	}
	.mont{
		
	
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(77,77,77,1);
	}
	.tang1{
		font-size:18upx;
		color:rgba(77,77,77,1);
		margin-left: 10rpx;
	}
	.page7{
		position: relative;
	}
	.img5{
		width:60upx;
		height:30px;
		border-radius:2upx;
		margin-top: 10upx;
	}
	.left6{
		border:1px solid rgba(2,173,111,1);
		opacity:0.25;
		color:rgba(2,173,111,1);
		border-radius:2px;
		font-size:12upx;
		height:24upx;
		line-height: 24upx;
		float: right;
		position: absolute;
		right: 10rpx;
		padding:5rpx;
		
	}
	.diflex{
		display: flex;
	}
	.left4{
		position: relative;
		background-color: rgba(252,254,253,1);
		border-radius:8upx;
		margin-right: 20rpx;
		width:60%;
		padding: 24upx;
		
	}
	input{
		color: #fff;
	}
	.left5{
		background:rgba(252,254,253,1);
		border-radius:8upx;
		width:30%;
		padding: 24upx;
		margin-right: 30rpx;
		
	}
	.box8{
		border-bottom: 1px solid #eee;
		padding: 30rpx 0;
	}
	
	.box7{
	display: flex;
	justify-content: space-between;	
	}
	.page3{
		display: flex;
		justify-content: space-between;
		margin-right: 30upx;
		
	}
	.rank{
	color: #02AD6F;	
		font-size:24upx;
	}
	.img1{
		width: 12upx;
		height: 20upx;
		margin-left: 10rpx;
		
	}
	.img{
		height:332upx;
		width:100%;
		position: absolute;
	}
	.page2{
		margin: 40upx 80upx;
		
		margin-top: -46upx;

		
	}
	.navbar{
		width:550upx;
		height:23upx;
		background:rgba(1,60,39,1);
		opacity:0.8;
		border-radius:12px;
		
		margin: auto;
		margin-top: 20rpx;
	}
	.inputpage{
		margin-left: 20rpx;
	}
	.ke{
		color: #14b379;
	}
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #f5f5f5;
		min-height: 100%;
		height: auto;
		color: #333;
	}
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
	.main-cont{
		background-color: #fff;
		border-radius: 8px;
		padding-bottom: 20px;
		margin-top: 10px;
	}
	.main-cont1{
	background-image: url('../../static/矢量智能对象 拷贝 9@3x.png');
	border-radius: 16upx;
	background-repeat:no-repeat; background-size:99% 100%;
		padding-bottom: 40upx;
		margin-top:140upx;	
		position: relative;
		z-index: 9999;
		background-color: #fff;
	}
	.main-cont-mided1{
			text-align: center;
			width: 50%;
			display: inline-block;
			margin-top: 30upx;
	}
</style>
