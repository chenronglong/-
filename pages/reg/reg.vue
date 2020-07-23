<template>
	<view class="content">
		<view class="input-group">
			<view class="tit1">手机号注册</view>
			<view class="input-row">
				
				<m-input type="text" clearable v-model="register.nation" placeholder="请输入国家区号"></m-input>
			</view>
			<view class="input-row border">
				
				<m-input type="text" focus clearable v-model="register.phone" placeholder="请输入手机号"></m-input>
				<view class="yzm" @tap="sendyzm">{{yzmname}}</view>
			</view>
			
			
			<view class="input-row">
				
				<m-input type="text" clearable v-model="register.code" placeholder="请输入验证码"></m-input>
				
			</view>
			<view class="input-row">
				
				<m-input type="text" clearable v-model="register.refcode" placeholder="请输入邀请码"></m-input>
			</view>
			<view class="input-row border">
			
				<m-input type="password" displayable v-model="register.password" placeholder="请输入密码"></m-input>
			</view>
			
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="registers">用户注册</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';
	const sha256 = require("js-sha256").sha256
	export default {
		components: {
			mInput
		},
		data() {
			return {
				yzmname:"发送验证码",
				register:{
					phone:'',
					sid:'xxx',
					code:'',
					refcode:'',
					password:'',
					nation:'',
				}
			}
		},
		methods: {
			sendyzm(){
				
				var option={
					phone:this.register.phone,
					nation:this.register.nation,
					op:'register'
				}
				if(this.register.nation==''){
					uni.showToast({
						icon: 'none',
						title: '请输入区号'
					});
					return;
				}
				if (this.register.phone.length !=11||this.register.phone.length ==0 ) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
			
				this.$api('/Security/Index/phonecode',option,'post').then(res=>{
				        // 打印调用成功回调
					if(res.code==0){
						this.register.sid=res.result.sid
					}else{
						this.register.sid=res.result.sid
						console.log(this.register.sid);
						uni.showToast({
							icon: 'none',
							title: '请输入正确区号'
						});
						return;
					}
					
				})
			},
			registers() {
				this.register.password=sha256(this.register.password);
				this.$api('/User/Api/Passport/register',this.register).then(res=>{
				        // 打印调用成功回调
						if(res.code==0){
							uni.redirectTo({
							    url: '/pages/login/login'
							});
						}else{
							
							uni.showToast({
								icon: 'none',
								title: '密码太短'
							});
							return;
						}
						console.log(res)
				})
					
					
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				// if (this.account.length < 5) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '账号最短为 5 个字符'
				// 	});
				// 	return;
				// }
				// if (this.password.length < 6) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '密码最短为 6 个字符'
				// 	});
				// 	return;
				// }
				// if (this.email.length < 3 || !~this.email.indexOf('@')) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '邮箱地址不合法'
				// 	});
				// 	return;
				// }

				
				
				
				
			}
		}
	}
</script>

<style scoped>
	.m-input-view{
		padding: 0;
	}
	.primary{
		width:238px;
		height:39px;
		line-height: 39px;
		background:linear-gradient(0deg,rgba(18,222,116,1) 0%,rgba(30,234,129,1) 100%);
		border-radius:20px;
		font-size:11px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	.input-row{
		border-bottom: 1px solid #E7E7E7;
		margin: 26px ;
	}
	.input-row.border::after{
		background-color: #fff;
	}
	.input-group::after{
		background-color: #fff;
	}
	.input-group::before{
		background-color: #fff;
	}
	.tit1{
		font-size:14px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(0,0,0,1);
		margin-left: 25px;
		margin-top: 80px;
		margin-bottom: 60px;
	}
	.yzm{
		width:67px;
		height:18px;
		line-height: 18px;
		text-align: center;
		background:linear-gradient(0deg,rgba(18,222,116,1) 0%,rgba(30,234,129,1) 100%);
		border-radius:9px;
		font-size:8px;
		font-family:PingFang SC;
		font-weight:bold;
		margin-bottom: 5px;
		color:rgba(255,255,255,1);
	}
</style>
