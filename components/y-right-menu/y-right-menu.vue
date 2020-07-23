<template>
	<view class="y-right-menu" @click="$emit('click')">
		<view class="arrangement b">
			<view class="arrangement">
				<image :src="urlpicture" v-if="picshow" class="img"></image>
				<view class="title ml20">{{title}}</view>
			</view>
			<view v-if="clearable" class="m-input-icon">
				<mIcon color="#999" font-size="10" type="arrowright" @click="clear" v-if="clearable" ></mIcon>
			</view>
		</view>
	</view>
</template>

<script>
	import mIcon from '../m-icon/m-icon.vue'
	export default {
		components: {
			mIcon
		},
		props: {
			/**
			 * 图片
			 */
			urlpicture: String,
			picshow: {
				type: [Boolean, String],
				default: false
			},
			title: {
				type: [Boolean, String],
				default: ''
			},
			clearable: {
				type: [Boolean, String],
				default: false
			},
		},
		model: {
			prop: 'value',
			event: 'input'
		},
		data() {
			return {
				/**
				 * 显示密码明文
				 */
				showPassword: false,
				/**
				 * 是否获取焦点
				 */
				isFocus: false
			}
		},
		computed: {
			inputType() {
				const type = this.type
				return type === 'password' ? 'text' : type
			}
		},
		methods: {
			clear() {
				this.$emit('input', '')
			},
			display() {
				this.showPassword = !this.showPassword
			},
			onFocus() {
				this.isFocus = true
			},
			onBlur() {
				this.$nextTick(() => {
					this.isFocus = false
				})
			},
			onInput(e) {
				this.$emit('input', e.detail.value)
			}
		}
	}
</script>

<style>

	.m-input-icon{
		color: #999;
		
	}
	.y-right-menu{
		background-color: #fff;
		padding: 0 30upx;
		
		
	}
	.img{
		width:40upx;
		height: 40upx;
	}
	.title{
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(0,0,0,1);
	}
	.arrangement{
		display: flex;
		flex: 1;
		align-items: center;
	
	}
	.b{
		padding: 10upx 0;
			border-bottom: 1px solid #EEEDEB;
	}
	
</style>
