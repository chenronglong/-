<template>
	<view>
	<view class="d-content" :style="{backgroundColor:getColor}">
		<view class="d-left" :style="{color:leftColor}" @click="leftClick">
			<text class="icon-fanhui-copy-copy iconfont"></text>
			<slot name="left">
				{{left}}
			</slot>
		</view>
		<view class="d-middle" :style="{color:titleColor}" @click="middleClick">
			<view class="search" style="height: 60rpx;" v-if="isSearch">
				<view  class="icon-sousuo iconfont"></view>
				<input disabled type="text" value="" placeholder="请输入要搜索的内容" placeholder-style="fontSize:28rpx"/>
			</view>
			<view style="text-align: center;" v-else>{{title}}</view>
		</view>
		<view class="d-right" :style="{color:rightColor}" @click="rightClick">
			<slot name="right">{{getRight}}</slot>
		</view>
	</view>
	<view class="virtual" v-if="opacity==false"></view>
	</view>
</template>

<script>
	/**
	 * 
	 * @description 自定义导航栏
	 * 
	 * @property {boolean} opacity 导航是否透明
	 * @property {boolean} search 是否显示搜索
	 * @property {String} bgcColor 导航背景颜色
	 * @property {String} leftColor 左边文字颜色
	 * @property {String} titleColor title文字颜色
	 * @property {String} rightColor 右边文字颜色
	 * @property {String} left 左边文字
	 * @property {String} right 右边文字
	 * 
	 * @event {Function} leftClick 左侧按钮点击时触发
	 * @event {Function} middleClick 中侧按钮点击时触发
	 * @event {Function} rightClick 右侧按钮点击时触发
	 */
	export default {
		props: {
			bgcColor: {
				type: String,
				default: "#3797fd"
			},
			leftColor: {
				type: String,
				default: "#fff"
			},
			titleColor: {
				type: String,
				default: "#fff"
			},
			rightColor: {
				type: String,
				default: "#fff"
			},
			left: {
				type: String,
				default: ""
			},
			title: {
				type: String,
				default: ""
			},
			right: {
				type: String,
				default: ""
			},
			opacity: {
				type: Boolean,
				default: false
			},
			search:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {};
		},
		computed: {
			getColor() {
				if (this.opacity) {
					return 'transparent'
				}
				return this.bgcColor
			},
			getRight() {
				if (wx.getUpdateManager) {
					return ""
				}
				return this.right
			},
			isSearch(){
				if(this.search){
					return true
				}
				return false
			}
		},
		methods:{
			leftClick(){
				this.$emit('leftClick')
			},
			middleClick(){
				this.$emit('middleClick')
			},
			rightClick(){
				this.$emit('rightClick')
			}
		}
	}
</script>

<style scoped lang="scss">
	@font-face {font-family: "iconfont";
	  src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANAAAsAAAAABxwAAALxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCfgqCAIFxATYCJAMMCwgABCAFhG0HQxs8BsgOJaHAwADAAABgPDx/+Dv3vdsYk+bENfjTx7BtERRpQBHkW+D/n131p6uXjva9ipZyVU+PqrnCgdnK4VEZEYkZHF14NwYcM12K5wHNpTIoORJwggOLDrJ/kBf1H8auWioPaTeBbvOiGC5LqprAWcKDAvEsCv3gXPBLaaY6hfaGmQnxBg46y2HuCYBX9fvxDwnhDIq2Cnhk47Z4CPK+4HOgWfssdAkCCJazwpxHxQaQRLPR3oCS+Aak24/zFsCxOgVfYbfzRfzHExJFEO2AM3vBCkoUvjB+pggofOKdKmhH4hp4gNWjU08tk/4eHhPPXrW+fNny/HnTixfNR1/VNi8tBUWurAQqr5q4FQ5cuW7ZP2zR/9pz15cvhaMBZGn22JFAujx3MnfK8S3/ocVLJ7aDhJX4XcvDwk3oqOe//DiDTiNh5c/z7itO8/l6iO/4VNGNwr2FbkV/znJLd+7PowV0+z5agprDA/l1tXkJDhu9wSnznDECnN79/u+s/wn7GPZvZ0O2/XR22++305+N7d+zH8G4nd/QB9C6ibZQvpFxjnuHGuDMf3Kzff1xr1fWX2c3HuBzq+sK9LbO8TAsHXQqDBb8W8HAmgxE2FDT4zN+5Kw2JloLkGu5tAC7h32crh57h2ToNJah6DCHqtMCMakbaNPjAO06naDbutL5PUYokEgXYM1+gDDoLIp+H6gGPSUm9QPajPuFdoOB0K0Zfiv2WArRtVAh/RoZwgNjWBxkNkpNmmuc3UAE3dKv5EWK1kIUVQzh+Ji4cqqU2IiyxBh1WEjQNIqpwqy4BOxHLBaGJYWZyKAWY9Q0KSM2ljZ9KWaQWcHVBQXRT0MMwQaMwUSDGBsqmmtcKz/fgBDoLPopHQV99haEQiW2jsWLETeAWCq3DSp4lHtUwwQJNBoKoxSMFVYCrISFxBlMau5mQgzSxDBOiEoyxKJGdKg8Znul9QfyzBLwNTU4AzLw0P7CdFVn3rTfZtTF6EEmjXEdAAAAAA==') format('woff2'),
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-sousuo:before {
	  content: "\e601";
		margin: 0 20rpx;
		color: #afafaf;
	}
	
	.icon-fanhui-copy-copy:before {
	  content: "\e600";
	}
.virtual{
	height: calc(var(--status-bar-height) + 44px);
}
	.d-content {
		height: calc(var(--status-bar-height) + 44px);
		display: flex;
		position: fixed;
		align-items: center;
		padding: 0 20rpx;
		top: 0;
		left: 0;
		right: 0;
		font-size: 35rpx;
		&>view{
			margin-top: 50rpx;
		}
	}

	.d-left {
		flex-grow: 1;
	}

	.d-middle {
		flex-grow: 1;
		.search{
			display: flex;
			align-items: center;
			background-color: #f4f4f4;
			border-radius: 50rpx;
		}
	}

	.d-right {
		text-align: right;
		flex-grow: 1;
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	
</style>
