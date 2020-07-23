<template>
	<view class="content">
		
		<view class="flex mt20">
		
			<image src="/static/my/header.png" class="lg-img1  mt20 db mb-20 " ></image>
			
			<view>
				<view class="ml20">123</view>
				<view class="ml20 ft1">123</view>
			</view>
		</view>
		
		<view class="flex boxa1">
			<view @click="integral">
				<view class="tita1">50</view>
				<view class="tita2">信誉积分</view>
			</view>
			<view>
				<view  class="tita1">50</view>
				<view class="tita2">权益积分</view>
			</view>
			<view>
				<view  class="tita1">50</view>
				<view class="tita2">能量积分</view>
			</view>
		</view>
		<y-gray-bar/>
		<view  class="tita3  mt20 mb-20" >
			全部订单
		</view>
		<view class="flex boxa1">
			<view>
				<view class="tita1">
					<image src="/static/my/img1.png" class="imga1"></image>
				</view>
				<view class="tita4">服务已确认</view>
			</view>
			<view>
					<view class="tita1">
						<image src="/static/my/img2.png" class="imga1"></image>
					</view>
				<view class="tita4">进行中</view>
			</view>
			<view>
					<view class="tita1">
						<image src="/static/my/img3.png" class="imga1"></image>
					</view>
				<view class="tita4">已完成</view>
			</view>
			<view>
				<view class="tita1">
					<image src="/static/my/img4.png" class="imga1"></image>
				</view>
				<view class="tita4">取消/退款</view>
			</view>
		
		</view>
		<view class="boxa3">
			<view class="flex boxa2">
				<view  class="tita6">最新消息</view>
				<view class="tita7">权益积分</view>
			</view>
			<view class="tita8">您订单编号为16563284886513的服务订单已被确认 
			</view>
		</view>
		<y-gray-bar/>
		<view style="margin: 20rpx;">
			<y-right-menu urlpicture="/static/my/yaoqing.png" picshow="true" title="我的邀请" clearable="true"></y-right-menu>
			<view style="margin-top: 20rpx;"></view>
			<y-right-menu urlpicture="/static/my/shezhi.png" picshow="true" title="设置" clearable="true"  @click="bindLogin('/pages/shezhi/shezhi')"></y-right-menu>
		</view>
	<!-- 	<y-right-menu @click="bindLogin"  v-if="!hasLogin" urlpicture="../../static/img/findS.png" picshow="true" title="登录" clearable="true"></y-right-menu>
		
		<y-right-menu @click="bindLogout" v-if="hasLogin" urlpicture="../../static/img/findS.png" picshow="true" title="退出登录" clearable="true"></y-right-menu>
		<y-gray-bar/> -->
		
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
			bindLogin(e) {
				uni.navigateTo({
					url:e,
				});
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
			},
            integral(){
                uni.navigateTo({
                    url:'integral'
                })
            }
		}
	}
</script>

<style>
	.lg-img1{
		width: 100rpx;
		height: 100rpx;
		margin-left: 50upx;
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
		margin:0 50rpx 20rpx 50rpx;

	}
	.boxa2{
		justify-content: space-between;
	}
	.tita3{
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(0,0,0,1);
		margin-left: 50rpx;
	}
	.tita4{
		font-size:16upx;
		font-family:PingFang SC;
		font-weight:400;
		color:#000000;
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
		margin: 40rpx 50rpx 30rpx 50rpx;
		padding: 20upx;
	}
</style>
