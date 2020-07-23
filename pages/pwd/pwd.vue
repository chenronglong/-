<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row">
				<text class="title">区号：</text>
				<m-input type="text" clearable v-model="upd.nation" placeholder="请输入国家区号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">手机号：</text>
				<m-input type="text" focus clearable v-model="upd.phone" placeholder="请输入手机号"></m-input>
			</view>
			
			
			<view class="input-row">
				<text class="title">验证码：</text>
				<m-input type="text" clearable v-model="upd.code" placeholder="请输入验证码"></m-input>
				<button type="default" class="yzm" @tap="sendyzm">{{yzmname}}</button>
			</view>
			
			<view class="input-row border">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="upd.password" placeholder="请输入密码"></m-input>
			</view>
			
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="upds">修改密码</button>
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
				upd:{
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
					phone:this.upd.phone,
					nation:this.upd.nation,
					op:'upd'
				}
				if(this.upd.nation==''){
					uni.showToast({
						icon: 'none',
						title: '请输入区号'
					});
					return;
				}
				if (this.upd.phone.length !=11||this.upd.phone.length ==0 ) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
			
				this.$api('/Security/Index/phonecode',option,'post').then(res=>{
				        // 打印调用成功回调
					if(res.code==0){
						this.upd.sid=res.result.sid
					}else{
						this.upd.sid=res.result.sid
						console.log(this.upd.sid);
						uni.showToast({
							icon: 'none',
							title: '请输入正确区号'
						});
						return;
					}
					
				})
			},
			upds() {
				this.upd.password=sha256(this.upd.password);
				this.$api('/User/Api/Passport/resetpwd',this.upd).then(res=>{
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
					
					
		
				
				
				
				
			}
		}
	}
</script>

<style>
	.yzm{
		
	}
</style>
