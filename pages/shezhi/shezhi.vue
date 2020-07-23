<template>
	<view class="content">
		<customHead  leftColor="#3F3F3F" left="设置" @leftClick="leftReihgt()"></customHead>
		<y-right-menu title="设置登陆密码" clearable="true"></y-right-menu>
		<y-right-menu  title="设置区块链密码" clearable="true"></y-right-menu>
		<y-right-menu  title="绑定小区" clearable="true"></y-right-menu>
	
		
	</view>
</template>

<script>
	import yNavBar from '@/components/y-nav-bar/y-nav-bar.vue'
	import yRrightMmenu from '@/components/y-right-menu/y-right-menu.vue'
	import yGrayBar from '@/components/y-gray-bar/y-gray-bar.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		
		components: {
			yRrightMmenu,
			yGrayBar,
			yNavBar
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin','userName'])
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				console.log(1)
				uni.navigateTo({
					url: '../login/login',
				});
			},
			leftReihgt:function(){
				uni.navigateBack({
					delta:1
				})
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: rgba(245,245,245,1);
	}
	.lg-img1{
		width: 100rpx;
		height: 100rpx;
	}
	.ft1{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(146,146,146,1);
	}
	.tita1{
		font-size:30upx;
		font-family:DIN;
		font-weight:500;
		color:rgba(0,0,0,1);
		text-align: center;
	}
	.tita2{
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(0,0,0,1);
		text-align: center;
	}
	.boxa1{
		justify-content: space-between;
		margin:0 30rpx 20rpx 30rpx;

	}
	.boxa2{
		justify-content: space-between;
	}
	.tita3{
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(0,0,0,1);
	}
	.tita4{
		font-size:16upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(181,107,241,1);
		text-align: center;
	}
	.imga1{
		width: 60upx;
		height: 60upx;
	}
	.tita6{
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(0,0,0,1);
	}
	.tita7{
		font-size:16upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(131,131,131,1);
	}
	.tita8{
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(106,106,106,1);
		margin-top: 30upx;
	}
	.boxa3{
		background:rgba(245,245,245,1);
		border-radius:5px;
		margin: 0 30rpx 30rpx 30rpx;
		padding: 20upx;
	}
</style>
